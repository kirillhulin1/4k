app.controller("ModelCtrl", ["$scope","$stateParams","modelData","$state","$window","PostModels","$location",function ($scope, $stateParams, modelData, $state, $window, PostModels,$location) {
    $scope.model = $stateParams.model;

    $scope.brand = $stateParams.brand;
    $scope.tab = $stateParams.tab;

    $state.current.data.displayName = $stateParams.model;
    $state.$current.parent.data.displayName = $stateParams.brand; //Чтобы при перезагрузке страницы название родительского раздела в хлебных крошках не пропадало

    $scope.data= {};
    $scope.data.model = $stateParams.modelSize;

console.log($scope.data.model);

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

    $scope.score = modelData.score;
    $scope.comments = modelData.comments;
    var sizes = modelData.sizes;
    $scope.sizesAvailable = [];
    $scope.sizesNotAvailable = [];

    angular.forEach(sizes,function(size){
        if (size.available>0) {
            $scope.sizesAvailable.push(size);
        }
        else {
            $scope.sizesNotAvailable.push(size);
        }
    });

    $scope.changeState = function(newTab){ //Без этой функции при повторном переходе со ссылки Показать отзывы в Описании переход не произойдет
        $stateParams.tab = newTab;
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

    $scope.showModelInfo = function(){
        var width = $scope.data.model.slice(0,3);
        var height = $scope.data.model.slice(4,6);
        var diameter = $scope.data.model.slice(7);
    }
}]);
