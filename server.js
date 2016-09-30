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
        }
    }
];

app.get("/brands",function(req,res){
    res.send(brands);
});
app.get("/models/:name",function(req,res){
    models.forEach(function(el, i){
        if (el.name === req.params.name) {
            console.log(models[i]);
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
