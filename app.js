let app = angular.module("newsApp", []);

//create an new xmlhttp request
funciton

//create controller
app.controller("NewsController", function($scope,newsy){
    $scope.news = newsy.getNews();
});


//create a factory that connects to the api
app.factory("NewsGetter", function ($http){
//create empty array for news objects
let newsy = [];
$http({
    method: 'GET',
    url: "http://puzzlegram.herokuapp.com/news",
}).then(function (response){
    angular.copy(response.data, newsy);
});
    return{
        getNews: function(){
            return newsy;
        }
    };
});