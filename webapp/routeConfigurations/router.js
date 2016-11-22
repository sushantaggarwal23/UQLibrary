/**
 * Created by Sushant Aggarwal on 19/11/2016.
 */


// configure our routes
angular.module('libraryApp').config(function($routeProvider) {
    $routeProvider

        // route for the library list page
        .when('/list', {
            templateUrl : './webapp/views/libraryList/libraryList.html',
            controller  : 'libraryList'
        })
        .when('/new', {
            templateUrl : './webapp/views/addLibrary/addLibrary.html',
            controller  : 'addLibrary'
        })
        .when('/:id', {
            templateUrl : './webapp/views/libraryDetails/libraryDetails.html',
            controller  : 'libraryDetails'
        })
        .otherwise({
            templateUrl : './webapp/views/libraryList/libraryList.html',
            controller  : 'libraryList'
        })
    ;
});
