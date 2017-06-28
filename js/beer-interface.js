var User = require('./../js/beer.js').userModule;

$(document).ready(function() {
  $("#user-form").submit(function(event) {
    event.preventDefault();
    var currentUserObject = new User();
    var location = $("#location").val();
    var radius = $("#radius").val();
    currentUserObject.getBeer(location, radius, displayBreweries);
  });
});
