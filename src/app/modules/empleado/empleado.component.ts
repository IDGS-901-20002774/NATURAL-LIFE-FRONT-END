import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  empleadoForm!: FormGroup;
   //*Construir el formulario reactivo 
 constructor( private router:Router,private api:EmpleadoService,private readonly fb: FormBuilder) {
  this.empleadoForm= this.initForm() 
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
  
}
