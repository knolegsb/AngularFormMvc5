employeeFormApp.controller('efController', function ($scope, employeeFormService) {
    $scope.employee = employeeFormService.employee;

    $scope.departments = [
        "Engineering",
        "Marketing",
        "Finance",
        "Administration"
    ];

    $scope.submitForm = function () {

    }
});