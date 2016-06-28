function EmpleadosController(EmpleadosService) {
    var vm = this;
    vm.empleados = [];
    EmpleadosService
        .obtenerEmpleados()
        .then(function(respuesta){
           vm.empleados = respuesta;
        });
}

function DetallesEmpleadoController($stateParams, EmpleadosService) {
    console.log($stateParams.indiceEmpleado);
    this.datosEmpleado = EmpleadosService.obtenerDatosEmpleado($stateParams.indiceEmpleado);

}

angular
    .module('empleados')
    .controller('EmpleadosController', EmpleadosController)
    .controller('DetallesEmpleadoController', DetallesEmpleadoController)