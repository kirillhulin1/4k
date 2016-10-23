app.provider("CarModelYearsResource", [function(){
    this.$get = function($resource){
        return $resource("http://localhost:3000/carModelYears/:model");
    }
}]);