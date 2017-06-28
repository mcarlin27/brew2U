var apiKey = require('./../.env').apiKey;


function User() {
}

User.prototype.getBeer = function(location) {

  $.get('http://api.brewerydb.com/v2/locations?key=' + apiKey + '&postalCode=' + location)
    .then(function(resp) {
      console.log(resp);
    });
};

exports.userModule = User;
