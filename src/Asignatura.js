"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Asignatura = /** @class */ (function () {
    function Asignatura(nombre) {
        this.nombre = nombre;
        this.subsecciones = [];
    }
    Asignatura.prototype.get_nombre = function () {
        return this.nombre;
    };
    Asignatura.prototype.get_subsecciones = function () {
        return this.subsecciones;
    };
    Asignatura.prototype.añadir_subseccion = function (sub) {
        this.subsecciones.push(sub);
        var suma;
        suma = 0;
        for (var _i = 0, _a = this.subsecciones; _i < _a.length; _i++) {
            var i = _a[_i];
            suma = suma + i.get_porcentaje();
            if (suma > 101) {
                this.subsecciones.pop();
                throw new Error("La suma de los porcentajes no puede ser mayor a 100\n Porcentaje actual: " + suma);
            }
        }
    };
    return Asignatura;
}());
exports.default = Asignatura;
