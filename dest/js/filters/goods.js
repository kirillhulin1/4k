app.filter("goods",function(){
    return function(quantity){
        var print = "";
        if (quantity == 1) {
            print = "товар";
        }
        else if(quantity%100 >= 11 && quantity%100<=14) {
            print = "товаров";
        }
        else if (quantity%10 == 2 || quantity%10 == 3 || quantity%10 == 4) {
            print = "товара";
        }
        else print= "товаров";
        return quantity + " " + print;
    }
});
