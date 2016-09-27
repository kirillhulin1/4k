app.directive("doNotFollow",function($rootScope){
    return {
        "restrict": "A",
        "scope": {},

        "link": function(scope, element){
            element.bind("click",function(){
                return false;
            });
        }
    }
});


