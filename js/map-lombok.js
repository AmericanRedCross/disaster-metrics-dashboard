
var hotUrl = 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
  hotAttribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles from <a href="http://hot.openstreetmap.org/" target="_blank">H.O.T.</a>',
  hotLayer = L.tileLayer(hotUrl, {attribution: hotAttribution});
  
// initialize map w options
var map = L.map('map-lombok', {
  layers: [hotLayer],
  center: new L.LatLng(-8.5837,116.2738),
  zoom: 9,
  minZoom: 8
});

map.fitBounds([
  [-8.187023763401807, 115.806884765625],
  [-8.969184306479058, 116.75170898437501]
]);

L.svg().addTo(map);
// pick up the SVG from the map object
var svg = d3.select('#map-lombok').select('svg');
var districtGroup = svg.append('g').attr('id', 'admin');
var districts;

function projectPoint(x, y){
  var point = map.latLngToLayerPoint(new L.LatLng(y, x));
  this.stream.point(point.x, point.y);
}
var transform = d3.geoTransform({point: projectPoint});
var path = d3.geoPath().projection(transform);

window.onload = function() {
  d3.queue()
    .defer(d3.json, '../data/lombok-districts.json')
    .defer(d3.json, '../data/lombok-epicenter.geojson')
    .await(buildPage);
}

var buildPage = function(error, districtData, epicenterData) {
  
  districtFeatures = topojson.feature(districtData, districtData.objects.districts).features;
  
  // admin areas
  districts = districtGroup.selectAll("path")
    .data(districtFeatures, function(d){ return d.properties.DIST_ID; })
    .enter().append("path")
    .attr("class", "district district__default")
    .attr("d", path)
  updatePath = function(){ districts.attr("d", path); }
  map.on('zoom move viewreset', updatePath);
  updatePath();
  
  // epicenter
  var epicenterIcon = L.icon({
    iconUrl: '../img/epicenter.svg',
    iconSize: [30, 30]
  });
  
  L.geoJSON(epicenterData.features[0], {
    pointToLayer: function (feature, latlng) {
      return epicenterMarker = L.marker(latlng, {icon: epicenterIcon}).bindPopup("Epicenter");
    }
  }).addTo(map);
  
}