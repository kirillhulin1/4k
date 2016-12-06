app.controller("ArticleCtrl",["$scope", "$stateParams","$state","newsData",function ($scope, $stateParams, $state, newsData) {
    $state.$current.data.displayName = $stateParams.article;
    outer: for (var i=0; i < newsData.length; i++) {
        for (var j=0; j < newsData[i].subsections.length; j++) {
            if (newsData[i].subsections[j].nameEn == $stateParams.subsection) {
                for (var z=0; z<newsData[i].subsections[j].news.length; z++) {
                    if (newsData[i].subsections[j].news[z].title == $stateParams.article) {
                        $state.$current.parent.data.displayName  = newsData[i].subsections[j].name;
                        $state.$current.parent.parent.data.displayName = newsData[i].name;
                        break outer;
                    }
                }


            }
        }
    }
}]);

