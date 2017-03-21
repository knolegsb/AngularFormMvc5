employeeFormApp.controller('efController', function ($scope, $window, $routeParams, $modalInstance, dataService) {
    if ($routeParams.id)
        $scope.employee = dataService.getEmployee($routeParams.id);
    else
        $scope.employee = { id: 0 };

    //$scope.employee = dataService.employee;
    $scope.editableEmployee = angular.copy($scope.employee);

    $scope.departments = [
        "Engineering",
        "Marketing",
        "Finance",
        "Administration"
    ];

    $scope.submitForm = function () {
        if ($scope.editableEmployee.id == 0) {
            // insert new employee
            dataService.insertEmployee($scope.editableEmployee);
        }
        else {
            // update the employee
            dataService.updateEmployee($scope.editableEmployee);
        }

        $scope.employee = angular.copy($scope.editableEmployee);
        //$window.history.back();
        $modalInstance.close();
    };

    $scope.cancelForm = function () {
        //$window.history.back();
        $modalInstance.dismiss();
    };        
});