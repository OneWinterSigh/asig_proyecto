"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Asignatura_1 = require("./Asignatura");
var Subseccion_1 = require("./Subseccion");
var Curso_1 = require("./Curso");
var tipos_1 = require("./tipos");
//Creo el curso
var curso = new Curso_1.default();
var estructura = new Asignatura_1.default("Estructura de computadores");
//Añado asignatura
curso.añadir_asignatura(estructura);
var ec_parcial1 = new Subseccion_1.default("Parcial 1", 44, tipos_1.default.Examen);
var ec_parcial2 = new Subseccion_1.default("Parcial 2", 56, tipos_1.default.Examen);
//Añado parciales
estructura.añadir_subseccion(ec_parcial1);
estructura.añadir_subseccion(ec_parcial2);
//Añado nota
ec_parcial1.set_nota(4.5);
//Enseño resultados
console.log(estructura.get_subsecciones());
console.log(curso.get_asignaturas());
