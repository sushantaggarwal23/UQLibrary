/**
 * Created by Sushant Aggarwal on 21/11/2016.
 */
//getter setter servie for library list 
angular.module('libraryApp').service('getLibraryListObject', function() {
    var libraryList = [];

    var addList = function(newObj) {
        libraryList.length = 0;
        libraryList.push(newObj);
    };

    var getlist = function(){
        return libraryList;
    };

    return {
        addList: addList,
        getlist: getlist
    };

});
