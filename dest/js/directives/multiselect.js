app.directive("multiselect",function(){
    return {
        "restrict": "A",

        "link": function(scope, element){
            $(document).click(function(event) {
                if ($(event.target).closest(".multiselect__options").length || $(event.target).closest(".multiselect_opened").length)
                {
                    return;
                }
                if ($(".multiselect_opened").length) {
                    $(".multiselect_opened").removeClass("multiselect_opened");
                }

                event.stopPropagation();
            });

            $(element.children()[0]).bind("click",function(){
                if (element.hasClass("multiselect_opened")) element.removeClass("multiselect_opened");
                else element.addClass("multiselect_opened");

            });
            $(element.children()[1]).find(".close").click(function() {
                element.removeClass("multiselect_opened");
            });




        }

    }
});

