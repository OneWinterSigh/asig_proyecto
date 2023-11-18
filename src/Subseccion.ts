import T from "./tipos";
import Asignatura from "./Asignatura";

export default class Subseccion extends Asignatura{

    private tipo: T;
    private porcentaje: number;
    private nota?: number;

    constructor(nombre: string, porcentaje: number, tipo: T){
        super(nombre);
        this.porcentaje = porcentaje;    
        this.tipo = tipo; 
    }

    get_porcentaje(){
        return this.porcentaje;
    }

    get_tipo(){
        return this.tipo;
    }

    get_nota(){
        return this.nota;
    }

    set_nota(n: number){
        this.nota = n;
    }
}