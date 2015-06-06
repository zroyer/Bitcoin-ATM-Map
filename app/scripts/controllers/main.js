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
    
    $scope.onClick = function() {
      if($scope.visible === false) {
        $scope.visible = !$scope.visible;        
      }
      $scope.visible = false;
    };

    $scope.closeClick = function() {
      $scope.visible = false;
    };

    $scope.map = {
      center: {
        latitude: 30.2679444, 
        longitude: -97.7427778
      },
      zoom: 6
    };

    $scope.markerList = [
      {
        title: 'HandleBar',
        address1: '121 E 5th St',
        address2: 'Austin, Texas 78701',
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
       address2: 'Austin, Texas 78705',
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
        address2: 'Austin, Texas 78702',
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
       address2: 'Austin, Texas 78704',
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
       address2: 'Houston, Texas 77010',
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
       address2: 'Dallas, Texas 75219',
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
       address2: 'Dallas, Texas 75204',
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
       address2: 'Dallas, Texas 75226',
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
       address2: 'Denton, Texas 76205',
       idKey: 9,
       coords: {
         latitude: 33.202581,
         longitude: -97.127069
       },
       show: false,
       visible: false
      },
      {
       title: 'Hacker Dojo',
       address1: '599 Fairchild Dr',
       address2: 'Mountain View, California 94043',
       idKey: 10,
       coords: {
         latitude: 37.402937,
         longitude: -122.049943
       },
       show: false,
       visible: false
      },
      {
       title: 'Westfield Valley Fair',
       address1: '2855 Stevens Creek Boulevard',
       address2: 'Santa Clara, California 95050',
       idKey: 11,
       coords: {
         latitude: 37.325885,
         longitude: -121.945375
       },
       show: false,
       visible: false
      },
      {
       title: 'Draper University',
       address1: 'E 3rd Ave',
       address2: 'San Mateo, California 94401',
       idKey: 12,
       coords: {
         latitude: 37.570771,
         longitude: -122.313990
       },
       show: false,
       visible: false
      },
      {
       title: 'Nakamotos',
       address1: '2415 Mission St',
       address2: 'San Francisco, California 94110',
       idKey: 13,
       coords: {
         latitude: 37.758426,
         longitude: -122.418899
       },
       show: false,
       visible: false
      },
      {
       title: 'Good Vapor Downtown LA',
       address1: '133 E 3rd St',
       address2: 'Los Angeles, California 90013',
       idKey: 14,
       coords: {
         latitude: 34.048774,
         longitude: -118.245123
       },
       show: false,
       visible: false
      },
      {
       title: 'Vapor Craze',
       address1: '3837 Atlantic Ave',
       address2: 'Long Beach, California 90807',
       idKey: 15,
       coords: {
         latitude: 33.828170,
         longitude: -118.185356
       },
       show: false,
       visible: false
      },
      {
       title: 'CrowdGather Headquarters',
       address1: '20300 Ventura Boulevard',
       address2: 'Woodland Hills, California 91364',
       idKey: 16,
       coords: {
         latitude: 34.168979,
         longitude: -118.575231
       },
       show: false,
       visible: false
      },
      {
       title: 'Eureka Building',
       address1: '1621 Alton Parkway',
       address2: 'Irvine, California 92606',
       idKey: 17,
       coords: {
         latitude: 33.699406,
         longitude: -117.846822
       },
       show: false,
       visible: false
      },
      {
       title: 'ONeils on Wells',
       address1: '411 South Wells Street',
       address2: 'Chicago, Illinois 60607',
       idKey: 18,
       coords: {
         latitude: 41.876409,
         longitude: -87.633361
       },
       show: false,
       visible: false
      },
      {
       title: 'Blue 1647 Tech Innovation Center',
       address1: '1647 S Blue Island Ave',
       address2: 'Chicago, Illinois 60608',
       idKey: 18,
       coords: {
         latitude: 41.858408,
         longitude: -87.660326
       },
       show: false,
       visible: false
      },
      {
       title: 'Seven Ten Lanes',
       address1: '1055 E 55th St',
       address2: 'Chicago, Illinois 60637',
       idKey: 19,
       coords: {
         latitude: 41.795004,
         longitude: -87.600340
       },
       show: false,
       visible: false
      },
      {
       title: 'The Henley Vaporium in SoHo',
       address1: '23 Cleveland Pl',
       address2: 'New York, New York 10012',
       idKey: 19,
       coords: {
         latitude: 40.721764,
         longitude: -73.997072
       },
       show: false,
       visible: false
      },
      {
       title: 'Overstock.com',
       address1: '6350 South 3000 East',
       address2: 'Cottonwood Heights, Utah 84121',
       idKey: 20,
       coords: {
         latitude: 40.633241,
         longitude: -111.808474
       },
       show: false,
       visible: false
      },
      {
       title: 'Denver Bitcoin Center',
       address1: '747 Sheridan Blvd',
       address2: 'Lakewood, Colorado 80241',
       idKey: 21,
       coords: {
         latitude: 39.728976,
         longitude: -105.054584
       },
       show: false,
       visible: false
      },
      {
       title: 'Tasty Burger - Harvard Square',
       address1: '40 JFK Street',
       address2: 'Cambridge, Massachusetts 02138',
       idKey: 22,
       coords: {
         latitude: 42.372582,
         longitude: -71.119832
       },
       show: false,
       visible: false
      },
      {
       title: 'Gelateria Cosi o Cosi',
       address1: 'No. 151, Dun Hua S. Road, Sec. 1',
       address2: 'Taipei, Taiwan',
       idKey: 23,
       coords: {
         latitude: 25.030003,
         longitude: 121.549343
       },
       show: false,
       visible: false
      },
      {
       title: 'SetCell',
       address1: '500 Delaware Street',
       address2: 'Kansas City, Missiouri 64105',
       idKey: 24,
       coords: {
         latitude: 39.107869,
         longitude: -94.584321
       },
       show: false,
       visible: false
      },
      {
       title: 'Moksa Restaurant',
       address1: '450 Massachusetts Ave',
       address2: 'Cambridge, Massachusetts 02139',
       idKey: 25,
       coords: {
         latitude: 42.363443,
         longitude: -71.101268
       },
       show: false,
       visible: false
      },

    ];



  });
