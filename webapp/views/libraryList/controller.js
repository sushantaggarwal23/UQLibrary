/**
 * Created by Sushant Aggarwal on 19/11/2016.
 */
//controller for library list page
angular.module('libraryApp').controller('libraryList', function($scope,getLibraryList,getLibraryListObject,getComputerAvailability,getComputerAvailabilityObject) {

    $scope.libraryList = [];
    $scope.computerAvailability = [];
    // getting library list data
    //calling service
    $scope.getLibdata = function() {
        getLibraryList.getData().then(function (response) {
            $scope.libraryList = response.data.locations;
            //adding data in listLibraries List object
            getLibraryListObject.addList($scope.libraryList);
        });
    }
    $scope.getLibdata();
    //getting computer availability Data
    //calling service
    getComputerAvailability.getData().then(function successCallback(response) {
        $scope.computerAvailability = response.data;
        //adding data in computerAvailabiluty List object
        getComputerAvailabilityObject.addList($scope.computerAvailability);
    },function errorCallback(response) {
        $scope.computerAvailability = response.data;
    });

});