app.controller("CalculatorCtrl",["$scope",function($scope){
  $scope.scope = $scope;
  $scope.speed = 90;

  $scope.widths = [
    {name:145,value: 145},
    {name:155,value: 155},
    {name:165,value: 165},
    {name:175,value: 175},
    {name:185,value: 185},
    {name:195,value: 195},
    {name:205,value: 205},
    {name:215,value: 215},
    {name:225,value: 225},
    {name:235,value: 235},
    {name:245,value: 245},
    {name:255,value: 255},
    {name:265,value: 265},
    {name:275,value: 275},
    {name:285,value: 285},
    {name:295,value: 295},
    {name:305,value: 305},
    {name:315,value: 315},
    {name:325,value: 325},
    {name:335,value: 335},
    {name:345,value: 345},
    {name:355,value: 355}
  ];
  $scope.heights = [
    {name:35,value: 0.35},
    {name:40,value: 0.40},
    {name:45,value: 0.45},
    {name:50,value: 0.50},
    {name:55,value: 0.55},
    {name:60,value: 0.60},
    {name:65,value: 0.65},
    {name:70,value: 0.70},
    {name:75,value: 0.75},
    {name:80,value: 0.80},
    {name:"-",value: 1}
  ];
  $scope.diameters = [
    {name:"R12",value: 12},
    {name:"R13",value: 13},
    {name:"R14",value: 14},
    {name:"R15",value: 15},
    {name:"R16",value: 16},
    {name:"R17",value: 17},
    {name:"R18",value: 18},
    {name:"R19",value: 19},
    {name:"R20",value: 20},
    {name:"R21",value: 21},
    {name:"R22",value: 22},
    {name:"R23",value: 23},
    {name:"R24",value: 24}
  ];

}]);
