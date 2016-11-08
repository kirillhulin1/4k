app.directive("anchor",[function(){
    return {
        "restrict": "A",

        "link": function(scope, element){

            $(window).scroll(function(){
                if ($(this).scrollTop() > 100) {
                    $('.scroll-up').fadeIn();
                } else {
                    $('.scroll-up').fadeOut();
                }
            });
            $('.scroll-up').click(function(){
                $("html, body").animate({ scrollTop: 0 }, 300);
                return false;
            });
        }
    }
}]);
