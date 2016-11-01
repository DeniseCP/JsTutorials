var app8 = angular.module("app8", ['weatherFilters']);

app8.controller('mainCtrl', function($scope){
    $scope.students =[
        {name: "George Thomas", gpa: 3.5},
        {name: "Susy Smith", gpa: 3.6},
        {name: "Paul Marks", gpa: 3.5},
        {name: "Sue Edgar", gpa: 3.8}
    ];

    $scope.student = {
        gpas:[
            {name: "George Thomas", gpa: 3.5},
            {name: "Susy Smith", gpa: 3.6},
            {name: "Paul Marks", gpa: 3.8},
            {name: "Sue Edgar", gpa: 3.8}
        ]
    };

    $scope.currDate = new Date();

    $scope.randomStr = "Bacon ipsum dolor amet salami ribeye shank landjaeger chicken meatball picanha drumstick fatback spare ribs ham pancetta andouille.";

    $scope.randArray = [
        "Pasta",
        "Pizza",
        "Canolli",
        "Gelato",
        "Sausages"
    ];

    $scope.weather = [
        {day: "Monday" , rain : false},
        {day: "Tuesday" , rain : true}

    ];
});

