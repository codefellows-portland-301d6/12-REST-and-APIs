(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];


  reposObj.requestRepos = function(callback) {
    /* DONE: TODO: How would you like to fetch your repos? Someone say AJAX?!
      Do not forget to call the callback! */
    $.ajax({
      method: 'GET',
      url: 'https://api.github.com/users/GloriaAnholt/repos',
      headers: { Authorization: 'token ' + token },
      success: function(data, status, xhr){
        reposObj.allRepos = data;
        callback();  // same as repoView.renderRepos();
      },
      error: function(xhr, settings, error){
        console.log('Ajax call error:', error);
      }
    }); // closes ajax
  };  // closes function

  reposObj.withTheAttribute = function(myAttr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.reposObj = reposObj;
})(window);
