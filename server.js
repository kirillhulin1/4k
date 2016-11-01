var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require('body-parser');

app.use(cors());
app.listen(3000);
app.use(bodyParser.json());

var brands = [
    {
        id: 0,
        logo: "dest/images/brand1.png",
        name: "bridgestone",
        models: [
            {
                "name": "Bridgestone Blizzak VRX",
                "score": "4",
                "picture": "dest/images/bridgestone1.png",
                "season": "summer"
            },
            {
                "name": "Bridgestone Blizzak VRX1",
                "score": "4.2",
                "picture": "dest/images/bridgestone2.png",
                "season": "summer"
            },
            {
                "name": "Bridgestone Blizzak VRX2",
                "score": "4.8",
                "picture": "dest/images/bridgestone3.png",
                "season": "summer"
            },
            {
                "name": "Bridgestone Blizzak VRX3",
                "score": "3.5",
                "picture": "dest/images/bridgestone4.png",
                "season": "summer"
            },
            {
                "name": "Bridgestone Blizzak VRX4",
                "score": "5",
                "picture": "dest/images/bridgestone5.png",
                "season": "summer"
            },
            {
                "name": "Bridgestone Blizzak VRX5",
                "score": "2",
                "picture": "dest/images/bridgestone6.png",
                "season": "summer"
            },
            {
                "name": "Bridgestone Blizzak VRX4",
                "score": "5",
                "picture": "dest/images/bridgestone5.png",
                "season": "summer"
            },
            {
                "name": "Bridgestone Blizzak VRX5",
                "score": "2",
                "picture": "dest/images/bridgestone6.png",
                "season": "winter"
            },
            {
                "name": "Bridgestone Blizzak VRX4 lizzak VRX4",
                "score": "5",
                "picture": "dest/images/bridgestone5.png",
                "season": "winter"
            },
            {
                "name": "Bridgestone Blizzak VRX5",
                "score": "2",
                "picture": "dest/images/bridgestone6.png",
                "season": "winter"
            },
            {
                "name": "Bridgestone Blizzak VRX4",
                "score": "5",
                "picture": "dest/images/bridgestone5.png",
                "season": "winter"
            },
            {
                "name": "Bridgestone Blizzak VRX5",
                "score": "2",
                "picture": "dest/images/bridgestone6.png",
                "season": "all"
            }
        ]
    },
    {
        id: 1,
        logo: "dest/images/brand2.png",
        name: "smth1"
    },
    {
        id: 2,
        logo: "dest/images/brand3.png",
        name: "smth1"
    },
    {
        id: 3,
        logo: "dest/images/brand4.png",
        name: "smth1"
    },
    {
        id: 4,
        logo: "dest/images/brand5.png",
        name: "smth1"
    },
    {
        id: 5,
        logo: "dest/images/brand6.png",
        name: "smth1"
    },
    {
        id: 6,
        logo: "dest/images/brand7.png",
        name: "smth1"
    },
    {
        id: 7,
        logo: "dest/images/brand8.png",
        name: "smth1"
    },
    {
        id: 8,
        logo: "dest/images/brand9.png",
        name: "smth1"
    },
    {
        id: 9,
        logo: "dest/images/brand10.png",
        name: "smth1"
    },
    {
        id: 10,
        logo: "dest/images/brand11.png",
        name: "smth1"
    },
    {
        id: 11,
        logo: "dest/images/brand12.png",
        name: "smth1"
    }
];

var models = [
    {
        name: "Bridgestone Blizzak VRX",
        score: {
            total: 4.5,
            par1: 4,
            par2: 4.7,
            par3: 4.5
        },
        comments: [
            {
                id:1,
                user: "Андрей",
                date: "22.07.2016",
                car: "Nissan",
                text: "Мне понравилась, в принципе согласен с отзывом Саши. При торможении ведет себя достойно, 2 раза спасала от 'поцелуя' в зад передней машины, оттормаживался со скорости 80 и 110 км/ч, идущий за мной ушел в кувет. Но были проблемы при выезде из ледяной колеи боковина довольно скользкая или ламелей не хватает. Для города, трассы, накатанных дорог отлично, для бездорожья лучше взять с другим протектором.",
                yes: 4,
                no: 2,
                score: 4.5
            },
            {
                id:2,
                user: "Андрей",
                date: "22.07.2016",
                car: "Nissan",
                text: "ранее признавал только нокиан, поездив на DM-V3 на шеви НИВА смело утверждаю что это великолепная шина в сочетании снег+грязь и гололед отлично! есть опыт и примеры. настоящая джиповская шина для комфортной езды по всем дорогам",
                yes: 4,
                no: 2,
                score: 3.2
            },
            {
                id:3,
                user: "Петя",
                date: "22.07.2016",
                car: "Nissan",
                text: "до этого стоял континенталь близак супер лучше в несколько раз доволен",
                yes: 4,
                no: 2,
                score: 5
            },
            {
                id:4,
                user: "Саша",
                date: "22.07.2016",
                text: "Мягкая, совершенно бесшумная, на гололёде при пробуксовке хорошо скребёт, аж пыль снежная летит. При торможении, правда, ожидал другого эфекта, но липа есть липа. В снегу неплохо роется, но в сыром замыливается. Всё-таки больше для шоссе и накатанного снега... Можно поставить 4+.",
                yes: 5,
                no: 0,
                score: 3.5
            },
            {
                id:5,
                user: "Андрей",
                date: "22.07.2016",
                car: "Nissan",
                text: "Мне понравилась, в принципе согласен с отзывом Саши. При торможении ведет себя достойно, 2 раза спасала от 'поцелуя' в зад передней машины, оттормаживался со скорости 80 и 110 км/ч, идущий за мной ушел в кувет. Но были проблемы при выезде из ледяной колеи боковина довольно скользкая или ламелей не хватает. Для города, трассы, накатанных дорог отлично, для бездорожья лучше взять с другим протектором.",
                yes: 4,
                no: 2,
                score: 2
            }

        ]
    }
];

var news = [
    {
        "name": "Тесты шин",
        "nameEn": "tires_tests",
        "subsections": [
            {
                "name": "Тесты зимних шин",
                "nameEn": "winter_tires_tests",
                "news": [
                    {
                        "title": "Ух ты!",
                        "titleEn": "uh_ty",
                        "date": "22.07.1986",
                        "previewText": "В Лондоне идут дожди",
                        "previewPicture": "dest/images/home-grid-01.jpg",
                        "id": 19817230182,
                        "commentsNumber": 3
                    },
                    {
                        "title": "Тест супершин Дабл-трабл",
                        "date": "31.07.2010",
                        "previewText": "Хотите жить, харэ тормозить. С дабл-трабл по льду, как по наждачке.",
                        "previewPicture": "dest/images/home-grid-01.jpg",
                        "id": 19817230182,
                        "commentsNumber": 4
                    }
                ]
            },
            {
                "name": "Тесты летних шин",
                "nameEn": "summer_tires_tests",
                "news": [
                    {
                        "title": "Шины от журнала Мурзилка",
                        "date": "22.06.2016",
                        "previewText": "Кто делает качественно, делает это во всем",
                        "previewPicture": "dest/images/home-grid-01.jpg",
                        "id": 19817230182,
                        "commentsNumber": 4

                    },
                    {
                        "title": "Тест супершин Дабл-трабл",
                        "date": "31.07.2010",
                        "previewText": "Хотите жить, харэ тормозить. С дабл-трабл по льду, как по наждачке.",
                        "previewPicture": "dest/images/home-grid-01.jpg",
                        "id": 19817230182,
                        "commentsNumber": 4
                    }
                ]
            }

        ]
    },
    {
        "name": "Обзоры шин",
        "nameEn": "tires_reviews",
        "subsections": [
            {
                "name": "Обзоры зимних шин",
                "nameEn": "winter_tires_reviews",
                "news": [
                    {
                        "title": "Шумахер в гостях у 4k.by",
                        "date": "17.05.2016",
                        "previewText": "Миша тоже выбирает наш сайт",
                        "previewPicture": "dest/images/home-grid-01.jpg",
                        "id": 19817230182,
                        "commentsNumber": 4
                    },
                    {
                        "title": "Лысая резина - веселье на дорогах",
                        "date": "22.08.2016",
                        "previewText": "Продаем б/у по выгодным ценам! Разлетается как горясие пирожки",
                        "previewPicture": "dest/images/home-grid-01.jpg",
                        "id": 19817230182,
                        "commentsNumber": 4
                    },
                    {
                        "title": "Bridgestone ничто - БЕЛШИНА все",
                        "date": "17.05.2016",
                        "previewText": "Мы предлогаем качество, проверенное временем...",
                        "previewPicture": "dest/images/home-grid-01.jpg",
                        "id": 19817230182,
                        "commentsNumber": 0
                    },
                    {
                        "title": "Шок! 19 шин по цене двадцати",
                        "date": "05.11.2016",
                        "previewText": "Безприцидентная акция. Спеши. Налетай. Торопись в шинный рай.",
                        "previewPicture": "dest/images/home-grid-01.jpg",
                        "id": 19817230182,
                        "commentsNumber": 1
                    },
                    {
                        "title": "Компания 'ШиноМозг' установит вам на автомобиль велосибедный шины",
                        "date": "05.06.2016",
                        "previewText": "Пора идти в ногу со временем. Так делают уже во всем мире. Экономия бешенная.",
                        "previewPicture": "dest/images/home-grid-01.jpg",
                        "id": 19817230182,
                        "commentsNumber": 0
                    },
                    {
                        "title": "Шины из резины",
                        "date": "05.04.2016",
                        "previewText": "Великолепное качество наших шин говорит само за себя. 'Я великолепное' - говорит оно",
                        "previewPicture": "dest/images/home-grid-01.jpg",
                        "id": 19817230182,
                        "commentsNumber": 25
                    },
                    {
                        "title": "Доколе?",
                        "date": "21.03.2016",
                        "previewText": "Вывывывывывыкуси.",
                        "previewPicture": "dest/images/home-grid-01.jpg",
                        "id": 19817230182,
                        "commentsNumber": 0
                    }
                ]
            },
            {
                "name": "Обзоры летних шин",
                "nameEn": "summer_tires_reviews",
                "news": [

                ]
            }
        ]
    },
    {
        "name": "Все о шинах",
        "nameEn": "all_about_tires",
        "subsections": [
            {
                "name": "Справочная информация",
                "nameEn": "for_info",
                "news": [

                ]
            },
            {
                "name": "Технологии и инновации",
                "nameEn": "technology_and_innovation",
                "news": [

                ]
            },
            {
                "name": "Аналитика и статистика",
                "nameEn": "statistics",
                "news": [

                ]
            },
            {
                "name": "Рекомендации и советы",
                "nameEn": "recommendations",
                "news": [

                ]
            },
            {
                "name": "Истории создания брендов",
                "nameEn": "history_of_brands",
                "news": [

                ]
            }
        ]
    },
    {
        "name": "Новости",
        "nameEn": "tires_news",
        "subsections": [
            {
                "name": "Новинки шинного рынка",
                "nameEn": "novelties_at_market",
                "news": [

                ]
            },
            {
                "name": "Новые автомобили",
                "nameEn": "new_cars",
                "news": [

                ]
            },
            {
                "name": "Происшествия и события",
                "nameEn": "accidents",
                "news": [

                ]
            },
            {
                "name": "В мире спорта",
                "nameEn": "sport",
                "news": [

                ]
            },
            {
                "name": "Акции и PR-компании",
                "news": [

                ]
            },
            {
                "name": "Награды и достижения",
                "news": [

                ]
            },
            {
                "name": "Кадровые изменения",
                "news": [

                ]
            }
        ]
    }
];

var newsStructure = [
    {
        "section": "Тесты шин",
        "nameEn": "tires_tests",
        "subsections": [
            {
                "name": "Тесты зимних шин",
                "nameEn": "winter_tires_tests"

            },
            {
                "name": "Тесты летних шин",
                "nameEn": "summer_tires_tests"
            }

        ]
    },
    {
        "section": "Обзоры шин",
        "nameEn": "tires_reviews",
        "subsections": [
            {
                "name": "Обзоры зимних шин",
                "nameEn": "winter_tires_reviews"
            },
            {
                "name": "Обзоры летних шин",
                "nameEn": "summer_tires_reviews"
            }
        ]
    },
    {
        "section": "Все о шинах",
        "nameEn": "all_about_tires",
        "subsections": [
            {
                "name": "Справочная информация",
                "nameEn": "for_info"
            },
            {
                "name": "Технологии и инновации",
                "nameEn": "technology_and_innovation"
            },
            {
                "name": "Аналитика и статистика",
                "nameEn": "statistics"
            },
            {
                "name": "Рекомендации и советы",
                "nameEn": "recommendations"
            },
            {
                "name": "Истории создания брендов",
                "nameEn": "history_of_brands"
            }
        ]
    },
    {
        "section": "Новости",
        "nameEn": "tires_news",
        "subsections": [
            {
                "name": "Новинки шинного рынка",
                "nameEn": "novelties_at_market"
            },
            {
                "name": "Новые автомобили",
                "nameEn": "new_cars"
            },
            {
                "name": "Происшествия и события",
                "nameEn": "accidents"
            },
            {
                "name": "В мире спорта",
                "nameEn": "sport"
            },
            {
                "name": "Акции и PR-компании"
            },
            {
                "name": "Награды и достижения"
            },
            {
                "name": "Кадровые изменения"
            }
        ]
    }
];

var lastNews = [
    {
        "title": "Ух ты!",
        "titleEn": "uh_ty",
        "date": "22.07.1986",
        "previewText": "В Лондоне идут дожди",
        "previewPicture": "dest/images/home-grid-01.jpg",
        "id": 19817230180,
        "commentsNumber": 3,
        "sectionName": "Тесты шин",
        "sectionNameEn": "tires_tests",
        "subsectionName": "Тесты зимних шин",
        "subsectionNameEn": "winter_tires_tests"
    },
    {
        "title": "Тест супершин Дабл-трабл",
        "date": "31.07.2010",
        "previewText": "Хотите жить, харэ тормозить. С дабл-трабл по льду, как по наждачке.",
        "previewPicture": "dest/images/home-grid-01.jpg",
        "id": 19817230180,
        "commentsNumber": 4,
        "sectionName": "Тесты шин",
        "sectionNameEn": "tires_tests",
        "subsectionName": "Тесты зимних шин",
        "subsectionNameEn": "winter_tires_tests"
    },
    {
        "title": "Шумахер в гостях у 4k.by",
        "date": "17.05.2016",
        "previewText": "Миша тоже выбирает наш сайт",
        "previewPicture": "dest/images/home-grid-01.jpg",
        "id": 19817230181,
        "commentsNumber": 4,
        "sectionName": "Обзоры шин",
        "sectionNameEn": "tires_reviews",
        "subsectionName": "Обзоры зимних шин",
        "subsectionNameEn": "winter_tires_reviews"
    },
    {
        "title": "Лысая резина - веселье на дорогах",
        "date": "22.08.2016",
        "previewText": "Продаем б/у по выгодным ценам! Разлетается как горясие пирожки",
        "previewPicture": "dest/images/home-grid-01.jpg",
        "id": 19817230185,
        "commentsNumber": 4,
        "sectionName": "Обзоры шин",
        "sectionNameEn": "tires_reviews",
        "subsectionName": "Обзоры зимних шин",
        "subsectionNameEn": "winter_tires_reviews"
    },
    {
        "title": "Лысая резина - веселье на дорогах",
        "date": "22.08.2016",
        "previewText": "Продаем б/у по выгодным ценам! Разлетается как горясие пирожки",
        "previewPicture": "dest/images/home-grid-01.jpg",
        "id": 19817230185,
        "commentsNumber": 4,
        "sectionName": "Обзоры шин",
        "sectionNameEn": "tires_reviews",
        "subsectionName": "Обзоры зимних шин",
        "subsectionNameEn": "winter_tires_reviews"
    },
    {
        "title": "Лысая резина - веселье на дорогах",
        "date": "22.08.2016",
        "previewText": "Продаем б/у по выгодным ценам! Разлетается как горясие пирожки",
        "previewPicture": "dest/images/home-grid-01.jpg",
        "id": 19817230185,
        "commentsNumber": 4,
        "sectionName": "Обзоры шин",
        "sectionNameEn": "tires_reviews",
        "subsectionName": "Обзоры зимних шин",
        "subsectionNameEn": "winter_tires_reviews"
    },
    {
        "title": "Лысая резина - веселье на дорогах",
        "date": "22.08.2016",
        "previewText": "Продаем б/у по выгодным ценам! Разлетается как горясие пирожки",
        "previewPicture": "dest/images/home-grid-01.jpg",
        "id": 19817230185,
        "commentsNumber": 4,
        "sectionName": "Обзоры шин",
        "sectionNameEn": "tires_reviews",
        "subsectionName": "Обзоры зимних шин",
        "subsectionNameEn": "winter_tires_reviews"
    },
    {
        "title": "Лысая резина - веселье на дорогах",
        "date": "22.08.2016",
        "previewText": "Продаем б/у по выгодным ценам! Разлетается как горясие пирожки",
        "previewPicture": "dest/images/home-grid-01.jpg",
        "id": 19817230186,
        "commentsNumber": 4,
        "sectionName": "Обзоры шин",
        "sectionNameEn": "tires_reviews",
        "subsectionName": "Обзоры зимних шин",
        "subsectionNameEn": "winter_tires_reviews"
    }

];

var searchTire = [{},{},{},{}];
var searchCar = [{},{},{},{}];
var searchArticle = [{},{},{},{},{},{},{},{},{},{},{}];
var searchSize = [{},{},{}];

var cars = ["audi","bmw","mersedes","toyota","ford","ferrari","fiat","mazda","porshe"];
var audiA6Years = [1999,2000,2001,2003,2004,2005,2006,2007];
var audiModels = ["A6","A4","V2","assdas7","pirunsz90"];
var audiA61999 = ["zDf","asdg","asdga","adgzdg","asgf"];
var audiA61999xxx = {
    original: [{
        diameter: "16",
        axis: [
            {
                width: 225,
                height: 60,
                applicability: "обе оси"
            }
        ]

    }],
    variants: [
        {
            diameter: "17",
            axis: [
                {
                    width: 225,
                    height: 55,
                    applicability: "обе оси"
                }
            ]

        },
        {
            diameter: "18",
            axis: [
                {
                    width: 225,
                    height: 55,
                    applicability: "обе оси"
                }
            ]

        },
        {
            diameter: "18",
            axis: [
                {
                    width: 225,
                    height: 55,
                    applicability: "обе оси"
                }
            ]

        },
        {
            diameter: "19",
            axis: [
                {
                    width: 225,
                    height: 55,
                    applicability: "обе оси"
                }
            ]

        },
        {
            diameter: "20",
            axis: [
                {
                    width: 225,
                    height: 55,
                    applicability: "левая ось"
                },
                {
                    width: 225,
                    height: 55,
                    applicability: "правая ось"
                }
            ]

        }
    ]
};
var tiresOfSize = [
    {
        "id": "11241241",
        "label": "new",
        "brandLogo": "dest/images/brand_bridgestone.png",
        "brandName": "bridgestone",
        "name": "Bridgestone Blizzak VRX",
        "width": 185,
        "height": 55,
        "diameter": 15,
        "loadIndex": "82 (475 кг)",
        "speedIndex": "S (180 км/ч)",
        "studded": "шип.",
        "country": "Япония",
        "season": "winter",
        "picture": "dest/images/model-image-1.png",
        "score": 3.5,
        "comments": 20,
        "price": 60,
        "available": 13,
        "advantages": [
            {
                "picture": "dest/images/adv1.png",
                "name": "Полная гарантия от Bridgestone",
                "text": "при покупке от двух шин"
            },
            {
                "picture": "dest/images/adv2.png",
                "name": "Гарантия производителя",
                "text": "заводская гарантия 5 лет"
            },
            {
                "picture": "dest/images/adv3.png",
                "name": "Отправка в течение 24 часов",
                "text": "с собственного склада"
            }
        ],
        reviews: [
            {
                "score": 4,
                "name": "За рулем",
                "src": ""
            },
            {
                "score": 3,
                "name": "Авто Центр 2015",
                "src": ""
            },
            {
                "score": 3,
                "name": "Авто Центр 2016",
                "src": ""
            }

        ]
    },
    {
        "id": "11241242",
        "label": "top",
        "brandLogo": "dest/images/brand_bridgestone.png",
        "brandName": "bridgestone",
        "name": "Bridgestone Blizzak VRX",
        "width": 185,
        "height": 55,
        "diameter": 15,
        "loadIndex": "82 (475 кг)",
        "speedIndex": "S (180 км/ч)",
        "studded": "шип.",
        "country": "Япония",
        "season": "summer",
        "picture": "dest/images/model-image-1.png",
        "score": "3.5",
        "comments": 20,
        "price": 61,
        "available": 13,
        "advantages": [
            {
                "picture": "dest/images/adv1.png",
                "name": "Полная гарантия от Bridgestone",
                "text": "при покупке от двух шин"
            },
            {
                "picture": "dest/images/adv2.png",
                "name": "Гарантия производителя",
                "text": "заводская гарантия 5 лет"
            }
        ]
    },
    {
        "id": "11241243",
        "label": false,
        "brandLogo": "dest/images/brand_bridgestone.png",
        "brandName": "bridgestone",
        "name": "Bridgestone Blizzak VRX",
        "width": 185,
        "height": 55,
        "diameter": 15,
        "loadIndex": "82 (475 кг)",
        "speedIndex": "S (180 км/ч)",
        "studded": "шип.",
        "country": "Япония",
        "season": "winter",
        "picture": "dest/images/model-image-1.png",
        "score": "3.5",
        "comments": 20,
        "price": 62,
        "available": 2,
        "advantages": [
            {
                "picture": "dest/images/adv1.png",
                "name": "Полная гарантия от Bridgestone",
                "text": "при покупке от двух шин"
            },
            {
                "picture": "dest/images/adv2.png",
                "name": "Гарантия производителя",
                "text": "заводская гарантия 5 лет"
            }
        ]
    },
    {
        "id": "11241244",
        "label": false,
        "brandLogo": "dest/images/brand_bridgestone.png",
        "brandName": "bridgestone",
        "name": "Bridgestone Blizzak VRX",
        "width": 185,
        "height": 55,
        "diameter": 15,
        "loadIndex": "82 (475 кг)",
        "speedIndex": "S (180 км/ч)",
        "studded": "шип.",
        "country": "Япония",
        "season": "winter",
        "picture": "dest/images/model-image-1.png",
        "score": "3.5",
        "comments": 20,
        "price": 63,
        "available": 2,
        "advantages": [
            {
                "picture": "dest/images/adv1.png",
                "name": "Полная гарантия от Bridgestone",
                "text": "при покупке от двух шин"
            },
            {
                "picture": "dest/images/adv2.png",
                "name": "Гарантия производителя",
                "text": "заводская гарантия 5 лет"
            }
        ]
    },
    {
        "id": "11241244",
        "label": false,
        "brandLogo": "dest/images/brand_bridgestone.png",
        "brandName": "bridgestone",
        "name": "Bridgestone Blizzak VRX",
        "width": 185,
        "height": 55,
        "diameter": 15,
        "loadIndex": "82 (475 кг)",
        "speedIndex": "S (180 км/ч)",
        "studded": "шип.",
        "country": "Япония",
        "season": "winter",
        "picture": "dest/images/model-image-1.png",
        "score": "3.5",
        "comments": 20,
        "price": 64,
        "available": 2,
        "advantages": [
            {
                "picture": "dest/images/adv1.png",
                "name": "Полная гарантия от Bridgestone",
                "text": "при покупке от двух шин"
            },
            {
                "picture": "dest/images/adv2.png",
                "name": "Гарантия производителя",
                "text": "заводская гарантия 5 лет"
            }
        ]
    },
    {
        "id": "11241244",
        "label": false,
        "brandLogo": "dest/images/brand_bridgestone.png",
        "brandName": "bridgestone",
        "name": "Bridgestone Blizzak VRX",
        "width": 185,
        "height": 55,
        "diameter": 15,
        "loadIndex": "82 (475 кг)",
        "speedIndex": "S (180 км/ч)",
        "studded": "шип.",
        "country": "Япония",
        "season": "winter",
        "picture": "dest/images/model-image-1.png",
        "score": "3.5",
        "comments": 20,
        "price": 65,
        "available": 2,
        "advantages": [
            {
                "picture": "dest/images/adv1.png",
                "name": "Полная гарантия от Bridgestone",
                "text": "при покупке от двух шин"
            },
            {
                "picture": "dest/images/adv2.png",
                "name": "Гарантия производителя",
                "text": "заводская гарантия 5 лет"
            }
        ]
    },
    {
        "id": "11241244",
        "label": false,
        "brandLogo": "dest/images/brand_bridgestone.png",
        "brandName": "bridgestone",
        "name": "Bridgestone Blizzak VRX",
        "width": 185,
        "height": 66,
        "diameter": 15,
        "loadIndex": "82 (475 кг)",
        "speedIndex": "S (180 км/ч)",
        "studded": "шип.",
        "country": "Япония",
        "season": "winter",
        "picture": "dest/images/model-image-1.png",
        "score": "3.5",
        "comments": 20,
        "price": 50,
        "available": 2,
        "advantages": [
            {
                "picture": "dest/images/adv1.png",
                "name": "Полная гарантия от Bridgestone",
                "text": "при покупке от двух шин"
            },
            {
                "picture": "dest/images/adv2.png",
                "name": "Гарантия производителя",
                "text": "заводская гарантия 5 лет"
            }
        ]
    },
    {
        "id": "11241244",
        "label": false,
        "brandLogo": "dest/images/brand_bridgestone.png",
        "brandName": "bridgestone",
        "name": "Bridgestone Blizzak VRX",
        "width": 185,
        "height": 67,
        "diameter": 15,
        "loadIndex": "82 (475 кг)",
        "speedIndex": "S (180 км/ч)",
        "studded": "шип.",
        "country": "Япония",
        "season": "winter",
        "picture": "dest/images/model-image-1.png",
        "score": "3.5",
        "comments": 20,
        "price": 50,
        "available": 2,
        "advantages": [
            {
                "picture": "dest/images/adv1.png",
                "name": "Полная гарантия от Bridgestone",
                "text": "при покупке от двух шин"
            },
            {
                "picture": "dest/images/adv2.png",
                "name": "Гарантия производителя",
                "text": "заводская гарантия 5 лет"
            }
        ]
    },
    {
        "id": "11241244",
        "label": false,
        "brandLogo": "dest/images/brand_bridgestone.png",
        "brandName": "bridgestone",
        "name": "Bridgestone Blizzak VRX",
        "width": 185,
        "height": 55,
        "diameter": 15,
        "loadIndex": "82 (475 кг)",
        "speedIndex": "S (180 км/ч)",
        "studded": "шип.",
        "country": "Япония",
        "season": "winter",
        "picture": "dest/images/model-image-1.png",
        "score": "4",
        "comments": 20,
        "price": 68,
        "available": 2,
        "advantages": [
            {
                "picture": "dest/images/adv1.png",
                "name": "Полная гарантия от Bridgestone",
                "text": "при покупке от двух шин"
            },
            {
                "picture": "dest/images/adv2.png",
                "name": "Гарантия производителя",
                "text": "заводская гарантия 5 лет"
            }
        ]
    }
];

app.get("/brands",function(req,res){
    res.send(brands);
});
app.get("/news",function(req,res){
    res.send(news);
});
app.get("/newsStructure",function(req,res){
    res.send(newsStructure);
});
app.get("/lastNews",function(req,res){
    res.send(lastNews);
});
app.get("/brands/:name",function(req,res){
    console.log(req.params.name);
    brands.forEach(function(el, i){
        if (el.name === req.params.name) {
            console.log(1);
            res.send(brands[i]);
        }
    });
});
app.get("/models/:name",function(req,res){
    console.log(req.params.name);
    models.forEach(function(el, i){
        if (el.name === req.params.name) {
            console.log(1);
            res.send(models[i]);
        }
    });
});
app.get("/search",function(req,res){
    var searchSection = req.query.searchSection;
    var searchText = req.query.searchText;
    if (searchSection) {
        switch (searchSection) {
            case "tire": {
                res.send(searchTire);
                break;
            }
            case "car": {
                res.send(searchCar);
                break;
            }
            case "size": {
                res.send(searchSize);
                break;
            }
            case "article": {
                res.send(searchArticle);
                break;
            }
            case "all": {
                res.send([{
                    tire: searchTire,
                    car: searchCar,
                    size: searchSize,
                    article: searchArticle
                }]);
                break;
            }
        }
    }
    else {
        res.send([{
            tire: searchTire,
            car: searchCar,
            size: searchSize,
            article: searchArticle
        }]);
    }
});
app.get("/cars",function(req,res){
    console.log(1);
    res.send(cars);
});
app.get("/tiresOfSize/:width/:height/:diameter",function(req,res){
    console.log(req.params);
    res.send(tiresOfSize);
});

app.get("/chooseTire/:width/:height/:diameter/:brands/:season/:ship/:inStock/:minCost/:maxCost",function(req,res){
    console.log(req.params);
    res.send(tiresOfSize);
});


app.get("/carModels/:car",function(req,res){
    console.log(req.params.car);
    res.send(audiModels);
});
app.get("/carModelYears/:model",function(req,res){
    console.log(req.params.model);
    res.send(audiA6Years);
});
app.get("/carModelYearModifications/:year",function(req,res){
    console.log(req.params.year);
    res.send(audiA61999);
});
app.get("/carModelYearModificationResult/:modification",function(req,res){

    res.send(audiA61999xxx);
});


console.log("Server running on port 3000...");
