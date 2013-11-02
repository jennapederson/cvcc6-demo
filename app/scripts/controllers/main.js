'use strict';

angular.module('cvcc6App')
  .controller('MainCtrl', function ($scope, localStorageService) {
    $scope.speakers = [];

    /*
    var speakersInStore = localStorageService.get('speakers');
    $scope.speakers = speakersInStore && speakersInStore.split('\n') || [];
    $scope.$watch(function(){
        localStorageService.add('speakers', $scope.speakers.join('\n'));
    });
    */

    $scope.addSpeaker = function(){
        $scope.speakers.push($scope.speaker);
        $scope.speaker = '';
    };

    $scope.removeSpeaker = function(index){
        $scope.speakers.splice(index, 1);
    };
  });
