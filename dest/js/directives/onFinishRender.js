app.directive("onFinishRender",["$timeout",function($timeout){
    return {
        "restrict": "A",

        "link": function(scope, element){
            if (scope.$last === true) {
                $timeout(function(){
                    scope.$emit("ngRepeatFinished");
                });
            }
        }
    }
}]);
