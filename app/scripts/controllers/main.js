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
        title: 'HandleBar',
        address1: '121 E 5th St',
        address2: 'Austin, TX 78701',
        idKey: 1,
        coords: {
          latitude: 30.266554,
          longitude: -97.742141
        },
        show: false,
        visible: false
      },
      {
       title: 'Brave New Books',
       address1: '1904 Guadalupe St',
       address2: 'Austin, TX 78705',
       idKey: 2,
       coords: {
         latitude: 30.282328,
         longitude: -97.742442
       },
       show: false,
       visible: false
      },
      {
        title: 'Bennu Coffee',
        address1: '2001 E Martin Luther King Jr Blvd',
        address2: 'Austin, TX 78702',
        idKey: 3,
        coords: {
          latitude: 30.279824,
          longitude: -97.719576
        },
        show: false,
        visible: false
      },
      {
       title: 'Central Texas Gun Works',
       address1: '321 W. Ben White Blvd',
       address2: 'Austin, TX 78704',
       idKey: 4,
       coords: {
         latitude: 30.223749,
         longitude: -97.767375
       },
       show: false,
       visible: false
      },
      {
       title: 'George R. Brown Convention Center',
       address1: '1001 Avenida De Las Americas',
       address2: 'Houston, TX 77010',
       idKey: 5,
       coords: {
         latitude: 29.752207,
         longitude: -95.358021
       },
       show: false,
       visible: false
      },
      {
       title: 'Xamach Mexican Cuisine & Bar',
       address1: '4123 Cedar Springs Rd',
       address2: 'Dallas, TX 75219',
       idKey: 6,
       coords: {
         latitude: 32.811740,
         longitude: -96.813293
       },
       show: false,
       visible: false
      },
      {
       title: 'Pop Diner',
       address1: '3600 McKinney Ave',
       address2: 'Dallas, TX 75204',
       idKey: 7,
       coords: {
         latitude: 32.807012,
         longitude: -96.797348
       },
       show: false,
       visible: false
      },
      {
       title: 'BuzzBrews - Deep Ellum',
       address1: '2801 Commerce St',
       address2: 'Dallas, TX 75226',
       idKey: 8,
       coords: {
         latitude: 32.783441,
         longitude: -96.783170
       },
       show: false,
       visible: false
      },
      {
       title: 'Geek On Wheels',
       address1: '625 Dallas Dr',
       address2: 'Denton, TX 76205',
       idKey: 9,
       coords: {
         latitude: 33.202581,
         longitude: -97.127069
       },
       show: false,
       visible: false
      },

    ];

    $scope.onClick = function() {
        $scope.visible = !$scope.visible;
    };

    $scope.closeClick = function() {
        $scope.visible = false;
    };


  });
