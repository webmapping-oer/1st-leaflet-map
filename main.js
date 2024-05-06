/* 1st Leaflet Map */

// Karte initialisieren
let map = L.map("map");

// auf den Stephansdom blicken
map.setView([48.208493, 16.373118], 12);

// Hintergrundkarte der OpenStreetMap hinzufügen
L.control.layers({
    "OpenStreetMap": L.tileLayer.provider("OpenStreetMap.Mapnik").addTo(map)
}).addTo(map);

// Marker für den Stephansdom hinzufügen
let marker = L.marker([48.208493, 16.373118]).addTo(map);

// Popup zum Marker hinzufügen und öffnen
marker.bindPopup(`
    <h4>Stephansdom</h4>
`).openPopup();

// Maßstab
L.control.scale({
    imperial: false
}).addTo(map);
