app.directive("score",["$state",function($state){
    return {
        restrict: "E",
        templateUrl: "templates/score.html",
        scope: {
            characteristic: "@",
            array: "@",
            key: "@",
            parentScope: "=",
            picture: "@"
        },
        "link": function(scope,element){
            scope.parentScope[scope.array][scope.key] = "";
            var marks = element.find("table")[0].querySelectorAll(".score__line td");
            scope.mark = "";

            angular.forEach(marks,function(mark,i){
                angular.element(mark).bind("click",function(){
                    scope.parentScope[scope.array][scope.key] = i+1;
                    scope.mark = i+1;
                    scope.$apply();
                    console.log(scope.mark);
                    angular.forEach(marks,function(mark,j){
                        if (j<=i) {
                            angular.element(mark).addClass("marked");
                        }
                        else {
                            angular.element(mark).removeClass("marked");
                        }
                    })
                })
            });

            scope.removeMark = function(){
                angular.forEach(marks,function(mark){
                    angular.element(mark).removeClass("marked");
                    scope.parentScope[scope.array][scope.key] = "";


                });
                scope.mark = "";

            }
        }
    }
}]);