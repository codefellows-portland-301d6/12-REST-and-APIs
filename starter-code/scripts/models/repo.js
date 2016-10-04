(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];

  reposObj.requestRepos = function(callback) {
    /* TODO:DONE How would you like to fetch your repos? Someone say AJAX?!
      Do not forget to call the callback! */
    $.ajax({
      url: 'https://api.github.com/users/TomTimmel/repos',
      success: function(data){
        data.forEach(function(a) {
          reposObj.allRepos.push(a);
        });
        callback(reposObj.allRepos);
      },
      error: function(error){
        console.log(error);
      },
      headers: {Authorization: 'token '+ token},
    });
  };

  reposObj.withTheAttribute = function(myAttr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.reposObj = reposObj;
})(window);
