app.directive("chooseTire",function($http,$rootScope){
    return {
        "restrict": "E",
        "templateUrl": "templates/choose-tire.html",
        "link": function(scope, element){
            scope.showMore = false;

            scope.brands = [
                {
                    "brand": "Aeulos",
                    "quantity": "10",
                    "id": 1112
                },
                {
                    "brand": "BF Goodrich",
                    "quantity": "2",
                    "id": 1113
                }
                ,
                {
                    "brand": "BF Goodrich",
                    "quantity": "2",
                    "id": 1114
                }
                ,
                {
                    "brand": "BF Goodrich",
                    "quantity": "2",
                    "id": 1115
                }
                ,
                {
                    "brand": "BF Goodrich",
                    "quantity": "2",
                    "id": 1116
                }

            ];
            scope.choosenBrands = [];
            scope.deleteBrand =function(id) {
                var index;
                for (var i = 0; i < scope.choosenBrands.length; i++) {
                    if (id == scope.choosenBrands[i]) {
                        index = i;
                        break;
                    }
                }
                scope.choosenBrands.splice(index,1)
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
            }
        }

   }
});
