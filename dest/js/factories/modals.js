app.factory("modals",["$uibModal",function($uibModal){
    var obj = {
        openModalSearch : function(){
            $uibModal.open({
                controller: ["$uibModalInstance","$state", "$scope", "modals", function($uibModalInstance,$state,$scope,modals){
                    this.close = function(){
                        $uibModalInstance.close();
                    };
                    this.search = {};

                    this.search.text="";

                    $scope.scope = $scope;

                    $scope.themes = [
                        {name:"Везде",value: "all"},
                        {name:"Статья",value: "article"},
                        {name:"Шина",value: "tire"},
                        {name:"Типоразмер",value: "size"},
                        {name:"Автомобиль",value: "car"}
                    ];

                    this.search = function() {
                        var searchText = this.search.text ? this.search.text : "";
                        var searchSection = $scope.theme ? $scope.theme : "";

                        $state.go("home.search",{searchText: searchText, searchSection: searchSection});
                        modals.modalSearch.close();
                    };

                    modals.modalSearch = $uibModalInstance;
                }],
                controllerAs: "$ctrl",
                templateUrl: 'templates/modal-search.html'
            });
        },
        openModalCart : function(){
            $uibModal.open({
                controller: ["$uibModalInstance","user","modals",function($uibModalInstance,user,modals){
                    this.close = function(){
                        $uibModalInstance.close();
                    };
                    this.user = user;
                    modals.modalCart = $uibModalInstance;
                }],
                controllerAs: "$ctrl",
                templateUrl: 'templates/modal-cart.html'
            });
        },
        openModalChangePassword : function(){
            $uibModal.open({
                controller: ["$uibModalInstance","modals",function($uibModalInstance,modals){
                    this.close = function(){
                        $uibModalInstance.close();
                    };
                    modals.openModalChangePassword = $uibModalInstance;
                }],
                controllerAs: "$ctrl",
                templateUrl: 'templates/modal-change-password.html'
            });
        },
        openModalForget : function(){
            $uibModal.open({
                controller: ["$uibModalInstance","modals",function($uibModalInstance,modals){
                    this.close = function(){
                        $uibModalInstance.close();

                    };
                    this.openLogIn = function(){
                        this.close();
                        obj.openModalLogIn();
                    };
                    this.openRegister = function(){
                        this.close();
                        obj.openModalRegister();
                    };
                    modals.modalForget = $uibModalInstance;
                }],
                controllerAs: "$ctrl",
                templateUrl: 'templates/modal-forget.html'
            });
        },
        openModalLogIn : function(){
            $uibModal.open({
                controller: ["$uibModalInstance","modals",function($uibModalInstance,modals){
                    this.close = function(){
                        $uibModalInstance.close();
                    };
                    modals.modalLogIn = $uibModalInstance;
                    this.openForget = function(){
                        this.close();
                        obj.openModalForget();
                    };
                    this.openRegister = function(){
                        this.close();
                        obj.openModalRegister();
                    };
                }],
                controllerAs: "$ctrl",
                templateUrl: 'templates/modal-log-in.html'
            });
        },
        openModalRegister : function(){
            $uibModal.open({
                controller: ["$uibModalInstance","modals",function($uibModalInstance,modals){
                    this.close = function(){
                        $uibModalInstance.close();
                    };
                    this.openForget = function(){
                        this.close();
                        obj.openModalForget();
                    };
                    this.openLogIn = function(){
                        this.close();
                        obj.openModalLogIn();
                    };
                    modals.modalRegister = $uibModalInstance;
                }],
                controllerAs: "$ctrl",
                templateUrl: 'templates/modal-register.html'
            });
        },
        openModalCallMe : function(){
            $uibModal.open({
                controller: ["$uibModalInstance","$scope","MessageResource",function($uibModalInstance,$scope,MessageResource){
                    this.close = function(){
                        $uibModalInstance.close();
                    };
                    $scope.topics = [
                        {name: "Подбор шины", value: "Подбор шины"},
                        {name: "Информация по заказу", value: "Информация по заказу"},
                        {name: "Другие вопросы",value: "Другие вопросы"}
                    ];
                    $scope.scope = $scope;
                    this.sendMessage = function(){
                        MessageResource.save({
                            "fio": this.fio,
                            "phone": this.phone,
                            "topic": $scope.topic,
                            "message": this.message,
                            "type": "callback"
                        });
                        this.close();
                    }

                }],
                controllerAs: "$ctrl",
                templateUrl: 'templates/modal-call-me.html'
            });
        },
        openModalMorePhones : function(){
            $uibModal.open({
                controller: ["$uibModalInstance","siteData",function($uibModalInstance,siteData){
                    this.close = function(){
                        $uibModalInstance.close();
                    };
                    this.siteData = siteData;
                }],
                controllerAs: "$ctrl",
                templateUrl: 'templates/modal-more-phones.html'
            });
        },
        openModalSelectedGoods: function(){
            $uibModal.open({
                controller: ["$uibModalInstance","user","$scope",function($uibModalInstance,user,$scope){
                    this.close = function(){
                        $uibModalInstance.close();
                    };
                    $scope.user = user;
                }],
                controllerAs: "$ctrl",
                templateUrl: 'templates/modal-selected-goods.html'
            });
        },
        openModalRecentGoods: function(){
            $uibModal.open({
                controller: ["$uibModalInstance","user","$scope",function($uibModalInstance,user,$scope){
                    this.close = function(){
                        $uibModalInstance.close();
                    };
                    $scope.user = user;
                }],
                controllerAs: "$ctrl",
                templateUrl: 'templates/modal-recent-goods.html'
            });
        }
    };

    return  obj;
}]);
