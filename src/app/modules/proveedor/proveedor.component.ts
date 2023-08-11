import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProveedorI } from 'src/app/interfaces/proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent {
  listaProveedores: any []=[];
  proveedorForm!: FormGroup;
  editarProveedorForm!: FormGroup;
  
 //*Construir el formulario reactivo 
 constructor( private router:Router,private api:ProveedorService,private readonly fb: FormBuilder) {
  this.proveedorForm = this.initForm() 
  this.editarProveedorForm = this.editProveedorForm()
 }

ngOnInit():void{
  this.api.mostarProveedores().subscribe(data =>{
    this.listaProveedores=data;
    console.log(this.listaProveedores)
    //this.router.navigate(['panel'])//interfaz de usuario
   })
}



 registroProveedor(): void {
  var proveedor={
    id_proveedor:0,
    nombre:this.proveedorForm.get('nombre')?.value,
    direccion:this.proveedorForm.get('direccion')?.value,
    telefono:this.proveedorForm.get('telefono')?.value,
    corrreo: this.proveedorForm.get('correo')?.value,
    estatus:1
  } 
  this.api.agregarProveedor(proveedor).subscribe(data =>{
     Swal.fire('Éxito', 'Proveedor Registrado', 'success');
     this.ngOnInit()
   },
   (error) => {
     console.error('Error:', error);
   }
 )
}


proveedorSeleccionado: any = {};

mostrarDetalleProveedor(proveedor: any) {
  // Al hacer clic en el botón, asigna el proveedor seleccionado a la variable
  this.proveedorSeleccionado = proveedor;

  this.editarProveedorForm.patchValue({
    id_proveedor: proveedor.id_proveedor,
    nombre: proveedor.nombre,
    telefono: proveedor.telefono,
    direccion: proveedor.direccion,
    correo: proveedor.corrreo,
  });

}


modificarProveedor(): void {
  var proveedor={
    id_proveedor:this.editarProveedorForm.get('id_proveedor')?.value,
    nombre:this.editarProveedorForm.get('nombre')?.value,
    direccion:this.editarProveedorForm.get('direccion')?.value,
    telefono:this.editarProveedorForm.get('telefono')?.value,
    corrreo: this.editarProveedorForm.get('correo')?.value,
    estatus:1
  } 
  
  this.api.actualizarProveedor(proveedor.id_proveedor, proveedor).subscribe(
    (data) => {
      // La solicitud se completó con éxito, muestra la alerta usando swal
      Swal.fire('Éxito', 'Proveedor editado', 'success');
      this.ngOnInit()
    },
    (error) => {
      console.error('Error:', error);
    }
  )
}

eliminarProveedor(id: number) {
  console.log(id)
  Swal.fire({
    title: '¿Está seguro de querer eliminar el proceso?',
    text: 'Esta acción eliminará el proceso. ¿Deseas continuar?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'No, cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      this.api.eliminarProveedor(id).subscribe(
        (data) => {
          // La solicitud se completó con éxito, muestra la alerta usando swal
          Swal.fire('¡Acción realizada con éxito!', '¡Se ha eliminado correctamente el registro del proceso!', 'success');
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




initForm(): FormGroup {
  return this.fb.group({
    nombre: ['', [Validators.required]],
    correo: ['',[Validators.required]],
    direccion: ['', [Validators.required]],
    telefono: ['', [Validators.required]],        
  })
}

editProveedorForm(): FormGroup {
  return this.fb.group({
    id_proveedor:[''],
    nombre: ['', [Validators.required]],
    correo:['',[Validators.required]],
    direccion: ['', [Validators.required]],
    telefono: ['', [Validators.required]],        
  })
}
}
