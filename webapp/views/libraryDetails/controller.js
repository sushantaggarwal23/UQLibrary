/**
 * Created by Sushant Aggarwal on 19/11/2016.
 */
angular.module('libraryApp').controller('libraryDetails', function($scope,$routeParams,$filter,getLibraryListObject,getComputerAvailabilityObject) {

    $scope.id = $routeParams.id;
    $scope.availableTotal = "Not Available";
    $scope.occupiedTotal = "Not Available";
    //function to find sum of field values
    $scope.sum = function(items, prop){
        return items.reduce( function(a, b){
            return a + b[prop];
        }, 0);
    };
    // getting data from all the objects
    $scope.libraryList =  getLibraryListObject.getlist();
    $scope.computerAvailability = getComputerAvailabilityObject.getlist();

    //getting data and replacing &amp; from Json String
    $scope.libObj = $filter('filter')($scope.libraryList[0], {lid: parseInt($scope.id)})[0];
    $scope.departments = $scope.libObj.departments;
    $scope.libObj.libName = $scope.libObj.name;
    $scope.libObj.name = $scope.libObj.name.replace('&',"\u0026amp;");
    $scope.CompAvailObj = $filter('filter')($scope.computerAvailability[0], {library: $scope.libObj.name})[0];
    if($scope.CompAvailObj !== undefined) {
        $scope.CompAvailObj.library = $scope.CompAvailObj.library.replace(/&amp;/g, '&');

        //creating array out of json objects
        //start
        var availabilityJson = $scope.CompAvailObj.availability;
        var availability = [];
        for (var key in availabilityJson) {
            if (!availabilityJson.hasOwnProperty(key) // skip prototype extensions
                || !availabilityJson[key].hasOwnProperty("roomCode") //skip non account objects
            ) continue;
            availability.push(availabilityJson[key]);
        }
        $scope.availableComputers = availability;
        $scope.availableTotal = $scope.sum($scope.availableComputers, 'Available');
        $scope.occupiedTotal = $scope.sum($scope.availableComputers, 'Occupied');
    }
    //end





});