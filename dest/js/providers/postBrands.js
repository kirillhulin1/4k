app.provider("PostBrands", [function(){
    this.$get = function($resource){
        return $resource("http://localhost:3000/brands/:brandId");
    }
}]);
