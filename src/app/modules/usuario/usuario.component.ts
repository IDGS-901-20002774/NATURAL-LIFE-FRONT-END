import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  listaEmpleados: any []=[];
  listaClientes: any []=[];
  fecheCliente:any[]=[];
  
 //*Construir el formulario reactivo 
 constructor( private router:Router,private api:UsuarioService,private readonly fb: FormBuilder) {
  
 }

 ngOnInit():void{
    this.api.mostarClientes().subscribe(data =>{
      this.listaClientes=data;
      console.log(this.listaClientes)
      //this.router.navigate(['panel'])//interfaz de usuario
    })
    this.mostrarEmpleados();
  }

   
  mostrarEmpleados():void{
    this.api.mostarEmpleados().subscribe(data =>{
      this.listaEmpleados=data;
      console.log(this.listaEmpleados)
      //this.router.navigate(['panel'])//interfaz de usuario
    })
  } 
}
