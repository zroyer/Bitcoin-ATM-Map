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
        latitude: 30.2679444, 
        longitude: -97.7427778
      },
      zoom: 10
    };

    $scope.markerList = [
      {
        coords: {
          latitude: 30.2669444,
          longitude: -97.8427778
        },
        show: false,
        visible: false,
        idKey:1,
        title: 'Title 1',
        address: 'address 1'
      },
      {
        coords: {
          latitude: 29.2669444,
          longitude: -97.7437778
        },
        show: false,
        visible: false,
        idKey:2,
        title: 'Title 2',
        address: 'address 2'
      },
      {
        coords: {
          latitude: 30.2679444,
          longitude: -97.7427778
        },
        show: false,
        visible: false,
        idKey:3,
        title: 'Title 3',
        address: 'address 3'
      }
    ];

    $scope.onClick = function() {
        $scope.visible = !$scope.visible;
    };

    $scope.closeClick = function() {
        $scope.visible = false;
    };


  });
