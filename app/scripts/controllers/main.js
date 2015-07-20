'use strict';

/**
 * @ngdoc function
 * @name clickthroughApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clickthroughApp
 */
angular.module('clickthroughApp')
  .controller('MainCtrl', ['$scope', '$http',function($scope, $http) {

    $http.get('testData/hcm.json').then(
      function(response) {
        console.log(response.data);

        $scope.sections = response.data;
      }
    );


  }]);
