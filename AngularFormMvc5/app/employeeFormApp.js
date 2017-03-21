var employeeFormApp = angular.module('employeeFormApp', ['ngRoute']);

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

employeeFormApp.controller("homeController", function ($scope, $location, dataService) {
    $scope.addNewEmployee = function () {
        $location.path('/newEmployeeForm');
    };

    $scope.showUpdateEmployeForm = function (id) {
        $location.path('/updateEmployeeForm/' + id)
    };
});
