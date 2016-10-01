app.controller("ModelCtrl", ["$scope","$stateParams","modelData","$state","$window","PostModels","$location",function ($scope, $stateParams, modelData, $state, $window, PostModels,$location) {
    if(!modelData.score) {
        console.log(1);
        PostModels.get({
                modelName:$stateParams.model},
                function(data){
                    modelData = data;$scope.score = modelData.score;
                    $scope.comments = modelData.comments;
                }
        );

    }
    $scope.model = $stateParams.model;
    $scope.brand = $stateParams.brand;
    $scope.tab = $stateParams.tab;

    $state.current.data.displayName = $stateParams.model;
    $state.$current.parent.data.displayName = $stateParams.brand; //Чтобы при перезагрузке страницы название родительского раздела в хлебных крошках не пропадало

    switch ($scope.tab) {
        case("description"): {
            $scope.index = 2;
            break;
        }
        case("comments"): {
            $scope.index = 4;
            break;
        }
        default: {
            $scope.index = 0;
        }
    }

    if (!$scope.score) $scope.score = modelData.score;
    if (!$scope.comments) $scope.comments = modelData.comments;


    $scope.changeState = function(newTab){ //Без этой функции при повторном переходе со ссылки Показать отзывы в Описании переход не произойдет
        $stateParams.tab = newTab;
    };

    //Функция вычисляет какой процент дива со звездочками надо закрасить
    $scope.countScoreWidth = function(score){
        var starWidth = 27.4;
        var gapWidth = 4;
        var length = 153;
        var percent = score/5*100;
        return ((percent%20)/20*starWidth + Math.floor(percent/20)*(starWidth+gapWidth))*100/length;
    };

    //Функция вызывается для отображения комментариев, которые находятся в поле видимости при загрузке блока коментариев
    $scope.showComments = function() {
        if ($scope.index==4) {
            $("html, body").animate({ scrollTop: "+=1px" }, 300);
        }
    };

    $($window).bind("scroll",function(e) {
        var $comments = $(".comment");
        var $self = $(this);

        if($scope.index == 4) {
            $comments.each(function(){
                if (!$(this).hasClass("comment_shown")) {
                    if ($(this).offset().top<$self.height()+$self.scrollTop()-200) {
                        $(this).addClass("comment_shown");
                    }
                }
            });
        }
    });

    $scope.commentGood = function(comment) {
        comment.yes += 1;
    };
    $scope.commentShit = function(comment) {
        comment.no += 1;
    };

}]);
