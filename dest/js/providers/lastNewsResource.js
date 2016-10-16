app.provider("LastNewsResource", [function(){
    this.$get = function($resource){
        return $resource("http://localhost:3000/lastNews");
    }
}]);