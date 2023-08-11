import { DecimalPipe } from "@angular/common";
import { CompraMateriaPrimaI } from "./compra-materia-prima";
import { MateriaPrimaI } from "./materia-prima";

export interface DetalleCompraMateriaPrimaI {
    id_detalle_compra:number
    compra_materia:CompraMateriaPrimaI;
    materia:MateriaPrimaI;
    cantidad:number;
    costo_compra:DecimalPipe;
}