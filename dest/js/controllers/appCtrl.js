app.controller("AppCtrl",["$scope", "user", "$uibModal", "modals", function($scope, user, $uibModal, modals) {
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

    $scope.newsStructure = {};
    $scope.setNewsStructure = function(data){
        $scope.newsStructure = data;
    };

    $scope.lastNews = {};
    $scope.setLastNews = function(lastNews){
        $scope.lastNews = lastNews;
    };


    $scope.user = user;

    $scope.topTabActive = 0;
    $scope.$on("topTabActiveChanged",function(e,newActiveTab){
        $scope.$broadcast("changeTopTabs",newActiveTab);
    });



    //Фунции вставляюшие; нужный css класс в зависимости от раздела новостей
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
    };

    $scope.openModalSearch = modals.openModalSearch;
    $scope.openModalCart = modals.openModalCart;
    $scope.openModalChangePassword = modals.openModalChangePassword;
    $scope.openModalForget = modals.openModalForget;
    $scope.openModalLogIn = modals.openModalLogIn;
    $scope.openModalRegister = modals.openModalRegister;
}]);