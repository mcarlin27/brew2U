var apiKey = require('./../.env').apiKey;
var mapApiKey = require('./../.env').mapApiKey;


function User() {
}

function LngLat(lng, lat) {
  this.lng = lng;
  this.lat = lat;
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
  $.get('https://maps.googleapis.com/maps/api/js?key=' + mapApiKey + '&callback=initMap')
    .then(function initMap() {
      lngLatArray.forEach(function(lngLat) {
        var position = new google.maps.LatLng(lngLat.latitude, lngLat.longitude);
        new google.maps.Marker({
          map: mapObject,
          position: position
        });
      });

      var myOptions = {
        zoom : 16,
        center : location,
        mapTypeId : google.maps.MapTypeId.ROADMAP
      };
      var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);
    });
  };

exports.userModule = User;
