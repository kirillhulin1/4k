app.controller("HomeCtrl",["$scope","$http",function($scope,$http){
    $scope.season = "Все";
    $scope.diameter = "R13";
    $scope.results = [];
    $scope.search = "R13Все";
    var results = {};



    function updateResults(search) {
        $scope.search = search;
        if (search in results) {
            $scope.results = results[search];
        }
        else {
            $scope.results = [];
            $http({
                method: 'GET',
                url: 'popular.json'
            }).then(function successCallback(response) {
                $scope.results = response.data[search];
                results[search] = response.data[search];
            }, function errorCallback(response) {
                console.log("Произошла ошибка при загрузке данных");
            });
        }

    }

    $scope.$watch("season",function(newData,oldData){

        updateResults($scope.diameter+""+$scope.season);
    });
    $scope.$watch("diameter",function(newData,oldData){

        updateResults($scope.diameter+""+$scope.season);
    });

    //Функция раскрывает и скрывает блок "О компании"
    $scope.showMore = function() {
        var $contentWrap = $(".about .container");
        var $content = $(".about__content");

        if ($contentWrap.hasClass("about__opened")) {
            $(".about .container").animate({height: 440 + "px"},300);
            $content.animate({height: 440 + "px"},300,function(){
                $content.removeAttr("style");
                $contentWrap.removeAttr("style");
                $contentWrap.toggleClass("about__opened");
                $(".about__anchor").text("Читать далее");
            });
        }
        else {
            $content.animate({height: $content.height()+"px"},300);
            $contentWrap.animate({height: $content.height()+70+"px"},300,function(){
                $contentWrap.toggleClass("about__opened");
                $content.removeAttr("style").css("height","auto");
                $(".about__anchor").text("Свернуть");
            });
        }
    }
}]);