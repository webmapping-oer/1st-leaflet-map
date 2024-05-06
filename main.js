/* 1st Leaflet Map */

// Karte initialisieren
let map = L.map("map");

// auf den Stephansdom blicken
map.setView([48.208493, 16.373118], 12);

// Hintergrundkarte der OpenStreetMap hinzufügen
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: `© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`
}).addTo(map);

// Marker für den Stephansdom hinzufügen
let marker = L.marker([48.208493, 16.373118]).addTo(map);

// Popup zum Marker hinzufügen und öffnen
marker.bindPopup(`
    <h4>Stephansdom</h4>
`).openPopup();
