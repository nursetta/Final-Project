angular.module('BorrowerInfo')
.config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html'
      })
      .when('/borrower/:id', { 
			  templateUrl: 'templates/borrowerShow.html',
			  controller: 'BorrowerShowCtrl'
		  })
      .when('/borrower-info', {
        templateUrl: 'templates/borrower-info.html',
        contoller: 'BorrowerCreateCtrl'
      })
      .when('/employment-info/:id', { 
        templateUrl: 'templates/employment-info.html',
        controller: 'BorrowerEmploymentUpdateCtrl'
      })
      .when('/income-info/:id', {
        templateUrl: 'templates/income-info.html',
        contoller: 'BorrowerIncomeUpdateCtrl'
      })
      .when('/expense-info/:id', {
        templateUrl: 'templates/expense-info.html',
        contoller: 'BorrowerExpenseUpdateCtrl'
      })
      .when('/asset-info/:id', {
        templateUrl: 'templates/asset-info.html',
        contoller: 'BorrowerAssetUpdateCtrl'
      })
      .when('/liability-info/:id', {
        templateUrl: 'templates/liability-info.html',
        contoller: 'BorrowerLiabilityUpdateCtrl'
      });
});

angular.module('BorrowerInfo')
 .factory('BorrowerService', function($resource){
    return $resource('/api/borrower/:id', null,
        {
        'update': { method:'PUT' }
    });
});

// angular.module('BorrowerInfo')
//   .controller('BorrowerIndexCtrl', function($scope, BorrowerService){
//     $scope.borrower= BorrowerService.query();
//     console.log($scope.borrower);
// });

angular.module('BorrowerInfo')
.controller('BorrowerShowCtrl', function ($scope, BorrowerService, $routeParams) {
   $scope.borrower = BorrowerService.get({id: $routeParams.id});
   console.log($scope.borrower);

        // $scope.delete = function() {
        //   TodoService.delete({id: $routeParams.id});
        //   console.log({id: $routeParams.id});
        //   window.location.assign('/');
        // };
});

angular.module('BorrowerInfo')
.controller('BorrowerCreateCtrl', function($scope, BorrowerService) {
      $scope.submit = {};
      $scope.submit = function() {
        console.log($scope.newBorrower);
        BorrowerService.save($scope.newBorrower);
        window.location.assign('/api/borrower');
        };
});

angular.module('BorrowerInfo')
.controller('BorrowerEmploymentUpdateCtrl', function ($scope, BorrowerService, $routeParams) {
  $scope.update = function() {
    BorrowerService.update({id: $routeParams.id}, {employment_info: $scope.newBorrower.employment_info});
    window.location.assign('/api/borrower');
   };
 });

angular.module('BorrowerInfo')
.controller('BorrowerIncomeUpdateCtrl', function ($scope, BorrowerService, $routeParams) {
  $scope.update = function() {
    BorrowerService.update({id: $routeParams.id}, {income_info: $scope.newBorrower.income_info});
    window.location.assign('/api/borrower');
   };
 });
angular.module('BorrowerInfo')
.controller('BorrowerExpenseUpdateCtrl', function ($scope, BorrowerService, $routeParams) {
  $scope.update = function() {
    BorrowerService.update({id: $routeParams.id}, {expense_info: $scope.newBorrower.expense_info});
    window.location.assign('/api/borrower');
   };
 });
angular.module('BorrowerInfo')
.controller('BorrowerAssetUpdateCtrl', function ($scope, BorrowerService, $routeParams) {
  $scope.update = function() {
    BorrowerService.update({id: $routeParams.id}, {asset_info: $scope.newBorrower.asset_info});
    window.location.assign('/api/borrower');
   };
 });
angular.module('BorrowerInfo')
.controller('BorrowerLiabilityUpdateCtrl', function ($scope, BorrowerService, $routeParams) {
  $scope.update = function() {
    BorrowerService.update({id: $routeParams.id}, {liability_info: $scope.newBorrower.liability_info});
    window.location.assign('/api/borrower');
   };
 });










