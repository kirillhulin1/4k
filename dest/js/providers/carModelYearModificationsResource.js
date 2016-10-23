app.provider("CarModelYearModificationsResource", [function(){
    this.$get = function($resource){
        return $resource("http://localhost:3000/carModelYearModifications/:year");
    }
}]);