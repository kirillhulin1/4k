app.controller("ModelCtrl", ["$scope","$stateParams","modelData","$state",function ($scope, $stateParams, modelData, $state) {
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

    $scope.score = modelData.score;

    $scope.countScoreWidth = function(score){
        var starWidth = 27.4;
        var gapWidth = 4;
        var length = 153;
        var percent = score/5*100;


        return ((percent%20)/20*starWidth + Math.floor(percent/20)*(starWidth+gapWidth))*100/length;

    }

    $scope.test = function(){
        $(".comment").addClass("comment_shown");
    }

}]);
