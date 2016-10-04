(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];

  reposObj.requestRepos = function(callback) {
    /* DONE: How would you like to fetch your repos? Someone say AJAX?!
      Do not forget to call the callback! */
    $.get('https://api.github.com/users/codefellows/repos', function(data) {
      console.log('data from api: ', data);
    });
    callback();
  };

  reposObj.withTheAttribute = function(myAttr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.reposObj = reposObj;
})(window);
