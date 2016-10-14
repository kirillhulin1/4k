app.controller("NewsSectionCtrl",["$scope", "$stateParams","$state","newsData",function ($scope, $stateParams, $state, newsData) {
    $state.current.data.displayName = $stateParams.section;
    $scope.news = [];

    angular.forEach(newsData,function(sect){
        if (sect.nameEn == $stateParams.section) {
            console.log(1);
            $state.current.data.displayName = sect.name;
            angular.forEach(sect.subsections,function(subsect){
                angular.forEach(subsect.news,function(article){
                    $scope.news.push(article);
                });

            });
        }
    });

}]);

