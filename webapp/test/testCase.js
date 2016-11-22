/**
 * Created by Sushant Aggarwal on 21/11/2016.
 */

describe('libraryApp', function() {

    beforeEach(module('libraryApp'));

    //describing 1st case to calculate available hours Sum
        var scope, createController;
        //
        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();

            createController =$controller('addLibrary', {
                    $scope: scope
                });

        }));
    describe('addLibrary', function () {
        it('Sum of available hours from list should be 15', function () {
            expect(scope.simpleTest()).toBe(15);

        });
    });

});