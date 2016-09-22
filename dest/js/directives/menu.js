app.directive("menu",function($http, $rootScope){
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
                            $rootScope.subMenuContent = response.data;
                            $rootScope.submenus[template] = response.data;
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

            $(document).click(function(event) {

                if ($(event.target).closest(".submenu").length || $(event.target).closest(".menu__item_dropdown").length)
                {
                    console.log(2);
                    return;
                }
                console.log(1);
                $(".menu__item_dropdown").removeClass("menu__item_active");
                /*$(".submenu").html("");*/
                $rootScope.submenuShown = false;
                $rootScope.subMenuContent = [];

                event.stopPropagation();
            });
        }
    }
});