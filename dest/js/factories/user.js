app.factory("user",function(){
    return     {
        login: "Кirill Hulin",
        name: "Кирилл",
        surname: "Гулин",
        patronomic: "Георгиевич",
        email: "kirillhulin@ya.ru",
        password: "",
        cartItems: [{
            "name": "sdasfaf",
            "brand": "sdasfaf",
            "width": 185,
            "height": 65,
            "diameter": 15,
            "loadIndex": "80(111)",
            "speedIndex": "sa",
            "price": 62.12,
            "quantity": 4,
            "season": "all",
            "picture": "dest/images/model-image-1.png",
            "id": 19048343814901,
            "available": 10
        }],
        recentItems: [
            {
                "name": "Bridgestone Blizzak VRX",
                "score": "4.2",
                "picture": "dest/images/bridgestone2.png",
                "season": "summer",
                "brand": "bridgestone"
            },
            {
                "name": "Bridgestone Blizzak VRX1",
                "score": "4.2",
                "picture": "dest/images/bridgestone2.png",
                "season": "summer",
                "brand": "bridgestone"
            },
            {
                "name": "Bridgestone Blizzak VRX2",
                "score": "4.8",
                "picture": "dest/images/bridgestone3.png",
                "season": "all",
                "brand": "bridgestone"
            },
            {
                "name": "Bridgestone Blizzak VRX3",
                "score": "3.5",
                "picture": "dest/images/bridgestone4.png",
                "season": "summer",
                "brand": "bridgestone"
            }
        ],
        selectedItems: [
            {
                "name": "Bridgestone Blizzak VRX1",
                "score": "4.2",
                "picture": "dest/images/bridgestone2.png",
                "season": "summer",
                "brand": "bridgestone",
                "size": {
                    width: 165,
                    height: 65,
                    diameter: 15
                }
            },
            {
                "name": "Bridgestone Blizzak VRX2",
                "score": "4.8",
                "picture": "dest/images/bridgestone3.png",
                "season": "all",
                "brand": "bridgestone"
            },
            {
                "name": "Bridgestone Blizzak VRX3",
                "score": "3.5",
                "picture": "dest/images/bridgestone4.png",
                "season": "summer",
                "brand": "bridgestone"
            }
        ],
        address: "",
        phone: "",
        purchases: [
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
                "amount": 4
            }
        ],
        comments: [
            {
                brand: "bridgestone",
                model: "Bridgestone Blizzak VRX",
                id:1,
                date: "22.07.2016",
                text: "Мне понравилась, в принципе согласен с отзывом Саши. При торможении ведет себя достойно, 2 раза спасала от 'поцелуя' в зад передней машины, оттормаживался со скорости 80 и 110 км/ч, идущий за мной ушел в кувет. Но были проблемы при выезде из ледяной колеи боковина довольно скользкая или ламелей не хватает. Для города, трассы, накатанных дорог отлично, для бездорожья лучше взять с другим протектором.",
                yes: 4,
                no: 2,
                score: 4.5
            },
            {
                brand: "bridgestone",
                model: "Bridgestone Blizzak VRX",
                id:2,
                date: "22.07.2016",
                text: "ранее признавал только нокиан, поездив на DM-V3 на шеви НИВА смело утверждаю что это великолепная шина в сочетании снег+грязь и гололед отлично! есть опыт и примеры. настоящая джиповская шина для комфортной езды по всем дорогам",
                yes: 4,
                no: 2,
                score: 3.2
            },
            {
                brand: "bridgestone",
                model: "Bridgestone Blizzak VRX",
                id:3,
                date: "22.07.2016",
                text: "до этого стоял континенталь близак супер лучше в несколько раз доволен",
                yes: 4,
                no: 2,
                score: 5
            },
            {
                brand: "bridgestone",
                model: "Bridgestone Blizzak VRX",
                id:4,
                date: "22.07.2016",
                text: "Мягкая, совершенно бесшумная, на гололёде при пробуксовке хорошо скребёт, аж пыль снежная летит. При торможении, правда, ожидал другого эфекта, но липа есть липа. В снегу неплохо роется, но в сыром замыливается. Всё-таки больше для шоссе и накатанного снега... Можно поставить 4+.",
                yes: 5,
                no: 0,
                score: 3.5
            },
            {
                brand: "bridgestone",
                model: "Bridgestone Blizzak VRX",
                id:5,
                date: "22.07.2016",
                text: "Мне понравилась, в принципе согласен с отзывом Саши. При торможении ведет себя достойно, 2 раза спасала от 'поцелуя' в зад передней машины, оттормаживался со скорости 80 и 110 км/ч, идущий за мной ушел в кувет. Но были проблемы при выезде из ледяной колеи боковина довольно скользкая или ламелей не хватает. Для города, трассы, накатанных дорог отлично, для бездорожья лучше взять с другим протектором.",
                yes: 4,
                no: 2,
                score: 2
            }

        ],
        totalCartPrice: 0,
        loggedIn: true,
        countTotalCartPrice: function() {
            var self = this;
            self.totalCartPrice = 0;
            angular.forEach(this.cartItems, function(item){
                self.totalCartPrice += Number((item.price * item.quantity).toFixed(2));
            });
        },
        leave: function(){
            this.loggedIn = false;
            this.login = "";
            this.name = "";
            this.surname = "";
            this.patronomic = "";
            this.email = "";
            this.password = "";
            this.address = "";
            this.phone = "";
            this.purchases = [];
            this.totalCartPrice = 0;

        },
        addToSelected: function(model){
            if (!this.isModelSelected(model.name,model.size)) {
                this.selectedItems.unshift(model);
            }
            else {
                var index;
                angular.forEach(this.selectedItems, function(item, i){

                    if (model.name == item.name) {
                        if(model.size) {
                            if (item.size.width==model.size.width && item.size.height==model.size.height && item.size.diameter==model.size.diameter) {
                                index = i;
                            }
                        }
                        else {
                            if (!item.size) index = i
                        }
                    }
                });
                this.selectedItems.splice(index,1);
            }
        },
        isModelSelected: function(model,size){
            var modelSelected = false;
            angular.forEach(this.selectedItems, function(item){
                if (model == item.name) {
                    if(size) {
                        if (item.size.width==size.width && item.size.height==size.height && item.size.diameter==size.diameter) {
                            modelSelected = true;
                        }
                    }
                    else {
                        if (!item.size) modelSelected = true;
                    }
                }
            });
            return modelSelected;
        }
    }
});
