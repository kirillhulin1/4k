app.controller("AppCtrl",function($scope){
    $scope.menu = [
        {
            "title": "Шины и диски",
            "subsections": [
                {
                    "title": "Легковые шины"
                },
                {
                    "title": "Литые диски"
                },
                {
                    "title": "Грузовые шины"
                },
                {
                    "title": "Гарантия"
                },
                {
                    "title": "Шинный калькулятор"
                }
            ]
        },
        {
            "title": "Тесты и обзоры",
            "subsections": [
                {
                    "title": "Легковые шины",
                    "subsections": [
                        {
                            "title": "Легковые шины"
                        },
                        {
                            "title": "Литые диски"
                        },
                        {
                            "title": "Грузовые шины"
                        },
                        {
                            "title": "Гарантия"
                        },
                        {
                            "title": "Шинный калькулятор"
                        }
                    ]
                },
                {
                    "title": "Литые диски"
                },
                {
                    "title": "Грузовые шины"
                }
            ]
        }

    ];

    $scope.noSwitchingSlider = {
        minValue: 10,
        maxValue: 90,
        options: {
            floor: 0,
            ceil: 100,
            step: 1,
            noSwitching: true
        }
    };
});