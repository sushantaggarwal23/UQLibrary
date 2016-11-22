/**
 * Created by Sushant Aggarwal on 20/11/2016.
 */
//service to get available computers data
angular.module('libraryApp').service('getComputerAvailability', function($http) {
    this.getData = function() {
    //used corsproxy to get data
        //Note: please run corsproxy once application is loaded from the command line
        var url = 'http://localhost:1337/app.library.uq.edu.au/api/computer_availability';
        return $http.get(url);
    }
});
