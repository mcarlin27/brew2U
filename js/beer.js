var apiKey = require('./../.env').apiKey;


function User() {
}

User.prototype.getBeer = function(location, displayBreweries) {

  $.get('http://api.brewerydb.com/v2/locations?key=' + apiKey + '&postalCode=' + location)
    .then(function(response) {
      displayBreweries(response.main.name)
    });
};

exports.userModule = User;
