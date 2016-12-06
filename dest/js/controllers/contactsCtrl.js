app.controller("ContactsCtrl",["$scope","MessageResource","modals",function($scope,MessageResource,modals){
    $scope.message = {
        email: "",
        phone: "",
        name: "",
        text: ""
    };
    $scope.sendMessage = function(){
        MessageResource.save({
            "name": $scope.message.name,
            "phone": $scope.message.phone,
            "email": $scope.message.email,
            "message": $scope.message.text,
            "type": "message"
        });
    };
    $scope.openModalMap = modals.openModalMap;


}]);
