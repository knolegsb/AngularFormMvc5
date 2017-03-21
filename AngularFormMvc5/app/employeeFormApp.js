var employeeFormApp = angular.module('employeeFormApp', ['ngRoute', 'ui.bootstrap']);

employeeFormApp.config(function ($routeProvider) {
    $routeProvider
        .when("/apphome", {
            templateUrl: "app/home.html",
            controller: "homeController"
        })
        .when("/newEmployeeForm", {
            templateUrl: "app/EmployeeForm/employeeFormTemplate.html",
            controller: "efController"
        })
        .when("/updateEmployeeForm/:id", {
            templateUrl: "app/EmployeeForm/employeeFormTemplate.html",
            controller: "efController"
        })
        .otherwise({
            redirectTo: "/apphome"
        });
});

employeeFormApp.controller("homeController", function ($scope, $location, $modal, dataService) {
    //$scope.addNewEmployee = function () {
    $scope.showCreateEmployeeForm = function() {
        //$location.path('/newEmployeeForm');
        $modal.open({
            templateUrl: 'app/employeeForm/employeeFormTemplate.html',
            controller: 'efController'
        });
    };

    $scope.showUpdateEmployeeForm = function (id) {
        $location.path('/updateEmployeeForm/' + id)
    };
});
