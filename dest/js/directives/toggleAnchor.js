app.directive("toggleAnchor",function(){
    return {
        "restrict": "A",

        "link": function(scope, element){

            element.bind("click",function(){
                if (element.hasClass("toggle-anchor_toggled")) element.removeClass("toggle-anchor_toggled");
                else element.addClass("toggle-anchor_toggled");

            });

        }

    }
});
