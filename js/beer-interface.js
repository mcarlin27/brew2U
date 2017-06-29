var User = require('./../js/beer.js').userModule;
// var initMap = require('./../js/beer.js').initMapModule;


var displayBreweries = function(breweryData) {
  $('.showBreweries').append(breweryData);
};

$(document).ready(function() {
  // initMap();
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
