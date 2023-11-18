"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Asignatura_1 = require("./Asignatura");
var Subseccion = /** @class */ (function (_super) {
    __extends(Subseccion, _super);
    function Subseccion(nombre, porcentaje, tipo) {
        var _this = _super.call(this, nombre) || this;
        _this.porcentaje = porcentaje;
        _this.tipo = tipo;
        return _this;
    }
    Subseccion.prototype.get_porcentaje = function () {
        return this.porcentaje;
    };
    Subseccion.prototype.get_tipo = function () {
        return this.tipo;
    };
    Subseccion.prototype.get_nota = function () {
        return this.nota;
    };
    Subseccion.prototype.set_nota = function (n) {
        this.nota = n;
    };
    return Subseccion;
}(Asignatura_1.default));
exports.default = Subseccion;
