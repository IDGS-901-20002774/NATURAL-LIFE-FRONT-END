import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data: any []=[];
  loginForm!: FormGroup;
  
 //*Construir el formulario reactivo 
 constructor( private router:Router,private api:LoginService,private readonly fb: FormBuilder) {
  this.loginForm = this.initForm() 
}


onSumit(): void {
  var correo =this.loginForm.get('correo')?.value
  var contrasenia = this.loginForm.get('contrasenia')?.value  
  this.api.loginbyemail(correo,contrasenia).subscribe(data =>{
  this.router.navigate(['catalogo-productos'])//interfaz de usuario
/*  this.api.MostrarClientes().subscribe(data => {
  this.data = data;
   console.log(this.data);
 }) */
})
}

initForm(): FormGroup {
  return this.fb.group({
    correo:['',[Validators.required]],
    contrasenia:['',[Validators.required]],
    
  })
}

}
