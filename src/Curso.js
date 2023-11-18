"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Curso = /** @class */ (function () {
    function Curso() {
        this.asignaturas = [];
    }
    Curso.prototype.añadir_asignatura = function (asg) {
        this.asignaturas.push(asg);
    };
    Curso.prototype.get_asignaturas = function () {
        return this.asignaturas;
    };
    return Curso;
}());
exports.default = Curso;
