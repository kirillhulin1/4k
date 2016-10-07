app.controller("AppCtrl",["$scope","$rootScope","$log",function($scope, $rootScope,$log){
    $scope.menu = [
        {
            "title": "Шины и диски",
            "subsections": [
                {
                    "title": "Легковые шины"
                },
                {
                    "title": "Литые диски"
                },
                {
                    "title": "Грузовые шины"
                },
                {
                    "title": "Гарантия"
                },
                {
                    "title": "Шинный калькулятор"
                }
            ]
        },
        {
            "title": "Тесты и обзоры",
            "subsections": [
                {
                    "title": "Легковые шины",
                    "subsections": [
                        {
                            "title": "Легковые шины1"
                        },
                        {
                            "title": "Литые диски"
                        },
                        {
                            "title": "Грузовые шины"
                        },
                        {
                            "title": "Гарантия"
                        },
                        {
                            "title": "Шинный калькулятор"
                        }
                    ]
                },
                {
                    "title": "Литые диски"
                },
                {
                    "title": "Грузовые шины"
                }
            ]
        }

    ];

    $rootScope.$on('$stateChangeError',function(a,b,c,d,e,error){
        console.log(error);
        $log(error)
    });
    $scope.phoneFirst = "+375 29 3794864";
    $scope.phoneSecond = "+375 33 3668050";

}]);