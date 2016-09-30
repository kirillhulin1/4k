app.directive("condenseOnScroll",[function(){
    return {
        "restrict": "A",

        "link": function(scope, element){
            $(window).scroll(function(){
                if ($(this).scrollTop() > 100) {
                    $(".header-bottom").addClass("header-bottom_condensed");
                } else {
                    $(".header-bottom").removeClass("header-bottom_condensed");
                }
            });
        }

    }
}]);
