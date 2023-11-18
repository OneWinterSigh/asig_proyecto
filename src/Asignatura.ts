import Subseccion from "./Subseccion";

export default class Asignatura{

    private nombre: String;
    private subsecciones: Subseccion[];

    constructor(nombre: string,){
        this.nombre = nombre;
        this.subsecciones = [];
    }

    get_nombre(){
        return this.nombre;
    }

    get_subsecciones(){
        return this.subsecciones;
    }

    añadir_subseccion(sub: Subseccion){
        this.subsecciones.push(sub);

        let suma: number;
        suma = 0;

        for(let i of this.subsecciones){
            suma = suma + i.get_porcentaje();
            if (suma > 101){
                this.subsecciones.pop();
                throw new Error("La suma de los porcentajes no puede ser mayor a 100\n Porcentaje actual: " + suma);
            }
        }   
    }
    
}