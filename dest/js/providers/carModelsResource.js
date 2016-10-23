app.provider("CarModelsResource", [function(){
    this.$get = function($resource){
        return $resource("http://localhost:3000/carModels/:car");
    }
}]);