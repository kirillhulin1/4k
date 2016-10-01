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
        name: "bridgestone"
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
        name: "her",
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
        name: "Новость 1",
        date: "19.05.2016"
    },
    {
        name: "Новость 2",
        date: "19.061.2016"
    },
    {
        name: "Новость 3",
        date: "12.05.2016"
    },
    {
        name: "Новость 4",
        date: "09.05.2016"
    },
    {
        name: "Новость 5",
        date: "19.05.2012"
    }
];



app.get("/brands",function(req,res){
    res.send(brands);
});
app.get("/news",function(req,res){
    res.send(news);
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
/*app.get("/pages",function(req,res){
    res.send(pages);
});

app.get("/users/:id",function(req,res){
    users.forEach(function(el, i){
        if (el.id == req.params.id) {
            console.log(users[i]);
            res.send(users[i]);
        }
    });

});*/

console.log("Server running on port 3000...");
