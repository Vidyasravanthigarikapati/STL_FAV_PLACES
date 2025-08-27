// Create map centered on St. Louis
var mymap = L.map('map').setView([38.627, -90.199], 13);

// Tile layer
L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'Map tiles by Stamen Design, under CC BY 3.0.',
        maxZoom: 18
}).addTo(mymap);

// === Markers with Popups ===
var marker1 = L.marker([38.6358, -90.2900]).addTo(mymap);
marker1.bindPopup("<b>St. Louis Zoo</b>", { autoClose: false }).openPopup();

var marker2 = L.marker([38.6454, -90.2537]).addTo(mymap);
marker2.bindPopup("<b>Westminster Place</b>", { autoClose: false }).openPopup();

var marker3 = L.marker([38.6296, -90.3491]).addTo(mymap);
marker3.bindPopup("<b>Whole Foods (Brentwood)</b>", { autoClose: false }).openPopup();

var marker4 = L.marker([38.6247, -90.1848]).addTo(mymap);
marker4.bindPopup("<b>Gateway Arch</b>", { autoClose: false }).openPopup();

var marker5 = L.marker([38.6360, -90.2349]).addTo(mymap);
marker5.bindPopup("<b>Saint Louis University</b>", { autoClose: false }).openPopup();
