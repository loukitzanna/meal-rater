// Declare app level module which depends on views, and components
(function(){
  'use strict';
  angular.module('mealRater', ['ngRoute'])

  // .controller('ratingController', function(){
  //   this.meals = meals;
  // })
  .directive("reviewForm", function(){
    return {
      restrict: "E",
      templateUrl:"partials/review-form.html"
    }
  })
  // .controller('ReviewController', function(){
  //   this.review={};
  //   this.addReview=function(){
  //     meals.unshift(this.review);
  //     this.review={};
  //   };
  // })
  ;

// var meals = [
//   {
//     name: 'Salad',
//     place: 'Paradise Bakery and Cafe',
//     notes: 'Etiam rhoncus. Suspendisse potenti. Sed fringilla mauris sit amet nibh. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed cursus turpis vitae tortor. Quisque id odio.',
//     rating: 4,
//     categories: { 'lunch': true, fantasy: true }
//   },
//   {
//     name: 'Lo Mein',
//     place: 'Pei Wei',
//     notes: 'The most inventive and entertaining fantasy saga of our time—warrants one hell of an introduction. I loved this book!',
//     rating: 7,
//     categories: { 'lunch': true, fantasy: true }
//   }
// ];
})();
