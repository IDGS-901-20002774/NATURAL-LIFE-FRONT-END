import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProcesoI } from 'src/app/interfaces/proceso';
import { ProcesoService } from 'src/app/services/proceso.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proceso',
  templateUrl: './proceso.component.html',
  styleUrls: ['./proceso.component.css'],
})
export class ProcesoComponent {
  //procesoForm!: FormGroup;
  listaProcesos: ProcesoI[] = [];
  procesoForm!: FormGroup;
  gifWarning = '<img src="./assets/img/alerta2.gif" height="100">';
  gifWarning2 = '<img src="./assets/img/warning-2.gif" height="120">';
  gifSuccess = '<img src="./assets/img/success.gif" height="100">';

  constructor(
    private router: Router,
    private api: ProcesoService,
    private fb: FormBuilder
  ) {
    this.procesoForm = this.fb.group({
      nombreProceso: ['', [Validators.required]], // Campo del nombre del proceso
      items: this.fb.array([]),
    });
  }

  get items() {
    return this.procesoForm.get('items') as FormArray;
  }

  addItem() {
    const newItem = this.fb.group({
      nombreIngrediente: [''],
      cantidad: [''],
      unidadMedida: [''],
    });
    this.items.push(newItem);
  }

  quitarIngrediente(index: number) {
    this.items.removeAt(index);
  }

  registrarProceso(): void {
    const itemsArray = this.procesoForm.get('items') as FormArray;
    let nombreIngredientes = '';
    let cantidades = '';
    let unidadMedida = '';
    let camposIncompletos = false;
  
    for (let i = 0; i < itemsArray.length; i++) {
      const itemGroup = itemsArray.at(i) as FormGroup;
      const itemValue = itemGroup.value;
  
      if (!itemValue.nombreIngrediente || !itemValue.cantidad || !itemValue.unidadMedida) {
        camposIncompletos = true;
        break; // Detener el bucle si se encuentra un campo incompleto
      }
  
      nombreIngredientes += itemValue.nombreIngrediente + ', ';
      cantidades += itemValue.cantidad + ', ';
      unidadMedida += itemValue.unidadMedida + ', ';
    }
  
    if (camposIncompletos) {
      Swal.fire({
        title: '¡No se realizó el registro del proceso!',
        text: '¡Por favor completa todos los campos necesarios!',
        iconHtml: this.gifWarning,
        showClass: {
          popup: 'animate__animated animate__tada',
          icon: 'animate__animated animate__heartBeat'
        },
        customClass: {
          icon: 'icon-alert'
        },
        confirmButtonText: 'Entendido',
      });
      itemsArray.clear(); 
      return; // Detener el proceso de registro si hay campos incompletos
    }
  
    // Resto de tu código de registro si todos los campos están completos
    if (this.procesoForm.get('nombreProceso')?.value) {
      var proceso = {
        id: 0,
        nombreProceso: this.procesoForm.get('nombreProceso')?.value,
        ingredientes: nombreIngredientes,
        cantidades: cantidades,
        unidadesMedida: unidadMedida,
      };
  
      this.api.agregarProceso(proceso).subscribe(
        (data) => {
          Swal.fire({
            title: '¡Acción realizada con éxito!',
            text: '¡Se ha guardado correctamente el registro del proceso!',
            iconHtml: this.gifSuccess,
            showClass: {
              popup: 'animate__animated animate__pulse'
            },
            customClass: {
              icon: 'icon-alert'
            },
            confirmButtonText: 'Entendido',
          });
          this.procesoForm.reset();
          itemsArray.clear(); 
          this.ngOnInit();
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    } else {
      Swal.fire({
        title: '¡No se realizó el registro del proceso!',
        text: '¡Por favor completa todos los campos necesarios!',
        iconHtml: this.gifWarning,
        showClass: {
          popup: 'animate__animated animate__tada',
          icon: 'animate__animated animate__heartBeat'
        },
        customClass: {
          icon: 'icon-alert'
        },
        confirmButtonText: 'Entendido',
      });
      this.procesoForm.reset();
      itemsArray.clear(); 
    }
  }
  

  eliminarProceso(id: Number) {
    console.log(id)
    Swal.fire({
      title: '¿Está seguro de querer eliminar el proceso?',
      text: 'Esta acción eliminará el proceso. ¿Deseas continuar?',
      iconHtml: this.gifWarning2,
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, cancelar',
      showClass: {
        popup: 'animate__animated animate__tada',
        icon: 'animate__animated animate__heartBeat'
      },
      customClass: {
        icon: 'icon-alert'
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.api.eliminarProceso(id).subscribe(
          (data) => {
            Swal.fire({
              title: '¡Acción realizada con éxito!',
              text: '¡Se ha eliminado correctamente el registro del proceso!',
              iconHtml: this.gifSuccess,
              showClass: {
                popup: 'animate__animated animate__pulse'
              },
              customClass: {
                icon: 'icon-alert'
              },
              confirmButtonText: 'Entendido',
            });
            this.ngOnInit()
          },
          (error) => {
            console.error('Error:', error);
          }
        )
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    });
  }

  ngOnInit(): void {
    this.api.mostrarProcesosActivos().subscribe((data: ProcesoI[]) => {
      this.listaProcesos = data;
      console.log(this.listaProcesos);
      // this.router.navigate(['panel']); // Interfaz de usuario
    });
  }
}
