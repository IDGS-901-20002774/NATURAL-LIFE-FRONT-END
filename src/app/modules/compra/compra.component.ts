import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompraMateriaPrimaService } from 'src/app/services/compra-materia-prima.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent {
  compraForm!: FormGroup;
  total !: number;
  listaCampos: any[] = [];
  listaProveedores: any[] = [];
  listaMateriaPrima: any[] = [];
  //*Construir el formulario reactivo 
  constructor(private router: Router, private api: CompraMateriaPrimaService, private readonly fb: FormBuilder) {
    this.compraForm = this.initForm();
  }

  ngOnInit(): void {
    this.api.mostarProveedores().subscribe(data => {
      this.listaProveedores = data;
      this.mostarMateria();
    })
  }

  mostarMateria() {
    this.api.mostarMateriaPrimas().subscribe(data => {
      this.listaMateriaPrima = data;
      //this.router.navigate(['panel'])//interfaz de usuario
    })
  }
  /* 
    calculo(){
      if(this.listaCampos.length<=0){
        this.total =this.compraForm.get('costo_compra')?.value
      }else{
        for (const materiaPrima of this.listaCampos) {
          this.total += Number(materiaPrima.costo);
        }
      }
    }
   */
  agregarCampos() {
      this.listaCampos.push({ id: this.compraForm.get('id_materia_prima')?.value, cant: this.compraForm.get('cantidad')?.value, cost: this.compraForm.get('costo_compra')?.value });
  }

  mostrarDatos(){
    console.log(this.listaCampos);
  }

  async registrarCompra(): Promise<void> {
    try {
      var compra = {
        id_compra_materia: 0,
        empleado: {
          id_empleado: 3,
          nombre: "string",
          apellido_p: "string",
          apellido_m: "string",
          telefono: "string",
          direccion: "string",
          estatus: 1,
          usuario: {
            id_usuario: 3,
            correo: "string",
            contrasenia: "string",
            fecha: new Date(),
            rol: {
              id_rol: 1,
              tipo: "string",
              descripcion: "string"
            }
          }
        },
        proveedor: {
          id_proveedor: this.compraForm.get('id_proveedor')?.value,
          nombre: "string",
          telefono: "string",
          direccion: "string",
          corrreo: "string",
          estatus: 1
        },
        fecha: new Date(),
      }
  
     const response = await this.api.agregarCompra(compra).toPromise();
      if (response?.status === "OK") {
         // La compra se ha registrado correctamente, ahora llamamos a detalleCompra()
        this.detalleCompra();
        Swal.fire('Éxito', 'Materia prima registrada', 'success');
     
      } else {
        throw new Error('Error al registrar la compra');
      }
    } catch (error) {
      console.error('Error:', error);
      this.detalleCompra();
    }
  }
  
  detalleCompra(){
    if(this.listaCampos.length==1){
      var detalle = {
        id_detalle_compra: 0,
        compra_materia: {
          id_compra_materia: 0,
          empleado: {
            id_empleado: 0,
            nombre: "string",
            apellido_p: "string",
            apellido_m: "string",
            telefono: "string",
            direccion: "string",
            estatus: 0,
            usuario: {
              id_usuario: 0,
              correo: "string",
              contrasenia: "string",
              fecha: new Date(),
              rol: {
                id_rol: 0,
                tipo: "string",
                descripcion: "string"
              }
            }
          },
          proveedor: {
            id_proveedor: 0,
            nombre: "string",
            telefono: "string",
            direccion: "string",
            corrreo: "string",
            estatus: 0
          },
          fecha: new Date()
        },
        materia: {
          id_materia_prima: this.compraForm.get('id_materia_prima')?.value,
          nombre: "string",
          descripcion: "string",
          cantidad: 0,
          unidad_medida: "string",
          estatus: 0
        },
        cantidad: this.compraForm.get('cantidad')?.value,
        costo_compra:  this.compraForm.get('costo_compra')?.value
      }
      try {
       this.api.agregarDetalleCompra(detalle).subscribe((data) => {
        // La solicitud se completó con éxito, muestra la alerta usando swal
        Swal.fire('Éxito', 'Compra Realizada', 'success');
      },
      (error) => {
        console.error('Error:', error);
      });
        // Puedes agregar alguna lógica adicional si es necesario
      } catch (error) {
        console.error('Error al agregar el detalle de compra:', error);
        throw new Error('Error al agregar el detalle de compra');
      }

    }else{

      for (const materia of this.listaCampos.splice(0)) {
      
        var detalle = {
          id_detalle_compra: 0,
          compra_materia: {
            id_compra_materia: 0,
            empleado: {
              id_empleado: 0,
              nombre: "string",
              apellido_p: "string",
              apellido_m: "string",
              telefono: "string",
              direccion: "string",
              estatus: 0,
              usuario: {
                id_usuario: 0,
                correo: "string",
                contrasenia: "string",
                fecha: new Date(),
                rol: {
                  id_rol: 0,
                  tipo: "string",
                  descripcion: "string"
                }
              }
            },
            proveedor: {
              id_proveedor: 0,
              nombre: "string",
              telefono: "string",
              direccion: "string",
              corrreo: "string",
              estatus: 0
            },
            fecha: new Date()
          },
          materia: {
            id_materia_prima: materia.id,
            nombre: "string",
            descripcion: "string",
            cantidad: 0,
            unidad_medida: "string",
            estatus: 0
          },
          cantidad: materia.cant,
          costo_compra: materia.cost
        }
        try {
         this.api.agregarDetalleCompra(detalle).subscribe((data) => {
          // La solicitud se completó con éxito, muestra la alerta usando swal
          Swal.fire('Éxito', 'Compra Realizada', 'success');
        },
        (error) => {
          console.error('Error:', error);
        });
          // Puedes agregar alguna lógica adicional si es necesario
        } catch (error) {
          console.error('Error al agregar el detalle de compra:', error);
          throw new Error('Error al agregar el detalle de compra');
        }
      }

    }
    
  }
  





/*   registrarCompra() {
   
    this.api.agregarCompra(compra).subscribe(data => {
      let respuesta: resposeI = data;
      if (respuesta.status == "ok") {
       swal 
        
      }
    },
      (error) => {
        console.error('Error:', error);
      });
  
  }
 *//* 
  detalleCompra(){
    for (const materia of this.listaCampos) {
      

      console.log(detalle)
      this.api.agregarDetalleCompra(detalle).subscribe(data => {
        console.log(detalle)
        swal.fire('Éxito', 'Materia prima registrada', 'success');
      })
    }
  } */







  initForm(): FormGroup {
    return this.fb.group({
      id_proveedor: ['', [Validators.required]],
      id_materia_prima: ['', [Validators.required]],
      cantidad: ['', [Validators.required]],
      costo_compra: ['', [Validators.required]],
    })
  }
}
