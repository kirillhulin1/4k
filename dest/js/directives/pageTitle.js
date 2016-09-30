app.directive("pageTitle",["$state",function($state){
    return {
        "restrict": "E",
        "templateUrl": "templates/page-title.html",
        "link": function(scope){

            //Если заголовок в контроллере текущего state не указан, получаем его свойства data.displayName текущего state
            if (!scope.title) scope.title = $state.current.data.displayName;

        }
    }
}]);