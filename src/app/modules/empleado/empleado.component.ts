import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  empleadoForm!: FormGroup;
  editarForm!: FormGroup;
  
  //mostrarModal: boolean = true;

  listaEmpleados: any []=[];
   //*Construir el formulario reactivo 
  constructor( private router:Router,private api:EmpleadoService,private readonly fb: FormBuilder) {
    this.empleadoForm = this.initForm()
    this.editarForm = this.updateForm()
  }

  ngOnInit():void{
    this.api.mostarEmpleados().subscribe(data =>{
      this.listaEmpleados=data;
      //this.router.navigate(['panel'])//interfaz de usuario
     })
  }
  

  
 registroEmpleado(): void {
 
  var empleado={
    id_empleado:0,
    nombre:this.empleadoForm.get('nombre')?.value,
    apellido_p:this.empleadoForm.get('apellidoP')?.value,
    apellido_m:this.empleadoForm.get('apellidoM')?.value,
    direccion:this.empleadoForm.get('direccion')?.value,
    telefono:this.empleadoForm.get('telefono')?.value,
    usuario:{
      id_usuario:0,
      correo:this.empleadoForm.get('correo')?.value,
      contrasenia:this.empleadoForm.get('contrasenia')?.value,
      rol:{
        id_rol: 3,
        tipo:"",
        descripcion:"",
      }
    },
    estatus:1
  }
  this.api.agregarEmpleado(empleado).subscribe(data =>{
       // La solicitud se completó con éxito, muestra la alerta usando swal
      Swal.fire('Éxito', 'Empleado Registrado', 'success');
      //this.mostrarModal = false;
      this.ngOnInit()
      
    },
    (error) => {
      console.error('Error:', error);
    }
  )
}
empleadoSeleccionado: any = {};

mostrarDetalleEmpleado(empleado: any) {
  // Al hacer clic en el botón, asigna el empleado seleccionado a la variable
  this.empleadoSeleccionado = empleado;
  this.editarForm.patchValue({
    id_usuario: empleado.usuario.id_usuario,
    id_rol: empleado.usuario.rol.id_rol,
    id_empleado: empleado.id_empleado,
    nombre: empleado.nombre,
    apellidoP: empleado.apellido_p,
    apellidoM: empleado.apellido_m,
    telefono: empleado.telefono,
    direccion: empleado.direccion,
    correo: empleado.usuario.correo
  });

}

modificarEmpleado(): void {
  var empleado={
    id_empleado: this.editarForm.get('id_empleado')?.value,
    nombre:this.editarForm.get('nombre')?.value,
    apellido_p:this.editarForm.get('apellidoP')?.value,
    apellido_m:this.editarForm.get('apellidoM')?.value,
    direccion:this.editarForm.get('direccion')?.value,
    telefono:this.editarForm.get('telefono')?.value,
    usuario:{
      id_usuario:this.editarForm.get('id_usuario')?.value,
      correo:this.editarForm.get('correo')?.value,
      contrasenia:this.editarForm.get('contrasenia')?.value,
      rol:{
        id_rol: this.editarForm.get('id_rol')?.value,
        tipo:"",
        descripcion:"",
      }
    },
    estatus:1
  }
  
  this.api.actualizarEmpleado(empleado.id_empleado, empleado).subscribe(
    (data) => {
      // La solicitud se completó con éxito, muestra la alerta usando swal
      Swal.fire('Éxito', 'Usuario editado', 'success');
      this.ngOnInit()
    },
    (error) => {
      console.error('Error:', error);
    }
  )
}


eliminarEmpleado(id:number){
  this.api.eliminarEmpleado(id).subscribe(
    (data) => {
      // La solicitud se completó con éxito, muestra la alerta usando swal
      Swal.fire('Éxito', 'Usuario eliminado', 'success');
      this.ngOnInit()
    },
    (error) => {
      console.error('Error:', error);
    }
  )
}

  initForm(): FormGroup {
    return this.fb.group({
      nombre: ['', [Validators.required]],
      apellidoP:['',[Validators.required]],
      apellidoM:['',[Validators.required]],
      correo:['',[Validators.required]],
      contrasenia:['',[Validators.required]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required]],        
    })
  }

  updateForm(): FormGroup {
    return this.fb.group({
      id_empleado:[''],
      id_usuario:[''],
      id_rol:[''],
      nombre: ['', [Validators.required]],
      apellidoP:['',[Validators.required]],
      apellidoM:['',[Validators.required]],
      correo:['',[Validators.required]],
      contrasenia:['',[Validators.required]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required]],        
    })
  }
}
