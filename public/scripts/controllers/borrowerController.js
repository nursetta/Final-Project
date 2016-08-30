
angular.module('BorrowerInfo')
.config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'ButtonClickCtrl'
      })
      .when('/signup', {
        templateUrl: 'templates/signup.html',
        controller: 'SignUpCtrl'
      })
      .when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LogInCtrl'
      })
      .when('/borrower/:id', { 
			  templateUrl: 'templates/borrowerShow.html',
			  controller: 'BorrowerShowCtrl'
		  })
      .when('/borrower-info/:id', {
        templateUrl: 'templates/borrower-info.html',
        contoller: 'BorrowerInfoUpdateCtrl'
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

// BORROWER INFO CONTROLERS //

angular.module('BorrowerInfo')
 .factory('BorrowerService', function($resource){
    return $resource('/api/borrower/:id', null,
        {
        'update': { method:'PUT' }
    });
});

angular.module('BorrowerInfo')
.controller('ButtonClickCtrl', function ($scope, BorrowerService, $routeParams) {
   $scope.redirect = function() {
      window.location.assign('/#/borrower-info');
   };
});   


// BORROWER PROFILE CONTROLERS //

angular.module('BorrowerInfo')
.controller('BorrowerShowCtrl', function ($scope, BorrowerService, $routeParams) {
   $scope.borrower = BorrowerService.get({id: $routeParams.id});
   console.log($scope.borrower);

        $scope.delete = function() {
          BorrowerService.delete({id: $routeParams.id});
          console.log({id: $routeParams.id});
          window.location.assign('/');
        };
});

// SIGNUP CONTOLLER //

angular.module('BorrowerInfo')
.controller('SignUpCtrl', function($scope, BorrowerService, $routeParams) {
      $scope.submit = {};
      $scope.submit = function() {
        
        console.log($scope.newBorrower);
        BorrowerService.save($scope.newBorrower, function(borrower, headers) {
          if (borrower.message) {
            console.log(borrower.message);
          } 
          else {
            window.location.assign('/#/borrower-info/' + borrower._id);
        }
        });
    };
});

// LOG-IN CONTROLLER //

angular.module('BorrowerInfo')
.controller('LogInCtrl', function($scope, BorrowerService, $routeParams, $http) {
  $scope.login = function() {
    console.log('in the login function');
    console.dir($scope.newBorrower);
    $http.post('/login',$scope.newBorrower)
      .then(function(response) {
        $scope.errorMessage = response.data.message;
        console.dir(response);
        console.log(response.data.message);
        window.location.assign(response.data.url);
      });
    };
});



// BORROWER CREATE CONTROLLER //

// angular.module('BorrowerInfo')
// .controller('BorrowerCreateCtrl', function($scope, BorrowerService, $routeParams) {
//       $scope.submit = {};
//       $scope.submit = function() {
//         console.log($scope.newBorrower);
//         BorrowerService.save($scope.newBorrower, function(borrower, headers) {
//             console.log(borrower);
//             window.location.assign('/#/employment-info/' + borrower._id);
//         });
//     };
// });

// BORROWER UPDATE CONTROLLERS //

angular.module('BorrowerInfo')
.controller('BorrowerInfoUpdateCtrl', function ($scope, BorrowerService, $routeParams) {
  $scope.update = function() {
    BorrowerService.update({id: $routeParams.id}, {borrower_info: $scope.newBorrower.borrower_info});
    window.location.assign('/#/employment-info/' + $routeParams.id);
   };
 });

angular.module('BorrowerInfo')
.controller('BorrowerEmploymentUpdateCtrl', function ($scope, BorrowerService, $routeParams) {
  $scope.update = function() {
    BorrowerService.update({id: $routeParams.id}, {employment_info: $scope.newBorrower.employment_info});
    window.location.assign('/#/income-info/' + $routeParams.id);
   };
 });

angular.module('BorrowerInfo')
.controller('BorrowerIncomeUpdateCtrl', function ($scope, BorrowerService, $routeParams) {
  $scope.update = function() {
    BorrowerService.update({id: $routeParams.id}, {income_info: $scope.newBorrower.income_info});
    window.location.assign('/#/expense-info/' + $routeParams.id);
   };
 });
angular.module('BorrowerInfo')
.controller('BorrowerExpenseUpdateCtrl', function ($scope, BorrowerService, $routeParams) {
  $scope.update = function() {
    BorrowerService.update({id: $routeParams.id}, {expense_info: $scope.newBorrower.expense_info});
    window.location.assign('/#/asset-info/' + $routeParams.id);
   };
 });
angular.module('BorrowerInfo')
.controller('BorrowerAssetUpdateCtrl', function ($scope, BorrowerService, $routeParams) {
  $scope.update = function() {
    BorrowerService.update({id: $routeParams.id}, {asset_info: $scope.newBorrower.asset_info});
    window.location.assign('/#/liability-info/' + $routeParams.id);
   };
 });
angular.module('BorrowerInfo')
.controller('BorrowerLiabilityUpdateCtrl', function ($scope, BorrowerService, $routeParams) {
  $scope.update = function() {
    BorrowerService.update({id: $routeParams.id}, {liability_info: $scope.newBorrower.liability_info});
    window.location.assign('/#/borrower/' + $routeParams.id);
   };
 });







