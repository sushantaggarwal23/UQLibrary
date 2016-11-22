/**
 * Created by Sushant Aggarwal on 19/11/2016.
 */

angular.module('libraryApp',['ngRoute','ngMaterial','ngMessages']).config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('deep-purple')
        .accentPalette('blue').backgroundPalette('grey').warnPalette('green');
});