var App = angular.module('drag-and-drop', ['ngDragDrop', 'ui.bootstrap']);
App.controller('oneCtrl', function($scope, $q) {
  $scope.list1 = {title: 'Drag nd Drop with default confirmation'};
  $scope.list2 = {};
  $scope.beforeDrop = function() {
    var deferred = $q.defer();
    if (confirm('Are you sure???')) {
      deferred.resolve();
    } else {
      deferred.reject();
    }
    return deferred.promise;
  };
  $scope.onDrag = function () {

  }
});
App.controller('twoCtrl', function($scope, $q, $modal) {
  $scope.list1 = {
      title: 'http://cdn.akc.org/akcdoglovers/GreatPyrenees_hero.jpg',
      dog_name: 'John Paul',
      dog_gender: 'Male'
      };
  $scope.list2 = {};
  $scope.onDrag = function () {

  }
  $scope.beforeDrop = function() {
    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl'
    });

    return modalInstance.result;
  };
}).controller('ModalInstanceCtrl', function ($scope, $modalInstance) {
  $scope.ok = function () {
    $modalInstance.close();
  };
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
