import { UsuarioI } from './usuario';

export interface EmpleadoI {
  id_empleado: number;
  nombre: string;
  apellido_p: string;
  apellido_m: string;
  direccion: string;
  telefono: string;
  estatus: number;
  usuario: UsuarioI;
}
