// Declare app level module which depends on views, and components
(function(){
  'use strict';
  var app=angular.module('mealRater', [])

  app.controller('ratingController', function(){
    this.meals = meals;
  })
  // .directive("bookGenres", function(){
  //   return {
  //     restrict: "E",
  //     templateUrl:"partials/book-genres.html"
  //   }
  // })
  ;

  app.controller('ReviewController', function(){
    this.review={};
    this.addReview=function(){
      meals.push(this.review);
      this.review={};
    };
  });

var meals = [
  {
    name: 'Mac and Cheese',
    place: 'Paradise Bakery and Cafe',
    notes: 'The most inventive and entertaining fantasy saga of our time—warrants one hell of an introduction. I loved this book!',
    rating: 4,
    categories: { 'lunch': true, fantasy: true }
  },
  {
    name: 'Lo Mein',
    place: 'Pei Wei',
    notes: 'The most inventive and entertaining fantasy saga of our time—warrants one hell of an introduction. I loved this book!',
    rating: 7,
    categories: { 'lunch': true, fantasy: true }
  }
];
})();
