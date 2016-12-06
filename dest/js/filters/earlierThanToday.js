app.filter("earlierThanToday",[function(){
    return function(text){  //Дата в формате YYYY-MM-DD

        var now = new Date();
        var day = now.getDay(), month = now.getMonth(), year = now.getFullYear();
        var textDay = (text.slice(-2,-1)==0)?text.slice(-1):text.slice(-2);
        if (year < text.slice(0,4)) {
            return false;
        }
        else if (year == text.slice(0,4)) {
            if (month<text.slice(5,7)) {
                return false
            }
            else if (month==text.slice(5,7)) {
                if (day<textDay) {
                    return false
                }
            }
        }
        return true;
    }
}]);
