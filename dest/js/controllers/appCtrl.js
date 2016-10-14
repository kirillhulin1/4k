app.controller("AppCtrl",["$scope","$rootScope","$log",function($scope, $rootScope, $log){
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
    $scope.phoneFirst = "+375 33 3668050";
    $scope.phoneSecond = "+375 29 3794864";

    $scope.newsStructure = {};

    $scope.setNewsStructure = function(data){
        $scope.newsStructure = data;
    };



    $scope.user = {
        cartItems: [
            {
                "name": "Taurus Winter 601",
                "width": 175,
                "height": 65,
                "diameter": 15,
                "something": "85Т",
                "articul": "ta11",
                "price": 50,
                "quantity": 4,
                "type": "summer",  //winter,all
                "picture": "cart_tire-1.png",
                "id": 1
            },
            {
                "name": "Taurus Winter 602",
                "width": 176,
                "height": 65,
                "diameter": 15,
                "something": "85Т",
                "articul": "ta11",
                "price": 43,
                "quantity": 4,
                "type": "winter",
                "picture": "cart_tire-3.png",
                "id": 2
            },
            {
                "name": "Taurus Winter 603",
                "width": 175,
                "height": 65,
                "diameter": 15,
                "something": "85Т",
                "articul": "ta11",
                "price": 43,
                "quantity": 4,
                "type": "all",
                "picture": "cart_tire-2.png",
                "id": 3
            }

        ],
        recentItems: [],
        selectedItems: []
    };





}]);