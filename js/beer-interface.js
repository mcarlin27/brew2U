var User = require('./../js/beer.js').userModule;

var displayBreweries = function(breweryData) {
  $('.showBreweries').append(breweryData);
};

$(document).ready(function() {
  $("#user-form").submit(function(event) {
    event.preventDefault();
    var currentUserObject = new User();
    var location = $("#location").val();
    // var radius = $("#radius").val();
    // console.log(location);
    // console.log(currentUserObject);
    currentUserObject.getBeer(location, displayBreweries);
  });
});
