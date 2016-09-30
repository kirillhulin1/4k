app.directive("cart",["$rootScope",function($rootScope){
    return {
        "restrict": "A",
        "scope": {},
        templateUrl: 'templates/cart-modal.html',

        "link": function(scope, element){
            scope.cart = {
                "items": [
                    {
                        "name": "Taurus Winter 601",
                        "width": 175,
                        "height": 65,
                        "diameter": 15,
                        "something": "85Т",
                        "articul": "ta11",
                        "price": 50,
                        "quantity": 4,
                        "type": "summer",  //winter,all
                        "picture": "cart_tire-1.png",
                        "id": 1
                    },
                    {
                        "name": "Taurus Winter 602",
                        "width": 176,
                        "height": 65,
                        "diameter": 15,
                        "something": "85Т",
                        "articul": "ta11",
                        "price": 43,
                        "quantity": 4,
                        "type": "winter",
                        "picture": "cart_tire-3.png",
                        "id": 2
                    },
                    {
                        "name": "Taurus Winter 603",
                        "width": 175,
                        "height": 65,
                        "diameter": 15,
                        "something": "85Т",
                        "articul": "ta11",
                        "price": 43,
                        "quantity": 4,
                        "type": "all",
                        "picture": "cart_tire-2.png",
                        "id": 3
                    }

                ]
            };

            $rootScope.cart = scope.cart;

            scope.lowerQuantity = function(item){
                if (!(item.quantity == 1)) {
                    item.quantity -=1;
                }
            };

            scope.deleteItem = function(id){
                var len = scope.cart.items.length;
                var index;
                for (var i = 0; i<len; i++) {
                    if (scope.cart.items[i].id == id) {
                        index = i;
                        break;
                    }
                }

                scope.cart.items.splice(index,1);

                if (scope.cart.items.length==0) $("#cart").modal("hide");
            }
        }
    }
}]);

