import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  clienteForm!: FormGroup;
  
  
 //*Construir el formulario reactivo 
 constructor( private router:Router,private api:RegistroService,private readonly fb: FormBuilder) {
  this.clienteForm = this.initForm() 
 }

 registroCliente(): void {
  var client={
    id_cliente:0,
    nombre:this.clienteForm.get('nombreC')?.value,
    apellido_p:this.clienteForm.get('apellidoCP')?.value,
    apellido_m:this.clienteForm.get('apellidoCM')?.value,
    direccion:this.clienteForm.get('direccionC')?.value,
    telefono:this.clienteForm.get('telefonoC')?.value,
    usuario:{
      id_usuario:0,
      correo:this.clienteForm.get('correoC')?.value,
      contrasenia:this.clienteForm.get('contraseniaC')?.value,
      rol:{
        id_rol: 0,
        tipo:"",
        descripcion:"",
      }
    },
    estatus:1
  } 

  this.api.agregarCliente(client).subscribe(data =>{
    this.router.navigate(['catalogo-productos'])//interfaz de usuario
  })
}

  
  initForm(): FormGroup {
    return this.fb.group({
      nombreC: ['', [Validators.required]],
      apellidoCP:['',[Validators.required]],
      apellidoCM:['',[Validators.required]],
      correoC:['',[Validators.required]],
      contraseniaC:['',[Validators.required]],
      direccionC: ['', [Validators.required]],
      telefonoC: ['', [Validators.required]],        
    })
  }
}
