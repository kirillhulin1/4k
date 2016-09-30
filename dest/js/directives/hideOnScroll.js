app.directive("hideOnScroll",[function(){
    return {
        "restrict": "A",

        "link": function(scope, element){
            $(window).scroll(function(){
                $(".menu__item_active").trigger("click").removeClass("menu__item_active");
            });


        }

    }
}]);
