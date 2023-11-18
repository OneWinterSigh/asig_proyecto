import Asignatura from "./Asignatura";
import Subseccion from "./Subseccion";
import Curso from "./Curso";
import T from "./tipos";

//Creo el curso
const curso = new Curso();

let estructura = new Asignatura("Estructura de computadores");
//Añado asignatura
curso.añadir_asignatura(estructura);

let ec_parcial1 = new Subseccion("Parcial 1", 44, T.Examen);
let ec_parcial2 = new Subseccion("Parcial 2", 56, T.Examen);

//Añado parciales
estructura.añadir_subseccion(ec_parcial1);
estructura.añadir_subseccion(ec_parcial2);

//Añado nota
ec_parcial1.set_nota(4.5);

//Enseño resultados
console.log(estructura.get_subsecciones());
console.log(curso.get_asignaturas());

