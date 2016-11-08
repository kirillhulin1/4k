app.directive("userMenu",[function(){
    return {
        restrict: "A",
        transclude: true,
        templateUrl: "templates/user-menu.html",
        link: function(scope, element){
            var menu = element[0].querySelectorAll(".user-menu")[0];
            element.bind("mouseenter",function(){
                if (scope.user.loggedIn) {
                    element.addClass("user-menu_shown");
                    var timer = setInterval(function(){
                            window.addEventListener("mousemove",onMouseMove)
                        },
                        1000
                    );
                }

                function onMouseMove(e) {
                    window.removeEventListener("mousemove",onMouseMove);
                    var x = e.clientX;
                    var y = e.clientY;
                    var left = menu.getBoundingClientRect().left;
                    var right = menu.getBoundingClientRect().right;
                    var top = menu.getBoundingClientRect().top;
                    var bottom = menu.getBoundingClientRect().bottom;
                    var leftEl = element[0].getBoundingClientRect().left;
                    var rightEl = element[0].getBoundingClientRect().right;
                    var topEl = element[0].getBoundingClientRect().top;
                    var bottomEl = element[0].getBoundingClientRect().bottom;

                    //Если курсор не на кнопке user-menu и не на выподающем окне user-menu
                    if (!(x>left && x <right && y>top && y < bottom) && !(x>leftEl && x <rightEl && y>topEl && y < bottomEl)) {
                        element.removeClass("user-menu_shown");
                        clearInterval(timer);
                    }
                }

            });

        }
    }
}]);
