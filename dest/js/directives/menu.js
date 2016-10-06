app.directive("menu",["$http", "$rootScope", "$interpolate",function($http, $rootScope, $interpolate){
    return {
        "restrict": "E",
        "templateUrl": "templates/menu.html",
        "link": function(scope, element, attrs){
            $rootScope.submenus = {};
            scope.showSubmenu = function(e){
                e.preventDefault();
                var template = $(e.currentTarget).attr("data-html");
                var hasClass = $(e.currentTarget).hasClass("menu__item_active");
                var preloaderTemplate = "<section class='container' ><div class='submenu__content'><img class='submenu__preloader' src='dest/images/ajax-loader.gif'></div></section>";
                $(".menu__item_dropdown").removeClass("menu__item_active");

                if (!hasClass) {

                    $(e.currentTarget).addClass("menu__item_active");
                    $rootScope.submenuShown = true;

                    if (template in $rootScope.submenus) {

                        $rootScope.subMenuContent = $rootScope.submenus[template];

                    }
                    else {

                        $rootScope.subMenuContent = preloaderTemplate;
                        $http({
                            method: 'GET',
                            url: template
                        }).then(function successCallback(response) {
                            $rootScope.subMenuContent = $interpolate(response.data)(scope);
                            $rootScope.submenus[template] = $interpolate(response.data)(scope);
                        }, function errorCallback(response) {
                            console.log("Возникла ошибка при загрузуке подменю");
                        });

                    }
                }
                else {
                    $rootScope.submenuShown = false;
                    $rootScope.subMenuContent = [];
                }
            };


        }
    }
}]);