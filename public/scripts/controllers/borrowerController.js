
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
        controller: 'BorrowerInfoUpdateCtrl'
      })
      .when('/employment-info/:id', { 
        templateUrl: 'templates/employment-info.html',
        controller: 'BorrowerEmploymentUpdateCtrl'
      })
      .when('/income-info/:id', {
        templateUrl: 'templates/income-info.html',
        controller: 'BorrowerIncomeUpdateCtrl'
      })
      .when('/expense-info/:id', {
        templateUrl: 'templates/expense-info.html',
        controller: 'BorrowerExpenseUpdateCtrl'
      })
      .when('/asset-info/:id', {
        templateUrl: 'templates/asset-info.html',
        controller: 'BorrowerAssetUpdateCtrl'
      })
      .when('/liability-info/:id', {
        templateUrl: 'templates/liability-info.html',
        controller: 'BorrowerLiabilityUpdateCtrl'
      })
      .when('/new-mortgage-info/:id', {
        templateUrl: 'templates/new-mortgage-info.html',
        controller: 'BorrowerNewMortgageUpdateCtrl'
      })
      .when('/qualifi/:id', {
        templateUrl: 'templates/qualify.html',
        controller: 'BorrowerQualifyCtrl'
      })
      .when('/no-qualifi/:id', {
        templateUrl: 'templates/no-qualify.html',
        controller: 'BorrowerNoQualifyCtrl'
      });
});

// BORROWER INFO CONTROLLERS //

angular.module('BorrowerInfo')
 .factory('BorrowerService', function($resource){
    return $resource('/api/borrower/:id', null,
        {
        'update': { method:'PUT' }
    });
});

// BUTTON CONTROLLER

angular.module('BorrowerInfo')
.controller('ButtonClickCtrl', function ($scope, BorrowerService, $routeParams) {
   $scope.redirect = function() {
      window.location.assign('/#/login');
   };
});

// angular.module('BorrowerInfo')
// .controller('BorrowerButtonClickCtrl', function ($scope, BorrowerService, $routeParams) {
//    $scope.redirectToBorrower = function() { 
//       if ($scope.borrower === undefined || null) {
//               window.location.assign('/#/log-in/');
//               } 
//               else {
//                 $scope.borrower = BorrowerService.get({id: $routeParams.id});
//                 window.location.assign('/#/borrower/' + $scope.borrower._id);  
//               }
//       // $scope.redirectToQualifi = function() {    
//       //     $scope.homePrice =  $scope.borrower.new_mortgage_info.home_price;
//       //     $scope.loanAmount = $scope.borrower.new_mortgage_info.loan_amount;
//       //     $scope.ltv = $scope.loanAmount/$scope.homePrice;
//       //     $scope.debt = $scope.borrower.liability_info.total_monthly_liability;
//       //     $scope.income = $scope.borrower.income_info.total_monthly_income;
//       //     $scope.dti = $scope.debt/$scope.income;
//       //     $scope.creditScore = $scope.borrower.new_mortgage_info.credit_score;
//       //     $scope.employmentLength = $scope.borrower.employment_info.years_on_job;
//       //     console.log($scope.employmentLength);
//       //         if ($scope.dti > 0.45 || $scope.ltv > 0.9 || $scope.creditScore < 640 || $scope.employmentLength < 2) {
//       //         window.location.assign('/#/no-qualifi/' + $scope.borrower._id);
//       //         } 
//       //         else {
//       //           window.location.assign('/#/qualifi/' + $scope.borrower._id);  
//       //         }
//       // };
// };
// });

// angular.module('BorrowerInfo')
// .controller('QualifyButtonClickCtrl', function ($scope, BorrowerService, $routeParams) {
//   $scope.borrower = BorrowerService.get({id: $routeParams.id});
//     console.log($scope.borrower);  
//       $scope.redirectToQualifi = function() {    
//       console.log("clicked");
//       window.location.assign('/#/qualifi' + borrower._id);
//    };
// });


// BORROWER PROFILE CONTROLLERS //

angular.module('BorrowerInfo')
.controller('BorrowerShowCtrl', function ($scope, BorrowerService, $routeParams) {
   $scope.borrower = BorrowerService.get({id: $routeParams.id});
      $scope.redirectToQualifi = function() {    
          $scope.homePrice =  $scope.borrower.new_mortgage_info.home_price;
          $scope.loanAmount = $scope.borrower.new_mortgage_info.loan_amount;
          $scope.ltv = $scope.loanAmount/$scope.homePrice;
          $scope.debt = $scope.borrower.liability_info.total_monthly_liability;
          $scope.income = $scope.borrower.income_info.total_monthly_income;
          $scope.dti = $scope.debt/$scope.income;
          $scope.creditScore = $scope.borrower.new_mortgage_info.credit_score;
          $scope.employmentLength = $scope.borrower.employment_info.years_on_job;
          console.log($scope.employmentLength);
              if ($scope.dti > 0.45 || $scope.ltv > 0.9 || $scope.creditScore < 640 || $scope.employmentLength < 2) {
              window.location.assign('/#/no-qualifi/' + $scope.borrower._id);
              } 
              else {
                window.location.assign('/#/qualifi/' + $scope.borrower._id);  
              }
      };
      // $scope.delete = function() {
      //   BorrowerService.delete({id: $routeParams.id});
      //   console.log({id: $routeParams.id});
      //   window.location.assign('/');
      //   };
      /* card flip */
      $(".flip").hover(function(){
        $(this).find(".card").toggleClass("flipped");
        return false;
      });
});

angular.module('BorrowerInfo')
.controller('BorrowerNoQualifyCtrl', function ($scope, BorrowerService, $routeParams) {
  $scope.borrower = BorrowerService.get({id: $routeParams.id});
   console.log($scope.borrower);
 });

angular.module('BorrowerInfo')
.controller('BorrowerQualifyCtrl', function ($scope, BorrowerService, $routeParams) {
  $scope.borrower = BorrowerService.get({id: $routeParams.id});
   console.log($scope.borrower);
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
  $scope.borrower = BorrowerService.get({id: $routeParams.id});
   console.log($scope.borrower);
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
    $scope.calcTotalIncome = function() {
        var baseIncome =  $scope.newBorrower.income_info.base_income;
        var overtimeIncome = $scope.newBorrower.income_info.overtime_income;
        var bonusIncome = $scope.newBorrower.income_info.bonus_income;
        var commissionIncome = $scope.newBorrower.income_info.commision_income;
        var dividendInterestIncome = $scope.newBorrower.income_info.dividend_interest_income;
        var netRentalIncome = $scope.newBorrower.income_info.net_rental_income;
        var otherIncome = $scope.newBorrower.income_info.other_income;
        $scope.newBorrower.income_info.total_monthly_income = -((-baseIncome)+(-overtimeIncome)+(-bonusIncome)+(-commissionIncome)+(-dividendInterestIncome)+(-netRentalIncome)+(-otherIncome));
    };
});   

angular.module('BorrowerInfo')
.controller('BorrowerExpenseUpdateCtrl', function ($scope, BorrowerService, $routeParams) {
   $scope.update = function() {
      BorrowerService.update({id: $routeParams.id}, {expense_info: $scope.newBorrower.expense_info});
      window.location.assign('/#/asset-info/' + $routeParams.id);
    };
   $scope.calcTotalExpense = function() {
        var rentExpense = $scope.newBorrower.expense_info.rent_expense;
        var mortgagePI = $scope.newBorrower.expense_info.mortgage_pi;
        var otherMortgagePI = $scope.newBorrower.expense_info.other_mortgage_pi;
        var hazardInsurance = $scope.newBorrower.expense_info.hazard_insurance;
        var realEstateTaxes = $scope.newBorrower.expense_info.real_estate_taxes;
        var mortgageInsurance = $scope.newBorrower.expense_info.mortgage_insurance;
        var hoaDues = $scope.newBorrower.expense_info.hoa_dues;
        var otherExpenses = $scope.newBorrower.expense_info.other;
        $scope.newBorrower.expense_info.total_monthly_expense = -((-rentExpense)+(-mortgagePI)+(-otherMortgagePI)+(-hazardInsurance)+(-realEstateTaxes)+(-mortgageInsurance)+(-hoaDues)+(-otherExpenses));
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
    window.location.assign('/#/new-mortgage-info/' + $routeParams.id);
   };
   $scope.calcTotalLiabilities = function() {
        var monthlyPayment1 =  $scope.newBorrower.liability_info.monthly_payment1;
        var monthlyPayment2 =  $scope.newBorrower.liability_info.monthly_payment2;
        var monthlyPayment3 =  $scope.newBorrower.liability_info.monthly_payment3;
        var monthlyPayment4 =  $scope.newBorrower.liability_info.monthly_payment4;
        var monthlyPayment5 =  $scope.newBorrower.liability_info.monthly_payment5;
        var alimonyChildSupport = $scope.newBorrower.liability_info.alimony_child_support;
        $scope.newBorrower.liability_info.total_monthly_liability = -((-monthlyPayment1)+(-monthlyPayment2)+(-monthlyPayment3)+(-monthlyPayment4)+(-monthlyPayment5)+(-alimonyChildSupport));
    };
 });
angular.module('BorrowerInfo')
.controller('BorrowerNewMortgageUpdateCtrl', function ($scope, BorrowerService, $routeParams) {
  $scope.update = function() {
    BorrowerService.update({id: $routeParams.id}, {new_mortgage_info: $scope.newBorrower.new_mortgage_info});
    window.location.assign('/#/borrower/' + $routeParams.id);
   };
  $scope.calcMortgageAmount = function() {
    var homePrice = $scope.newBorrower.new_mortgage_info.home_price;
    var rate = $scope.newBorrower.new_mortgage_info.interest_rate/100;
    var term = $scope.newBorrower.new_mortgage_info.term;
    var loanAmount = homePrice * 0.8;
    var pi = $scope.newBorrower.new_mortgage_info.monthly_pi = ((rate/12)*(loanAmount) /( 1-Math.pow( (1+(rate/12)), (-term*12) ) )).toFixed(2);
    var ti = $scope.newBorrower.new_mortgage_info.monthly_ti = ((homePrice * 0.0125) / 12).toFixed(2);
    var hoa = $scope.newBorrower.new_mortgage_info.monthly_hoa;
      $scope.newBorrower.new_mortgage_info.loan_amount = loanAmount;
      $scope.newBorrower.new_mortgage_info.monthly_pi = pi;
      $scope.newBorrower.new_mortgage_info.monthly_ti = ti;
      $scope.newBorrower.new_mortgage_info.total_monhthly_payment = -((-pi)+(-ti)+(-hoa));
    }; 
 });

// fix total monthyl payment spelling //





