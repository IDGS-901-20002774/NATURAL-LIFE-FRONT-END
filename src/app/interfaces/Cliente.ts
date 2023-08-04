import { UsuarioI } from "./Usuario";

export interface ClienteI {
    id_cliente:number
    nombre:string;
    apellido_p:string;
    apellido_m:string;
    direccion:string;
    telefono:string;
    estatus:number;
    usuario:UsuarioI;
  }