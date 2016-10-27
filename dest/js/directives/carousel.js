app.directive("carousel",["$window",function($window){
    return {
        restrict: "A",

        "link": function(scope, element){

            scope.$on("ngRepeatFinished",function(){
                var wrapper = element.children().eq(0);
                var width = wrapper[0].getBoundingClientRect().right - wrapper[0].getBoundingClientRect().left;
                var arrowLeft = element.children().eq(0).children().eq(1);
                var arrowRight = element.children().eq(0).children().eq(2);
                var items =  element.find("li");
                var itemsLength = items.length;
                var animationGoing = false;
                var currentItem = 0;


                Array.prototype.forEach.call(items,function(item){
                    item.style.width = width/2 + "px";
                });

                if (itemsLength > 2) {

                    element.removeClass("carousel__arrow_hidden");
                    arrowLeft.on("click",function(e){
                        e.preventDefault();
                        animationGoing = true;
                        var previousCurrent = currentItem;
                        increaseCurrent();
                        Array.prototype.forEach.call(items,function(item, i){

                            $(item).animate(
                                {
                                    left: "-="+width/2+"px"
                                },
                                300,
                                function() {

                                    if (i==previousCurrent) {

                                        $(item).css("left", width/2*(itemsLength-1-i)+"px");
                                        animationGoing = false;

                                    }

                                }
                            )
                        });
                    });
                    arrowRight.on("click",function(e){
                        e.preventDefault();
                        if (!animationGoing) {
                            animationGoing = true;
                            var previousCurrent = currentItem;

                            var lastItemIndex = lastItem();
                            $(items.eq(lastItemIndex)).css("left", width/2*(-1-lastItemIndex)+"px");
                            decreaseCurrent();
                            Array.prototype.forEach.call(items,function(item, i) {

                                $(item).animate(
                                    {
                                        left: "+="+width/2+"px"
                                    },
                                    300,
                                    function(){
                                        if (i==currentItem) {


                                            animationGoing = false;

                                        }
                                    }
                                )
                            });
                        }

                    });

                    //Далее идет отмена выделения текста при клике
                    arrowLeft.on("selectstart",function(e){
                        e.preventDefault();
                    });
                    arrowLeft.on("mousedown",function(e){
                        e.preventDefault();
                    });
                    arrowRight.on("selectstart",function(e){
                        e.preventDefault();
                    });
                    arrowRight.on("mousedown",function(e){
                        e.preventDefault();
                    });

                    angular.element($window).on("resize",function(){
                        width = wrapper[0].getBoundingClientRect().right - wrapper[0].getBoundingClientRect().left;
                        Array.prototype.forEach.call(items,function(item){
                            item.style.width = width/2 + "px";
                        });
                    })
                }
                function decreaseCurrent() {
                    if (currentItem == 0) {
                        currentItem = itemsLength - 1;
                    }
                    else currentItem--;
                }
                function increaseCurrent() {
                    if (currentItem == itemsLength - 1) {
                        currentItem = 0;
                    }
                    else currentItem++
                }
                function lastItem() {
                    if (currentItem == 0) {
                        return itemsLength - 1;
                    }
                    else return currentItem-1;
                }
            });










        }
    }
}]);


