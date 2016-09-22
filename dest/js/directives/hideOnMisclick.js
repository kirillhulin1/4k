app.directive("hideOnMisclick",function($rootScope){
    return {
        "restrict": "A",

        "link": function(scope, element){

 /*           $(document).click(function(event) {

                if ($(event.target).closest(".submenu").length || $(event.target).closest(".menu__item_dropdown").length)
                {
                    console.log(2);
                    return;
                }
                console.log(1);
                $(".menu__item_dropdown").removeClass("menu__item_active");
                /!*$(".submenu").html("");*!/
                $rootScope.submenuShown = false;
                $rootScope.subMenuContent = [];

                event.stopPropagation();
            });*/

        }

    }
});
