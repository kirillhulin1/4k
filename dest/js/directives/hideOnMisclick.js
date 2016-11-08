app.directive("hideOnMisclick",[function(){
    return {
        "restrict": "A",

        "link": function(scope, element){

            $(document).click(function(event) {
                if ($(event.target).closest(".submenu").length || $(event.target).closest(".menu__item_dropdown").length)
                {
                    return;
                }

                $(".menu__item_active").trigger("click").removeClass("menu__item_active");

                event.stopPropagation();
            });

        }

    }
}]);
