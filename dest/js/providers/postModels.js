app.provider("PostModels", [function(){
    this.$get = function($resource){
        return $resource("http://localhost:3000/models/:modelName");
    }
}]);