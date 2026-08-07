"use strict";

const state = { communes: [], centres: [] };
const form = document.querySelector("#search-form");
const queryInput = document.querySelector("#query");
const statusBox = document.querySelector("#status");
const choices = document.querySelector("#choices");
const choicesList = document.querySelector("#choices-list");
const results = document.querySelector("#results");
const cards = document.querySelector("#cards");
const locationSummary = document.querySelector("#location-summary");

function normalize(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

function parseCsv(text) {
  const lines = text.trim().split(/\r?\n/);
  return lines.slice(1).map((line) => {
    const [code_postal, code_insee, commune, latitude, longitude] = line.split(",");
    return { code_postal, code_insee, commune, latitude: Number(latitude), longitude: Number(longitude) };
  }).filter((row) => row.code_postal && Number.isFinite(row.latitude) && Number.isFinite(row.longitude));
}

function haversine(a, b) {
  const rad = (degrees) => degrees * Math.PI / 180;
  const dLat = rad(b.latitude - a.latitude);
  const dLon = rad(b.longitude - a.longitude);
  const lat1 = rad(a.latitude);
  const lat2 = rad(b.latitude);
  const value = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value));
}

function formatDate(value) {
  if (!value) return "Date à venir";
  return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" }).format(new Date(`${value}T12:00:00`));
}

function buildLiveCentres(sessionsDoc, geocodes) {
  const vichy = { latitude: 46.131168, longitude: 3.428025 };
  const futureByCentre = new Map();
  (sessionsDoc.sessions || []).forEach((item) => {
    if (item.actif !== "Oui" || item.statut !== "À venir") return;
    const list = futureByCentre.get(item.code_centre) || [];
    list.push(item.date_session);
    futureByCentre.set(item.code_centre, list);
  });
  return (sessionsDoc.centres || []).map((item) => {
    const geo = item.code_centre === "VICHY" ? vichy : geocodes[item.code_centre];
    if (!geo) return null;
    return {
      ...item,
      latitude: Number(geo.latitude),
      longitude: Number(geo.longitude),
      sessions: (futureByCentre.get(item.code_centre) || []).sort().slice(0, 3)
    };
  }).filter(Boolean);
}

function findCommunes(raw) {
  const value = raw.trim();
  if (/^\d{5}$/.test(value)) return state.communes.filter((item) => item.code_postal === value);
  const needle = normalize(value);
  if (needle.length < 2) return [];
  const exact = state.communes.filter((item) => normalize(item.commune) === needle);
  return exact.length ? exact : state.communes.filter((item) => normalize(item.commune).startsWith(needle)).slice(0, 20);
}

function showChoices(matches) {
  choicesList.replaceChildren();
  const unique = [...new Map(matches.map((item) => [`${item.code_postal}-${item.code_insee}`, item])).values()];
  unique.forEach((commune) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice";
    button.textContent = `${commune.commune} (${commune.code_postal})`;
    button.addEventListener("click", () => showResults(commune));
    choicesList.append(button);
  });
  choices.classList.remove("hidden");
  results.classList.add("hidden");
  statusBox.textContent = `${unique.length} commune${unique.length > 1 ? "s" : ""} correspondante${unique.length > 1 ? "s" : ""}.`;
}

function showResults(commune) {
  const nearest = state.centres.map((centre) => ({ ...centre, distance: haversine(commune, centre) })).sort((a, b) => a.distance - b.distance).slice(0, 3);
  cards.replaceChildren();
  nearest.forEach((centre, index) => {
    const article = document.createElement("article");
    article.className = "card";
    const sessionItems = (centre.sessions || []).length
      ? centre.sessions.map((date) => `<li>${formatDate(date)}</li>`).join("")
      : "<li>Consultez le formulaire pour les prochaines dates.</li>";
    article.innerHTML = `<span class="rank">Choix ${index + 1}</span><div class="city">${centre.ville}</div><p class="meta">${centre.departement} · ${centre.region}<br><strong>${Math.round(centre.distance)} km</strong> à vol d’oiseau</p><div><strong>Prochaines sessions</strong><ul class="sessions">${sessionItems}</ul></div><a class="button" href="${centre.lien_forms}" target="_blank" rel="noopener">Voir les sessions et s’inscrire</a>`;
    cards.append(article);
  });
  locationSummary.textContent = `Résultats calculés depuis ${commune.commune} (${commune.code_postal}).`;
  choices.classList.add("hidden");
  results.classList.remove("hidden");
  statusBox.textContent = "Recherche terminée.";
  results.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function init() {
  try {
    let communesResponse = await fetch("data/communes_france.csv");
    if (!communesResponse.ok) {
      communesResponse = await fetch("../communes_france.csv");
    }
    const centresResponse = await fetch("data/centres_frate.json", { cache: "no-store" });
    if (!communesResponse.ok || !centresResponse.ok) throw new Error("Données indisponibles");
    state.communes = parseCsv(await communesResponse.text());
    state.centres = (await centresResponse.json()).centres || [];
    try {
      const [sessionsResponse, geocodesResponse] = await Promise.all([
        fetch("../exports_chatmd/data/sessions.json", { cache: "no-store" }),
        fetch("../exports_chatmd/data/centres_geocodes.json", { cache: "no-store" })
      ]);
      if (sessionsResponse.ok && geocodesResponse.ok) {
        const live = buildLiveCentres(await sessionsResponse.json(), await geocodesResponse.json());
        if (live.length >= 3) state.centres = live;
      }
    } catch (_) {
      // La copie locale reste disponible si les données du workflow ne le sont pas.
    }
    if (!state.communes.length || state.centres.length < 3) throw new Error("Données incomplètes");
    statusBox.textContent = `${state.communes.length.toLocaleString("fr-FR")} correspondances communales chargées. Vous pouvez rechercher.`;
  } catch (error) {
    statusBox.textContent = "La recherche n’a pas pu charger ses données. Réessayez plus tard ou choisissez un centre par région dans ChatMD.";
    statusBox.classList.add("error");
    form.querySelector("button").disabled = true;
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const matches = findCommunes(queryInput.value);
  if (!matches.length) {
    choices.classList.add("hidden");
    results.classList.add("hidden");
    statusBox.textContent = "Aucune commune trouvée. Vérifiez le code postal ou essayez le nom de la commune.";
    statusBox.classList.add("error");
    return;
  }
  statusBox.classList.remove("error");
  if (matches.length === 1) showResults(matches[0]); else showChoices(matches);
});

document.querySelector("#new-search").addEventListener("click", () => {
  results.classList.add("hidden");
  choices.classList.add("hidden");
  queryInput.value = "";
  queryInput.focus();
  statusBox.textContent = "Saisissez une nouvelle commune ou un code postal.";
});

init();
