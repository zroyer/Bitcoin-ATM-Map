'use strict';

/**
 * @ngdoc function
 * @name bitcoinAtmMapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bitcoinAtmMapApp
 */
angular.module('bitcoinAtmMapApp')
  .controller('MainCtrl', function ($scope) {
    
    $scope.map = {
      center: {
        latitude: 30.4669444, 
        longitude: -97.7427778
      },
      zoom: 10
    },

    $scope.markerList = [
      {
        coords: {
          latitude: 30.2669444,
          longitude: -97.8427778
        },
        idKey:1,
        message:"message 1",
      },
      {
        coords: {
          latitude: 29.2669444,
          longitude: -97.7437778
        },
        options: { title: "title 2"},
        idKey:2
      },
      {
        coords: {
          latitude: 30.2679444,
          longitude: -97.7427778
        },
        options: { title: "title 3"},
        idKey:3
      }

    ]

  });
