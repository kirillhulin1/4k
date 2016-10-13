app.directive("chooseTire",["$timeout",function($timeout){
    return {
        "restrict": "E",
        "templateUrl": "templates/choose-tire.html",
        "link": function(scope, element){
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

            scope.choosenBrands = [];
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
                        console.log(id);
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
                $timeout(function(){scope.$broadcast("reCalcViewDimensions");},50,false)

            })
        }

   }
}]);
