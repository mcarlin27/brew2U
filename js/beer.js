var apiKey = require('./../.env').apiKey;
var mapApiKey = require('./../.env').mapApiKey;
var map;

function User() {
}

function LngLat(lng, lat) {
  this.lng = lng;
  this.lat = lat;
}


function initMap(lat, lng) {
  var userInput = {
    lat: lat,
    lng: lng
  };

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: userInput
  });
}


var lngLatArray = [];

User.prototype.getBeer = function(location, displayBreweries) {
  $.get('http://api.brewerydb.com/v2/locations?key=' + apiKey + '&postalCode=' + location)
    .then(function(response) {

      response.data.forEach(function(element) {
        displayBreweries(element.name + ", ");
        var newLngLat = new LngLat(element.longitude, element.latitude);
        lngLatArray.push(newLngLat);
      });
    });
    console.log(lngLatArray);
  };


LngLat.prototype.dropPin = function(lngLatArray, location) {
  $.get('https://maps.googleapis.com/maps/api/js?key=' + mapApiKey)
    .then(function(response) {
      console.log(response);
      lngLatArray.forEach(function(lngLat) {
        var position = new google.maps.LatLng(lngLat.latitude, lngLat.longitude);
        new google.maps.Marker({
          map: map,
          position: position
        });
      });
    });
  };

exports.userModule = User;
