app.provider("CarModelYearModificationResultResource", [function(){
    this.$get = function($resource){
        return $resource("http://localhost:3000/carModelYearModificationResult/:modification");
    }
}]);