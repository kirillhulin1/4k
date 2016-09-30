app.controller('TabsCtrl', ["$scope","$sce","$http","$interpolate", function ($scope,$sce,$http,$interpolate) {
    var startContent = '<div class="tabs-tires__start"><img src="dest/images/ajax-loader.gif"></div>';
    var content2loaded = false;
    var content3loaded = false;
    $scope.sce = $sce;
    function loadContent(url,index) {
        $http({
            method: 'GET',
            url: url
        }).then(function successCallback(response) {
            $scope.tabs[index].content = $interpolate(response.data)($scope);
        }, function errorCallback(response) {
            console.log("Произошла ошибка при загрузке содержимого вкладки");
        });
    }

    $scope.active = 0;
    $scope.changeActive = function(index) {
        $scope.active = index;

        //Аякс-загрузка второй вкладки при первом клике по вкладке
        if (index == 1 && !content2loaded)  {
            loadContent("templates/tab2-content.html",1);
            content2loaded = true;
        }

        //Аякс-загрузка третьей вкладки при первом клике по вкладке
        if (index == 2 && !content3loaded)  {
            loadContent("templates/tab3-content.html",2);
            content3loaded = true;
        }
    };

    loadContent("templates/tab1-content.html",0);


    $scope.tabs = [
        { title:'Подбор шин по параметрам', content: startContent },
        { title:'Подбор дисков по параметрам', content: startContent},
        { title:'Подбор шин и дисков по авто', content: startContent}
    ];
    $scope.current = "Подбор шин по параметрам"; //$scope.tabs[0].title;






}]);