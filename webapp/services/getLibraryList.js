/**
 * Created by Sushant Aggarwal on 20/11/2016.
 */


//service for getting library list data
angular.module('libraryApp').service('getLibraryList', function($http) {
    this.getData = function() {
        var url = 'http://localhost:1337/app.library.uq.edu.au/api/v2/library_hours';
        return $http.get(url);
    }
});
