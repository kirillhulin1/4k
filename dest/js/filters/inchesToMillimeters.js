app.filter("inchesToMillimeters",[function(){
    return function(text){
       return text*25.4;
    }
}]);

