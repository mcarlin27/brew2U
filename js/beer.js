var apiKey = require('./../.env').apiKey;

function User() {
}

function LngLat(lng, lat) {
  this.lng = lng;
  this.lat = lat;
}

function Brewery(name, streetAddress, phone, website, hoursOfOperation) {
  this.name = name;
  this.streetAddress = streetAddress;
  this.phone = phone;
  this.website = website;
  this.hoursOfOperation = hoursOfOperation;
}

var breweryArray = [];
var lngLatArray = [];
var locationArray = [];

User.prototype.getBeerWithZip = function(location, displayBreweries) {
  $.get('http://api.brewerydb.com/v2/locations?key=' + apiKey + '&postalCode=' + location)
    .then(function(response) {
      response.data.forEach(function(element) {
        var newBrewery = new Brewery(element.name, element.streetAddress, element.phone, element.website, element.hoursOfOperation);
        breweryArray.push(newBrewery);

        breweryArray.forEach(function(brewery) {
          if (brewery.streetAddress != undefined) {
            brewery.streetAddress = brewery.streetAddress;
          } else {
            brewery.streetAddress = "Street Address: N/A";
          }
          if (brewery.phone != undefined) {
            brewery.phone = brewery.phone;
          } else {
            brewery.phone = "Phone: N/A";
          }
          if (brewery.website != undefined) {
            brewery.website = brewery.website;
          } else {
            brewery.website = "Hours of Operation: N/A";
          }
          if (brewery.hoursOfOperation != undefined) {
            brewery.hoursOfOperation = brewery.hoursOfOperation;
          } else {
            brewery.hoursOfOperation = "Website: N/A";
          }
          displayBreweries('<li>' + brewery.name + '<br>' + brewery.streetAddress + '<br>' + brewery.phone + '<br>' + brewery.website +  '<br>' + brewery.hoursOfOperation + '</li>');
        });
    });
  });
    // return lngLatArray;
};

User.prototype.getBeerWithCity = function(location, displayBreweries) {
  locationArray = location.split(", ");
  console.log(location);
  $.get('http://api.brewerydb.com/v2/locations?key=' + apiKey + '&locality=' + locationArray[0] + '&region=' + locationArray[1])
    .then(function(response) {
      response.data.forEach(function(element) {
        var newBrewery = new Brewery(element.name, element.streetAddress, element.phone, element.website, element.hoursOfOperation);
        breweryArray.push(newBrewery);

        breweryArray.forEach(function(brewery) {
          if (brewery.streetAddress != undefined) {
            brewery.streetAddress = brewery.streetAddress;
          } else {
            brewery.streetAddress = "Street Address: N/A";
          }
          if (brewery.phone != undefined) {
            brewery.phone = brewery.phone;
          } else {
            brewery.phone = "Phone: N/A";
          }
          if (brewery.website != undefined) {
            brewery.website = brewery.website;
          } else {
            brewery.website = "Hours of Operation: N/A";
          }
          if (brewery.hoursOfOperation != undefined) {
            brewery.hoursOfOperation = brewery.hoursOfOperation;
          } else {
            brewery.hoursOfOperation = "Website: N/A";
          }
          displayBreweries('<li>' + brewery.name + '<br>' + brewery.streetAddress + '<br>' + brewery.phone + '<br>' + brewery.website +  '<br>' + brewery.hoursOfOperation + '</li>');
        });
        // var newLngLat = new LngLat(parseFloat(element.longitude), parseFloat(element.latitude));
        // lngLatArray.push(newLngLat);
      });
    });
    // return lngLatArray;
  };


exports.userModule = User;
