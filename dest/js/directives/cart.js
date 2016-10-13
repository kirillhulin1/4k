app.directive("cart",[function(){
    return {
        "restrict": "A",
        "scope": {
            items: "="
        },
        templateUrl: 'templates/cart-modal.html',

        "link": function(scope, element, attrs){


            scope.lowerQuantity = function(item){
                if (!(item.quantity == 1)) {
                    item.quantity -=1;
                }
            };

            scope.deleteItem = function(id) {
                var len = scope.items.length;
                var index;
                for (var i = 0; i<len; i++) {
                    if (scope.items[i].id == id) {
                        index = i;
                        break;
                    }
                }

                scope.items.splice(index,1);

                if (scope.items.length==0) $("#cart").modal("hide");
            }
        }
    }
}]);

