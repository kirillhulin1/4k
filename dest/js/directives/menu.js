app.directive("menu",["$http", "$rootScope", "$compile",function($http, $rootScope, $compile){
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

                        $("#submenu").html("").append($rootScope.submenus[template]);

                    }
                    else {
                        $("#submenu").html(preloaderTemplate);
                        $rootScope.subMenuContent = preloaderTemplate;
                        $http({
                            method: 'GET',
                            url: template
                        }).then(function successCallback(response) {
                            $rootScope.subMenuContent = $compile(response.data)(scope);
                            $("#submenu").html("").append($rootScope.subMenuContent);
                            $rootScope.submenus[template] = $compile(response.data)(scope);
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