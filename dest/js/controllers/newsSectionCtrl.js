app.controller("NewsSectionCtrl",["$scope", "$stateParams","$state","newsData",function ($scope, $stateParams, $state, newsData) {

    for (var i=0; i < newsData.length; i++) {
        if (newsData[i].nameEn == $stateParams.section) {
            $state.current.data.displayName = newsData[i].name;
            $scope.currentSection = newsData[i].name;
            break;
        }
    }


    $scope.news = [];
    angular.forEach(newsData,function(section){
        var sectionName = section.name;
        var sectionNameEn = section.nameEn;
        angular.forEach(section.subsections,function(subsection){
            var subsectionName = subsection.name;
            var subsectionNameEn = subsection.nameEn;
            angular.forEach(subsection.news,function(news){
                var article={};
                article.title = news.title;
                article.titleEn = news.titleEn;
                article.date = news.date;
                article.previewText = news.previewText;
                article.previewPicture = news.previewPicture;
                article.commentsNumber = news.commentsNumber;
                article.id = news.id;
                article.subsectionName = subsectionName;
                article.subsectionNameEn = subsectionNameEn;
                article.sectionName = sectionName;
                article.sectionNameEn = sectionNameEn;
                $scope.news.push(article);
            })
        })

    });


    $scope.search = {
        sectionNameEn: $stateParams.section
    };


}]);

