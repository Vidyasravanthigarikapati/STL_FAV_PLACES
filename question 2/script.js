var map = L.map('map').setView([37.7, -122.4], 10);

  // load a tile layer
L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png', {
  attribution: 'Map tiles by Stamen Design via Stadia Maps, under CC BY 3.0.',
  maxZoom: 20,
  detectRetina: true
}).addTo(map);

 

// Define the custom rat icon
var ratIcon = L.icon({
  iconUrl: 'http://maptimeboston.github.io/leaflet-intro/rat.gif',
  iconSize: [50, 40]
});

// Load GeoJSON data and add to map with custom markers
$.getJSON("https://raw.githubusercontent.com/orhuna/WebGIS_SLU_M1/main/Module%201/Assignment%201/data/sf_crime.geojson", function(data){
  L.geoJson(data, {
    pointToLayer: function(feature, latlng) {
      return L.marker(latlng, {icon: ratIcon});
    }
  }).addTo(map);
});