var app4_5 = angular.module("app4_5", []);

app4_5.controller('eventCtrl', function($scope){
    $scope.disableButton = true;

});

app4_5.controller('ctrl1', function($scope){
    $scope.dayTimeButton = true;


});

app4_5.controller('ctrl2', function($scope){
});

app4_5.controller('ctrl3', function($scope){
    $scope.capitals = [
        {"City":"Montgomery",
        "State":"Alabama"},
        {"City":"Juneau",
        "State":"Alaska"},
        {"City":"Phoenix",
        "State":"Arizona"},
        {"City":"Little Rock",
        "State":"Arkansas"}
    ];
});