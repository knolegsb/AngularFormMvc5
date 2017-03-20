employeeFormApp.factory('employeeFormService',
    function () {
        return {
            employee: {
                fullName: "Milton Walgreen",
                notes: "The ideal employee. Just don't touch his red stapler.",
                department: "Administrator",
                perkCar: true,
                perkStock: false,
                perkSixWeeks: true,
                payrollType: "none"
            }
        }
    });