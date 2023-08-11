import { EmpleadoI } from "./empleado";
import { ProveedorI } from "./proveedor";

export interface CompraMateriaPrimaI {
    id_compra_materia:number
    empleado:EmpleadoI;
    proveedor:ProveedorI;
}