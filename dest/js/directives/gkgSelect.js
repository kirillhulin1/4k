app.directive("gkgSelect",["$window","$document",function($window,$document){
    return {
        restrict: "E",
        scope: {
            options: "=", //[{name:..., value: ...}]
            name: "@",  //name поля select
            start: "@",  //значение по умолчанию
            placeholder: "@",
            parentScope: "=",  //scope родителя-контроллера
            parentVariable: "@" //значение свойства в scope родителя контроллера
        },
        templateUrl: "templates/gkgSelect.html",
        link: function(scope,element){
            var fakeSelect = element[0].querySelector(".gkg-select__fake");
            angular.element(fakeSelect).bind("click",function(){
                angular.element(fakeSelect).toggleClass("gkg-select__fake_hover");
            });
            scope.data = {
                /*result: findCurrent()*/
            };
            findCurrent();
            function findCurrent() {
                angular.forEach(scope.options, function(option){
                    if(option.value == scope.start){

                        scope.data.result = option;
                    }
                })
            }
            scope.changeValue = function(value){
                if (scope.parentScope && scope.parentVariable) {
                    scope.parentScope[scope.parentVariable] = value;
                }
            };
            scope.parentScope.$watch(scope.parentVariable,function(newValue){
                var optionFound = false;
                angular.forEach(scope.options, function(option){
                    if(option.value == newValue){
                        scope.data.result = option;
                        optionFound = true;
                    }

                });
                if (!optionFound) scope.data.result = "";
            });
            angular.element($window).bind("scroll",function(){
                if (angular.element(fakeSelect).hasClass("gkg-select__fake_hover")) {
                    angular.element(fakeSelect).removeClass("gkg-select__fake_hover");
                }
            });
            angular.element($document).bind("click",function(event){
                if ($(event.target).closest(".gkg-select__fake").length)
                {
                    return;
                }

                if (angular.element(fakeSelect).hasClass("gkg-select__fake_hover")) {
                    angular.element(fakeSelect).removeClass("gkg-select__fake_hover");

                }
            });
        }
    }
}]);