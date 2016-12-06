app.filter("dateRus",[function(){
    return function(text){  //Дата в формате YYYY-MM-DD
        var months = ["","января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];
        var day = (text.slice(-2,-1)==0)?text.slice(-1):text.slice(-2);

        return day+" "+months[+text.slice(5,7)]+", "+text.slice(0,4);
    }
}]);
