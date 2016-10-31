var app3 = angular.module("app3",[]);

app3.controller('gListCtrl', function($scope){
    $scope.groceries=[
    {item: "Tomatoes", purchased: false},
    {item: "Apples", purchased: true},
    {item: "Bacon", purchased: false},
    {item: "Potatoes", purchased: true},
    {item: "Half Half", purchased: false},
    ];

    $scope.getList = function(){
    return $scope.showList ? "groceryList.html" : "groceryList1.html"
    };
});