angular.module('mealRater')
.config(function($routeProvider){
  $routeProvider.when('/goals', {
    templateUrl:'/templates/pages/goals/index.html',
  })
  .when('/', {
    templateUrl: '/templates/main/app.html',
    controller:"ratingController",
    controllerAs: "ratings"
  })
  .otherwise({redirectTo: '/'})
});
