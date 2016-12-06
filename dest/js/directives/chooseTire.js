app.directive("chooseTire",["$timeout","$state","chooseTireParams","$stateParams","siteData", function($timeout,$state,chooseTireParams,$stateParams,siteData){
    return {
        "restrict": "E",
        "templateUrl": "templates/choose-tire.html",
        "link": function(scope, element){
            scope.scope = scope;
            scope.width = $stateParams.width;
            scope.height = $stateParams.height;
            scope.diameter = $stateParams.diameter;
            scope.season = $stateParams.season;
            scope.ship = $stateParams.ship;
            scope.inStock = $stateParams.inStock;
            scope.minCost = $stateParams.minCost;
            scope.maxCost = $stateParams.maxCost;
            scope.siteData = siteData;
            scope.showMore = false;
            scope.brands = [
                {
                    "brand": "Aeulos",
                    "quantity": "10",
                    "id": 1112,
                    "checked": false
                },
                {
                    "brand": "BF Goodrich",
                    "quantity": "2",
                    "id": 1113,
                    "checked": false
                }
                ,
                {
                    "brand": "BF Goodrich",
                    "quantity": "2",
                    "id": 1114,
                    "checked": false
                }
                ,
                {
                    "brand": "BF Goodrich",
                    "quantity": "2",
                    "id": 1115,
                    "checked": false
                }
                ,
                {
                    "brand": "BF Goodrich",
                    "quantity": "2",
                    "id": 1116,
                    "checked": false
                }

            ];
            scope.choosenBrands = JSON.parse($stateParams.brands);


            angular.forEach(scope.choosenBrands,function(choosenBrand){
                angular.forEach(scope.brands,function(brand){
                    if(choosenBrand.id==brand.id) {
                        brand.checked = true;
                    }
                });
            });

            scope.deleteBrand =function(id) {
                var index;

                for (var i = 0; i < scope.choosenBrands.length; i++) {
                    if (id == scope.choosenBrands[i].id) {
                        index = i;
                        break;
                    }
                }
                scope.choosenBrands.splice(index,1);
                for (var j=0; j<scope.brands.length; j++) {
                    if (scope.brands[j].id==id) {

                        scope.brands[j].checked = false;

                        break;
                    }
                }
                console.log(scope.choosenBrands);
            };
            scope.countBrands = function() {
                scope.choosenBrands = [];
                $(element).find(".multiselect__option").each(function(){

                    if ($(this).find(".checkbox__input").is(':checked')) {
                        var brand = {};
                        brand.id=$(this).find(".checkbox__input").attr("id");

                        for (var i = 0; i < scope.brands.length; i++) {
                            if (brand.id == scope.brands[i].id) {
                                brand.brand = scope.brands[i].brand;
                                brand.quantity = scope.brands[i].quantity;
                                break;
                            }
                        }
                        scope.choosenBrands.push(brand);
                    }
                });
                $(".multiselect_opened").removeClass("multiselect_opened");
            };
            scope.noSwitchingSlider = {
                minValue: 10,
                maxValue: 80,
                options: {
                    floor: 0,
                    ceil: 100,
                    step: 1,
                    noSwitching: true
                }
            };

            scope.$watch("showMore",function(){
                $timeout(function(){scope.$broadcast("reCalcViewDimensions");},50,false);
            });
            scope.watchResults = function() {
                var brands = [];
                angular.forEach(scope.choosenBrands,function(brand){
                    brands.push(brand.brand);
                });
                console.log(JSON.stringify(scope.choosenBrands));
                chooseTireParams.set({
                    width: scope.width,
                    height: scope.height,
                    diameter: scope.diameter,
                    brands: brands.join(","),
                    season: scope.season,
                    ship: scope.ship,
                    inStock: scope.inStock,
                    minCost: scope.noSwitchingSlider.minValue,
                    maxCost: scope.noSwitchingSlider.maxValue
                });
                $state.go("home.tire-choice",{
                    width: scope.width,
                    height: scope.height,
                    diameter: scope.diameter,
                    season: scope.season,
                    ship: scope.ship,
                    inStock: scope.inStock,
                    minCost: scope.noSwitchingSlider.minValue,
                    maxCost: scope.noSwitchingSlider.maxValue,
                    brands: JSON.stringify(scope.choosenBrands)
                },{reload: true});
            };

            scope.checkMin = function(e) {
                if (scope.noSwitchingSlider.minValue <= scope.noSwitchingSlider.options.floor || !scope.noSwitchingSlider.minValue) {
                    scope.noSwitchingSlider.minValue = scope.noSwitchingSlider.options.floor;
                }
                else if (scope.noSwitchingSlider.minValue >= scope.noSwitchingSlider.maxValue) {
                    scope.noSwitchingSlider.minValue = scope.noSwitchingSlider.maxValue;
                }
            };
            scope.checkMax = function(e) {
                if (scope.noSwitchingSlider.maxValue >= scope.noSwitchingSlider.options.ceil || !scope.noSwitchingSlider.maxValue) {
                    scope.noSwitchingSlider.maxValue = scope.noSwitchingSlider.options.ceil;
                }
                else if (scope.noSwitchingSlider.maxValue <= scope.noSwitchingSlider.minValue) {
                    scope.noSwitchingSlider.maxValue = scope.noSwitchingSlider.minValue;
                }
            };


            scope.widths = [{name:175,value:175},{name:185,value:185},{name:195,value:195},{name:205,value:205},{name:215,value:215}];
            scope.heights = [{name:175,value:175},{name:185,value:185},{name:195,value:195},{name:205,value:205},{name:215,value:215}];
            scope.diameters = [{name:175,value:175},{name:185,value:185},{name:195,value:195},{name:205,value:205},{name:215,value:215}];

        }
    }
}]);
