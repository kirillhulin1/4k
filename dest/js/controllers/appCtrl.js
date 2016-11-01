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
        login: "Кirill Hulin",
        name: "Кирилл",
        surname: "",
        patronomic: "",
        email: "kirillhulin@ya.ru",
        password: "",
        cartItems: [{
            "name": "sdasfaf",
            "brand": "sdasfaf",
            "width": 185,
            "height": 65,
            "diameter": 15,
            "loadIndex": "80(111)",
            "speedIndex": "sa",
            "price": 62.12,
            "quantity": 4,
            "season": "all",
            "picture": "dest/images/model-image-1.png",
            "id": 19048343814901,
            "available": 10
        }],
        recentItems: [],
        selectedItems: [],
        address: "",
        phone: "",
        purchases: [],
        comments: [],
        totalCartPrice: 0,
        loggedIn: true,
        countTotalCartPrice: function() {
            var self = this;
            self.totalCartPrice = 0;
            angular.forEach(this.cartItems, function(item){
                self.totalCartPrice += Number((item.price * item.quantity).toFixed(2));
            });
        }
    };

    $scope.topTabActive = 0;
    $scope.$on("topTabActiveChanged",function(e,newActiveTab){
        $scope.$broadcast("changeTopTabs",newActiveTab);
    });

    $scope.$on("tiresParamsChosen",function(e,params){
        console.log(1);
        $scope.$broadcast("changeTiresChooseParams",params);
    });

    //Фунции вставляюшие нужный css класс в зависимости от раздела новостей
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