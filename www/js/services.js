function EmpleadosService($http, $ionicLoading) {
    // Cargar N empleados
    var empleados = [],
        API = 'http://api.randomuser.me/?results=1000';

    function mostrarLoading() {
        $ionicLoading.show({
            template: '<ion-spinner icon="spiral">Cargando empleados</ion-spinner>'
        }).then(function () {
            console.log("The loading indicator is now displayed");
        });
    }

    function ocultarLoading() {
        $ionicLoading.hide().then(function () {
            console.log("The loading indicator is now hidden");
        });
    }

    function obtenerEmpleados() {

        mostrarLoading();

        return $http
            .get(API)
            .then(function (respuesta) {
                empleados = respuesta.data.results;
                return empleados;
            }, function (error) {
                console.error('Error ' + error);
            })
            .finally(function () {
                ocultarLoading();
            });

    }

    // Obtener información de un empleado
    // específico
    function obtenerDatosEmpleado(indice) {
        return empleados[indice];
    }

    return {
        obtenerEmpleados: obtenerEmpleados,
        obtenerDatosEmpleado: obtenerDatosEmpleado
    }
}

angular
    .module('empleados')
    .factory('EmpleadosService', EmpleadosService);