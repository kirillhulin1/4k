app.provider("TiresOfSizeResource", [function(){
    this.$get = function($resource){
        return $resource("http://localhost:3000/tiresOfSize/:width/:height/:diameter");
    }
}]);