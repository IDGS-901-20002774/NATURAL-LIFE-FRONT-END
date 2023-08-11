import { RolI } from './rol';

export interface UsuarioI {
  id_usuario: number;
  correo: string;
  contrasenia: string;
  rol: RolI;
}
