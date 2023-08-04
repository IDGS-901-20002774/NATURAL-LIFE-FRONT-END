import { RolI } from "./Rol";

export interface UsuarioI {
    id_usuario:number
    correo:string;
    contrasenia:string;
    rol:RolI;
  }