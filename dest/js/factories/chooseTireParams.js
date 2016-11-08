app.factory("chooseTireParams",function(){
        var width = "",
        height= "",
        diameter= "",
        brands= "",
        season= "",
        ship= "",
        inStock= "",
        minCost= "",
        maxCost= "";

        function set(newParams) {
            width = newParams.width;
            height= newParams.height;
            diameter= newParams.diameter;
            brands= newParams.brands;
            season= newParams.season;
            ship= newParams.ship;
            inStock= newParams.inStock;
            minCost= newParams.minCost;
            maxCost= newParams.maxCost;
        }

        function get() {
            return {
                width: width,
                height: height,
                diameter: diameter,
                brands: brands,
                season: season,
                ship: ship,
                inStock: inStock,
                minCost: minCost,
                maxCost: maxCost
            }
        }

        return {
            set: set,
            get: get
        }
});
