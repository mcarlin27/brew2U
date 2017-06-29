var User = require('./../js/beer.js').userModule;
var initMap = require('./../js/beer.js').initMapModule;


var displayBreweries = function(array) {
  array.forEach(function(data) {
    $(".showBreweries").append('<li>' + data.name + '<br>' + data.streetAddress + '<br>' + data.phone + '<br>' + data.website +  '<br>' + data.hoursOfOperation + '</li>');
  });
};

$(document).ready(function() {
  initMap();
  $("#user-form").submit(function(event) {
    event.preventDefault();
    $(".showBreweries").empty();



    var currentUserObject = new User();
    var location = $("#location").val();
    if (isNaN(parseFloat(location))) {
      currentUserObject.getBeerWithCity(location, displayBreweries);
    } else {
      currentUserObject.getBeerWithZip(location, displayBreweries);
    }
    // var radius = $("#radius").val();
    // console.log(location);
    // console.log(currentUserObject);
  });
});
