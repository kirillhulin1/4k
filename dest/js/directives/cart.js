app.directive("cart",[function(){
    return {
        "restrict": "A",
        "scope": {
            user: "="
        },
        templateUrl: 'templates/cart-modal.html',

        "link": function(scope, element, attrs){



            scope.deleteItem = function(id) {
                var len = scope.user.cartItems.length;
                var index;
                for (var i = 0; i<len; i++) {
                    if (scope.user.cartItems[i].id == id) {
                        index = i;
                        break;
                    }
                }

                scope.user.cartItems.splice(index,1);

                if (scope.user.cartItems.length==0) $("#cart").modal("hide");
            }
        }
    }
}]);

