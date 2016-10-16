app.controller("NewsCtrl", ["$scope","newsData","localStorageService",function ($scope,newsData,localStorageService) {

    if (localStorageService.get("news_page_number")) {
        $scope.pageIndex = localStorageService.get("news_page_number");
    }
    else {
        $scope.pageIndex = 1;
    }


    $scope.savePageIndex = function(newPageNumber) {
        localStorageService.set("news_page_number", newPageNumber);
    };


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

}]);
