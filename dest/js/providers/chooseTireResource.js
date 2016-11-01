app.provider("ChooseTireResource", [function(){
    this.$get = function($resource){
        return $resource("http://localhost:3000/chooseTire/:width/:height/:diameter/:brands/:season/:ship/:inStock/:minCost/:maxCost");
    }
}]);