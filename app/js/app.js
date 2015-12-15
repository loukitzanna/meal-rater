// Declare app level module which depends on views, and components
(function(){
  'use strict';
  var app=angular.module('mealRater', [])

  app.controller('ratingController', function(){
    this.meals = meals;
  })
  .directive("reviewForm", function(){
    return {
      restrict: "E",
      templateUrl:"partials/review-form.html"
    }
  })
  ;

  app.controller('ReviewController', function(){
    this.review={};
    this.addReview=function(){
      meals.unshift(this.review);
      this.review={};
    };
  });

var meals = [
  {
    name: 'Salad',
    place: 'Paradise Bakery and Cafe',
    notes: 'Etiam rhoncus. Suspendisse potenti. Sed fringilla mauris sit amet nibh. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed cursus turpis vitae tortor. Quisque id odio.',
    rating: 4,
    categories: { 'lunch': true, fantasy: true }
  },
  {
    name: 'Lo Mein',
    place: 'Pei Wei',
    notes: 'Nam at tortor in tellus interdum sagittis. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. In ac felis quis tortor malesuada pretium. Nulla sit amet est. Fusce commodo aliquam arcu.',
    rating: 7,
    categories: { 'lunch': true, fantasy: true }
  }
];
})();
