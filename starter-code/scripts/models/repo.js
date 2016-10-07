(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];

  reposObj.requestRepos = function(callback) {
    /* TODO: How would you like to fetch your repos? Someone say AJAX?!
      Do not forget to call the callback! */
    var request = $.ajax({
      url: 'https://api.github.com/user/repos',
      method: 'GET',
      data: 'access_token=' + githubAccessToken
    })
    .done(function(rawData) {
      rawData.forEach(function(item) {
        // Store the Repo data from JSON
        reposObj.allRepos.push(item);
      });
      callback();
    })
    .fail(function(jqxhr, status) {
      console.log('ajax call failed: ', status);
      alert('ajax call failed: ' + status);
    });
  };

  reposObj.withTheAttribute = function(myAttr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.reposObj = reposObj;
})(window);
