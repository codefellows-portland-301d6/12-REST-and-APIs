(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];

  reposObj.requestRepos = function(callback) {
    /* TODO/DONE: How would you like to fetch your repos? Someone say AJAX?!
      Do not forget to call the callback! */
    $.ajax('https://api.github.com/users/dchasepdx/repos', {
      headers: {
        authorization: 'token ' + token
      }
    }).done(function(data){
      data.forEach(function(obj){
        reposObj.allRepos.push(obj);
      });
      callback();
    });

  };

  reposObj.withTheAttribute = function(myAttr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.reposObj = reposObj;
})(window);
