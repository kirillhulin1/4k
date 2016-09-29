app.config(function($stateProvider){

    $stateProvider.state("home",{
            url: "",
            templateUrl: "templates/home.html",
            controller: "HomeCtrl",
            data: {
                displayName: 'DASHBOARD'
            }
        })
        .state("home.tires",{
            url:"/tires/:width-:height-:diameter",/*/:width/:height/:diameter*/
            views: {
                "@":{
                    templateUrl: "templates/tires.html",
                    controller: "TiresCtrl"
                }
            }
        })
        .state("home.catalog",{
            url:"/catalog",
            views: {
                "@":{
                    templateUrl: "templates/catalog.html",
                    controller: "CatalogCtrl"
                }
            }
        })
        .state("home.catalog.brand",{
            url:"/:brand",
            views: {
                "@":{
                    templateUrl: "templates/brand.html",
                    controller: "BrandCtrl"
                }
            }
        })
        .state("home.catalog.brand.model",{
            url:"/:model?tab",
            views: {
                "@":{
                    templateUrl: "templates/model.html",
                    controller: "ModelCtrl"
                }
            }
        });
    /*.state("home.page500",{
        url:"/page500",
        templateUrl: "dest/templates/page500.html",
        controller: "MainController",
        data: {
            displayName: 'Ошибка 500'
        }
    })
    .state("home.pages",{
        url: "/pages",
        templateUrl: "dest/templates/pages.html",
        controller: "PagesController",
        data: {
            displayName: "Страницы"
        },
        resolve: {
            pagesData: function(PostPages){
                return PostPages.query();
            },
            translations: function(RequireTranslations){
                return (RequireTranslations("pages"));
            }
        }
    })
    .state("home.users",{
        url: "/users",
        templateUrl: "dest/templates/users.html",
        controller: "UsersController",
        data: {
            displayName: "USERS"
        },
        resolve: {
            usersData: function(PostUsers){
                return PostUsers.query();
            },
            translations: function(RequireTranslations){
                return (RequireTranslations("users"));
            }
        }
    })
    .state("home.users.edit",{
        url: "/edit/:id",
        templateUrl: "dest/templates/user-profile.html",
        controller: "UserProfileController",
        data: {
            displayName: "Редактирование"
        }
    })
    .state("home.users.add",{
        url: "/add",
        templateUrl: "dest/templates/users-add.html",
        controller: "UsersAddController",

        data: {
            displayName: "Добавление пользователя"
        }
    })
    .state("home.pages.add",{
        url: "/add",
        templateUrl: "dest/templates/pages-add.html",
        controller: "PagesAddController",
        data: {
            displayName: "Добавление страницы"
        }
    })
    .state("log-in",{
        url: "/log-in",

        templateUrl: "dest/templates/auth.html",
        controller: "AuthController",

        data: {
            displayName: 'Вход в админку'
        },
        resolve: {
            translations: function(RequireTranslations){
                return (RequireTranslations("log-in"));
            }
        }
    })
    .state("home.faq",{
        url: "/faq",
        templateUrl: "dest/templates/faq.html",
        controller: "FaqController",
        data: {
            displayName: 'FAQ'
        }
    })
    .state("home.chat",{
        url: "/chat",
        templateUrl: "dest/templates/chat.html",
        controller: "ChatController",
        data: {
            displayName: 'CHAT'
        }
    });*/
});


