/**
 * Created by Sushant Aggarwal on 21/11/2016.
 */
angular.module('libraryApp').controller('addLibrary', function($scope) {
    $scope.status=false;
    $scope.statusMessage = '';
    $scope.$watch(function() { return $scope.projectForm.$valid}, function(isValid) {
        if($scope.projectForm.$submitted == false) return;
        if(isValid) {
           alert('successfull')
        }
    });

    $scope.submit = function() {
        // validation
        if ($scope.projectForm.$valid) {
            $scope.status=true;
            $scope.statusMessage = 'Record successfully added';
            $scope.library = angular.copy({});
            $scope.projectForm.$setPristine();
            $scope.projectForm.$setValidity();
            $scope.projectForm.liraryName.$setViewValue('');
            $scope.projectForm.id.$setViewValue('');
            $scope.projectForm.$setUntouched();
        }
        return false; //failed
    }

   //sample code to test unit testing no relation with application
    $scope.simpleTest = function(){
        $scope.x =5;
        $scope.y = 10;
        return $scope.x + $scope.y;
    }
    //end

});