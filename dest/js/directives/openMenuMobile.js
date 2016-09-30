app.directive("openMenuMobile",[function(){
    return {
        "restrict": "A",

        "link": function(scope, element){

            element.bind("click",function(){
                $(".menu-mobile").addClass("menu-mobile_shown");
                $(".menu-mobile__cover").addClass("menu-mobile__cover_shown").animate({"opacity":1},200);
            });

        }

    }
}]);