var app5 = angular.module("app5", []);

app5.controller('gListCtrl', function($scope){
    $scope.groceries = [
    {"item":"tomato",
    "purchased":false},
    {"item":"potato",
    "purchased":true},
    {"item":"grapes",
    "purchased":false},
    {"item":"butter",
    "purchased":true},
    ];

    $scope.addItem = function(newItem){
        if(!(newItem === undefined || newItem ==="")){
            $scope.groceries.push({
                item: newItem, purchased: false
            });
            $scope.missingNewItemError="";
        }else{
            $scope.missingNewItemError="Please enter an item";
        }
    };
});