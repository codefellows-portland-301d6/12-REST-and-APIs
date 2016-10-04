(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];

  reposObj.requestRepos = function(callback) {
    /* TODO: How would you like to fetch your repos? Someone say AJAX?!
      Do not forget to call the callback! */
    $.ajax({
      url: 'https://api.github.com/users/mugsycarter/repos',
      password: token,
      success: function(data, status, xhr){
        console.log('success, here are the data:' + data);
        callback();
      },
      error: function(xhr, settings, error){
        console.log('Ajax call error:' + error);
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
