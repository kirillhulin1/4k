app.config(["$stateProvider",function($stateProvider){

    $stateProvider.state("home",{
            url: "",
            views: {
                'header': {
                    templateUrl: 'templates/header.html',
                    controller: 'HeaderCtrl'
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
            },
            resolve: {
                newsStructure: function(NewsStructureResource){
                    return NewsStructureResource.query().$promise;
                },
                lastNews: function(LastNewsResource){
                    return LastNewsResource.query().$promise;
                }
            }
        })
        .state("home.size",{
            url:"/:width-:height-:diameter",
            views: {
                "main@":{
                    templateUrl: "templates/tires.html",
                    controller: "TiresCtrl"
                }
            },
            data: {
                displayName: 'Шины'
            },
            resolve: {
                sizeData: function(TiresOfSizeResource,$stateParams){
                    return TiresOfSizeResource.query({
                        width:$stateParams.width,
                        height:$stateParams.height,
                        diameter:$stateParams.diameter
                    });
                }
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
                "main@": {
                    templateUrl: "templates/news.html",
                    controller: "NewsCtrl"
                }
            },
            data: {
                displayName: 'Все статьи'
            },
            resolve: {
                newsData: function(PostNews){
                    return PostNews.query().$promise;
                }
            }
        })
        .state("home.news.section",{
            url:"/:section",
            views: {
                "main@": {
                    templateUrl: "templates/news-section.html",
                    controller: "NewsSectionCtrl"
                }
            },
            data: {
                displayName: 'Раздел'
            }
        })
        .state("home.news.section.subsection",{
            url:"/:subsection",
            views: {
                "main@":{
                    templateUrl: "templates/news-section.html",
                    controller: "NewsSubsectionCtrl"
                }
            },
            data: {
                displayName: 'Подраздел'
            }
        })
        .state("home.news.section.subsection.article", {
            url:"/:article",
            views: {
                "main@":{
                    templateUrl: "templates/news-detail.html",
                    controller: "ArticleCtrl"
                }
            },
            data: {
                displayName: 'Новость'
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
        .state("home.oplata-dostavka", {
            url:"/oplata-dostavka",
            views: {
                "main@":{
                    templateUrl: "templates/oplata-i-dostavka.html",
                    controller: "OplataCtrl"
                },
                "main-top@": {
                    templateUrl: "templates/oplata-banner.html"
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
                },
                "main-top@": {
                    templateUrl: "templates/akzii-banner.html"
                }
            },
            data: {
                displayName: "Акции"
            }
        })
        .state("home.company", {
            url:"/company",
            views: {
                "main@":{
                    templateUrl: "templates/company.html",
                    controller: "CompanyCtrl"
                }
            },
            data: {
                displayName: "Интернет-магазин 4k.by"
            }
        })
        .state("home.search", {
            url:"/search?searchText&searchSection",
            views: {
                "main-top@":{
                    template: ""
                },
                "main@":{
                    templateUrl: "templates/search.html",
                    controller: "SearchCtrl"
                }
            },
            data: {
                displayName: "Поиск"
            },
            resolve: {
                searchData: function(SearchResource,$stateParams){
                    return SearchResource.query({searchText:$stateParams.searchText,searchSection: $stateParams.searchSection}).$promise;
                }
            }
        })
        .state("home.cars", {
            url:"/cars",
            views: {
                "main@":{
                    templateUrl: "templates/cars.html",
                    controller: "CarsCtrl"
                }
            },
            resolve: {
                carsData: function(CarsResource){
                    return CarsResource.query().$promise;
                }
            },
            data: {
                displayName: 'Подбор шин по автомобилю'
            }
        })
        .state("home.cars.models", {
            url:"/:car",
            views: {
                "main@":{
                    templateUrl: "templates/carModels.html",
                    controller: "CarModelsCtrl"
                }
            },
            resolve: {
                brandData: function(CarModelsResource,$stateParams){
                    return CarModelsResource.query({car:$stateParams.car}).$promise;
                }
            },
            data: {
                displayName: 'Подбор шин по модели автомобиля'
            }
        })
        .state("home.cars.models.years", {
            url:"/:model",
            views: {
                "main@":{
                    templateUrl: "templates/carModelYears.html",
                    controller: "CarModelYearsCtrl"
                }
            },
            resolve: {
                modelData: function(CarModelYearsResource,$stateParams){
                    return CarModelYearsResource.query({model:$stateParams.model}).$promise;
                }
            },
            data: {
                displayName: 'Подбор шин по году выпуска'
            }
        })
        .state("home.cars.models.years.modifications", {
            url:"/:year",
            views: {
                "main@":{
                    templateUrl: "templates/carModelYearModifications.html",
                    controller: "CarModelYearModificationsCtrl"
                }
            },
            resolve: {
                yearData: function(CarModelYearModificationsResource,$stateParams){
                    return CarModelYearModificationsResource.query({year:$stateParams.year}).$promise;
                }
            },
            data: {
                displayName: 'Подбор шин по модификации'
            }
        })
        .state("home.cars.models.years.modifications.result", {
            url:"/:modification",
            views: {
                "main@":{
                    templateUrl: "templates/carModelYearModificationResult.html",
                    controller: "CarModelYearModificationResultCtrl"
                }
            },
            resolve: {
                resultData: function(CarModelYearModificationResultResource,$stateParams){
                    return CarModelYearModificationResultResource.get({modification:$stateParams.modification}).$promise;
                }
            },
            data: {
                displayName: 'Подбор шин по модификации'
            }
        })
        .state("home.warranty", {
            url:"/warranty",
            views: {
                "main@":{
                    templateUrl: "templates/warranty.html",
                    controller: "WarrantyCtrl"
                },
                "main-top@": {
                    templateUrl: "templates/warranty-banner.html"
                }
            },
            data: {
                displayName: "Гарантия на шины"
            }
        })
}]);


