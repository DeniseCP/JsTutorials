var app6 = angular.module("app6", []);

app6.controller('heroCtrl', function($scope, $rootScope){
    $scope.hero=[
    {realName: "Bruce Wayne", heroName: "Batman"},
    {realName: "Clark Kent", heroName: "Superman"},
    {realName: "Barbara Gordon", heroName: "Batgirl"},
    {realName: "Wally West", heroName:"Flash"},
    {realName: "Peter Parker", heroName:"Spiderman"},
    {realName: "Bart Simpson", heroName: "El Barto"}
    ];

    $scope.getHeroData = function(){
        heroSearch($scope.heroName);
    };

    function heroSearch(name){
        $scope.heroData = "Not found";
        for(var i =0; i<$scope.hero.length; i++){
            if($scope.hero[i].heroName === name){
                $scope.heroData = $scope.hero[i].realName + " is "
                + $scope.hero[i].heroName;
            }
        }
    }

    $scope.$on("heroUpdated", function(event, args){
        $scope.hero.push({
            realName: args.realName, heroName: args.heroName
        })
    });

    $scope.saveHeroData = function(realName, heroName){
        $rootScope.$broadcast("heroUpdated",
        {realName : realName, heroName: heroName}
        );
      console.log("Real name: "+ realName + " Hero Name: "+ heroName);
    };
});