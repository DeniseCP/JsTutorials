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

app5.controller('userCtrl', function($scope){
    $scope.user = [{
        fName: "Denise",
        lName : "Pereira",
        street: "446 49th E Ave",
        subscribe : "Subscribe",
        delivery : "Email"
    }];

    $scope.saveUser = function (userInfo){
        if($scope.userForm.$valid){
            $scope.user.push({
                fName : userInfo.fName,
                lName : userInfo.lName,
                street : userInfo.street,
                subscribe : userInfo.subscribe,
                delivery : userInfo.delivery
            });
            console.log("User Saved")
        }else{
            console.log("Error: Couldn't save user")
            }
    };
});

