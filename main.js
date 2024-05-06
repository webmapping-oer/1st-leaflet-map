/* 1st Leaflet Map */

// Karte initialisieren
let map = L.map("map");

// auf den Stephansdom blicken
map.setView([48.208493, 16.373118], 12);

// Hintergrundkarten der basemap.at und OpenStreetMap hinzufügen
L.control.layers({
    "BasemapAT Standard": L.tileLayer.provider("BasemapAT.basemap").addTo(map),
    "BasemapAT High-DPI": L.tileLayer.provider("BasemapAT.highdpi"),
    "BasemapAT Grau": L.tileLayer.provider("BasemapAT.grau"),
    "BasemapAT Gelände": L.tileLayer.provider("BasemapAT.terrain"),
    "BasemapAT Oberfläche": L.tileLayer.provider("BasemapAT.surface"),
    "BasemapAT Orthofoto (beschriftet)": L.layerGroup([
        L.tileLayer.provider("BasemapAT.orthofoto"),
        L.tileLayer.provider("BasemapAT.overlay"),
    ]),
    "OpenStreetMap": L.tileLayer.provider("OpenStreetMap.Mapnik"),
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
