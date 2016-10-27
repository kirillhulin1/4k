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

    $scope.lastNews = {};
    $scope.setLastNews = function(lastNews){
        $scope.lastNews = lastNews;
    };


    $scope.user = {
        cartItems: [

        ],
        recentItems: [],
        selectedItems: []
    };

    $scope.insertClass = function(name) {
        var className = "";

        switch (name) {
            case "Все о шинах": {
                className = "news-list__item_info";
                break;
            }
            case "Новости": {
                className =  "news-list__item_news";
                break;
            }
            case "Тесты шин": {
                className =  "news-list__item_test";
                break;
            }
        }

        return className;
    };
    $scope.insertClassInLastNews = function(name) {
        var className = "";

        switch (name) {
            case "Все о шинах": {
                className = "news-last__item_info";
                break;
            }
            case "Новости": {
                className =  "news-last__item_news";
                break;
            }
            case "Тесты шин": {
                className =  "news-last__item_test";
                break;
            }
        }

        return className;
    }

}]);