var stockholm = new google.maps.LatLng(5.427194, -4.020574);
var parliament = new google.maps.LatLng(5.427194, -4.020574);
var marker;
var map;

function initialize() {
  var mapOptions = {
    zoom: 16,
    scrollwheel: false,
    center: stockholm
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
          mapOptions);

  marker = new google.maps.Marker({
    map:map,
    draggable:true,
    animation: google.maps.Animation.DROP,
    position: parliament
  });
  google.maps.event.addListener(marker, 'click', toggleBounce);
}

function toggleBounce() {

  if (marker.getAnimation() != null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

google.maps.event.addDomListener(window, 'load', initialize);
