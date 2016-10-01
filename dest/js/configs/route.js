app.config(["$stateProvider",function($stateProvider){

    $stateProvider.state("home",{
            url: "",
            templateUrl: "templates/home.html",
            controller: "HomeCtrl",
            data: {
                displayName: 'Главная'
            }
        })
        .state("home.tires.size",{
            url:"/:width-:height-:diameter",/*/:width/:height/:diameter*/
            views: {
                "@":{
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
                "@":{
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
                "@":{
                    templateUrl: "templates/brand.html",
                    controller: "BrandCtrl"
                }
            },
            data: {
                displayName: ""
            }

        })
        .state("home.tires.brand.model",{
            url:"/:model",
            views: {
                "@":{
                    templateUrl: "templates/model.html",
                    controller: "ModelCtrl"
                }
            },
            resolve: {
                modelData: function(PostModels,$stateParams){
                    return PostModels.get({modelName:"her"});
                }
            },
            params: {
                tab: "in-stock"
            }
        })
        .state("home.news",{
            url:"/news",
            views: {
                "@":{
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
                "@":{
                    templateUrl: "templates/news-detail.html",
                    controller: "NewsDetailCtrl"
                }
            },
            data: {
                displayName: ''
            }
        })

}]);


