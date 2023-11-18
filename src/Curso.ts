import Asignatura from "./Asignatura";

export default class Curso{
    private asignaturas: Asignatura[];

    constructor(){
        this.asignaturas = [];
    }

    añadir_asignatura(asg: Asignatura){
        this.asignaturas.push(asg);
    }

    get_asignaturas(){
        return this.asignaturas;
    }
}