app.controller("NewsSubsectionCtrl",["$scope", "$stateParams","$state","newsData",function ($scope, $stateParams, $state, newsData) {

    outer: for (var i=0; i < newsData.length; i++) {
        for (var j=0; j < newsData[i].subsections.length; j++) {
            if (newsData[i].subsections[j].nameEn == $stateParams.subsection) {
                $state.current.data.displayName = newsData[i].subsections[j].name;
                $state.$current.parent.data.displayName = newsData[i].name;
                $scope.currentSubsection = newsData[i].subsections[j].name;
                break outer;
            }
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
        subsectionNameEn: $stateParams.subsection
    };
}]);

