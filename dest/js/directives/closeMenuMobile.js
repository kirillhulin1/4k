app.directive("closeMenuMobile",function(){
    return {
        "restrict": "A",

        "link": function(scope, element){



            element.bind("click",function(event){

                $(".menu-mobile").removeClass("menu-mobile_shown");
                $(".menu-mobile__cover").animate({"opacity":0},200,function(){
                    $(this).removeClass("menu-mobile__cover_shown");
                });
            });

        }

    }
});