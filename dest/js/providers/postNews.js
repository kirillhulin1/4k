app.provider("PostNews", [function(){
    this.$get = function($resource){
        return $resource("http://localhost:3000/news");
    }
}]);