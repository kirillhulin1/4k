app.provider("AkziiResource", [function(){
    this.$get = function($resource){
        return $resource("http://localhost:3000/akzii/:akziyaId");
    }
}]);