app.filter("maxNumberShown",[function(){
    return function(amount){
        var maxNumberShown = 4;

        return (maxNumberShown > amount) ? amount : (">" + maxNumberShown);
    }
}]);

