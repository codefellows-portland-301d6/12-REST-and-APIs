(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];

  reposObj.requestRepos = function(callback) {
    /* TODO: How would you like to fetch your repos? Someone say AJAX?!
      Do not forget to call the callback! */

    $.ajax( {
      url: 'https://api.github.com/users/willnickerson/repos',
      method: 'GET',
      headers: {
        authorization: 'token ' + token
      },
      success: successHandler,
      error: errorHandler
    });

    function successHandler(data) {
      console.log('Succsess');
      reposObj.allRepos = data;
      callback();
      console.log(data);
    };

    function errorHandler(error) {
      console.log('ERROR ' + error);
    }
  };

  reposObj.withTheAttribute = function(myAttr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.reposObj = reposObj;
})(window);
