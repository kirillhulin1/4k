app.config(["$stateProvider",function($stateProvider){

    $stateProvider.state("home",{
            url: "",
            views: {
                'header': {
                    templateUrl: 'templates/header.html'
                },
                'main-top': {
                    templateUrl: 'templates/tabs.html',
                    controller: "TabsCtrl"
                },
                'main': {
                    templateUrl: "templates/home.html",
                    controller: "HomeCtrl"
                },
                'main-bottom': {
                    templateUrl: "templates/help-us.html"
                },
                'footer': {
                    templateUrl: 'templates/footer.html'
                }
            },
            data: {
                displayName: 'Главная'
            }
        })
        .state("home.tires.size",{
            url:"/:width-:height-:diameter",
            views: {
                "main@":{
                    templateUrl: "templates/tires.html",
                    controller: "TiresCtrl"
                }
            },
            data: {
                displayName: 'Шины'
            }
        })
        .state("home.tires",{
            url:"/tires",
            views: {
                "main@":{
                    templateUrl: "templates/catalog.html",
                    controller: "CatalogCtrl"
                }
            },
            resolve: {
                brandsData: function(PostBrands){
                    return PostBrands.query();
                }
            },
            data: {
                displayName: 'Легковые шины'
            }
        })
        .state("home.tires.brand",{
            url:"/:brand",
            views: {
                "main@":{
                    templateUrl: "templates/brand.html",
                    controller: "BrandCtrl"
                }
            },
            resolve: {
                brandData: function(PostBrands,$stateParams){
                    return PostBrands.get({brandId:$stateParams.brand}).$promise;
                }
            },
            data: {
                displayName: 'Брэнд'
            }

        })
        .state("home.tires.brand.model",{
            url:"/:model",
            views: {
                "main@":{
                    templateUrl: "templates/model.html",
                    controller: "ModelCtrl"
                }
            },
            resolve: {
                modelData: function(PostModels,$stateParams){
                    return PostModels.get({modelName:$stateParams.model}).$promise;
                }
            },
            params: {
                tab: "description",
                modelSize: ""
            },
            data: {
                displayName: 'Модель'
            }
        })
        .state("home.news",{
            url:"/news",
            views: {
                "main@":{
                    templateUrl: "templates/news.html",
                    controller: "NewsCtrl"
                }
            },
            data: {
                displayName: 'Новости'
            },
            resolve: {
                newsData: function(PostNews){
                    return PostNews.query();
                }
            }
        })
        .state("home.news.detail",{
            url:"/:name",
            views: {
                "main@":{
                    templateUrl: "templates/news-detail.html",
                    controller: "NewsDetailCtrl"
                }
            },
            data: {
                displayName: ''
            }
        })
        .state("home.calculator", {
            url:"/calculator",
            views: {
                "main@":{
                    templateUrl: "templates/calculator.html",
                    controller: "CalculatorCtrl"
                },
                "main-top@": {
                    templateUrl: "templates/calculator-banner.html"
                },
                "main-bottom@": {
                    templateUrl: "templates/calculator-info.html"
                }
            },
            data: {
                displayName: 'Шинный калькулятор'
            }
        })
        .state("home.contacts", {
            url:"/contacts",
            views: {
                "main@":{
                    templateUrl: "templates/contacts.html",
                    controller: "ContactsCtrl"
                },
                "main-top@": {
                    templateUrl: "templates/contacts-banner.html"
                }
            },
            data: {
                displayName: "Контакты"
            }
        })
        .state("home.oplata-i-dostavka", {
            url:"/oplata-i-dostavka",
            views: {
                "main@":{
                    templateUrl: "templates/oplata-i-dostavka.html",
                    controller: "OplataCtrl"
                }
            },
            data: {
                displayName: "Оплата и доставка"
            }
        })
        .state("home.akzii", {
            url:"/akzii",
            views: {
                "main@":{
                    templateUrl: "templates/akzii.html",
                    controller: "AkziiCtrl"
                }
            },
            data: {
                displayName: "Акции"
            }
        })

}]);


