(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];

  reposObj.requestRepos = function(callback) {
    /* TODO: How would you like to fetch your repos? Someone say AJAX?!
      Do not forget to call the callback! */
    $.ajax({ url: 'https://api.github.com/users/QuantumArchive/repos',
      type: 'GET',
      headers: {
        Authorization: 'token ' + githubToken
      },
      success: function(data) {
        reposObj.allRepos = data;
        callback();
      },
      error: function() {
        console.log('The hell?');
      }
    });
  };

  reposObj.withTheAttribute = function(myAttr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.reposObj = reposObj;
})(window);
