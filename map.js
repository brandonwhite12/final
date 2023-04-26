function initMap() {
  // Define the location of the map and the zoom level
  var myLatLng = { lat: 40.7128, lng: -74.006 };

  // Create a new map object centered at the specified location
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: myLatLng,
  });

  // Add a marker at the specified location
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "My Location",
  });
}
