import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MateriaPrimaService } from 'src/app/services/materia-prima.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-materia-prima',
  templateUrl: './materia-prima.component.html',
  styleUrls: ['./materia-prima.component.css']
})
export class MateriaPrimaComponent {
  listaMaterias: any []=[];
  materiaForm!: FormGroup;
  editarMateriaForm!: FormGroup;


  //*Construir el formulario reactivo 
 constructor( private router:Router,private api:MateriaPrimaService,private readonly fb: FormBuilder) {
  this.materiaForm = this.initForm() 
  this.editarMateriaForm = this.editMateriaPrimaForm()
 }

ngOnInit():void{
  this.api.mostarMateriaPrimaes().subscribe(data =>{
    this.listaMaterias=data;
    console.log(this.listaMaterias)
    //this.router.navigate(['panel'])//interfaz de usuario
   })
}

registroMateria(): void {
  var materia={
    id_materia_prima:0,
    nombre:this.materiaForm.get('nombre')?.value,
    descripcion:this.materiaForm.get('descripcion')?.value,
    cantidad:this.materiaForm.get('cantidad')?.value,
    unidad_medida: this.materiaForm.get('unidad_medida')?.value,
    estatus:1
  } 
  this.api.agregarMateriaPrima(materia).subscribe(data =>{
     Swal.fire('Éxito', 'Materia prima registrada', 'success');
     this.ngOnInit()
   },
   (error) => {
     console.error('Error:', error);
   }
 )
}


materiaSeleccionada: any = {};

mostrarDetalleMateria(materia: any) {
  // Al hacer clic en el botón, asigna el materia seleccionado a la variable
  this.materiaSeleccionada = materia;

  this.editarMateriaForm.patchValue({
    id_materia_prima: materia.id_materia_prima,
    nombre: materia.nombre,
    descripcion: materia.descripcion,
    cantidad: materia.cantidad,
    unidad_medida: materia.unidad_medida
  });

}

modificarMateria(): void {
  var materia={
    id_materia_prima:this.editarMateriaForm.get('id_materia_prima')?.value,
    nombre:this.editarMateriaForm.get('nombre')?.value,
    descripcion:this.editarMateriaForm.get('descripcion')?.value,
    cantidad:this.editarMateriaForm.get('cantidad')?.value,
    unidad_medida: this.editarMateriaForm.get('unidad_medida')?.value,
    estatus:1
  } 
  
  this.api.actualizarMateriaPrima(materia.id_materia_prima, materia).subscribe(
    (data) => {
      // La solicitud se completó con éxito, muestra la alerta usando swal
      Swal.fire('Éxito', 'Materia editado', 'success');
      this.ngOnInit()
    },
    (error) => {
      Swal.fire('Fallo al modificar', 'Intente mas tarde o verifique los datos', 'error');
      console.error('Error:', error);
    }
  )
}

eliminarMateria(id:number){
  this.api.eliminarMateriaPrima(id).subscribe(
    (data) => {
      // La solicitud se completó con éxito, muestra la alerta usando swal
      Swal.fire('Éxito', 'Materia Prima eliminada', 'success');
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
      descripcion: ['',[Validators.required]],
      cantidad: ['', [Validators.required]],
      unidad_medida: ['', [Validators.required]],        
    })
  }
  
  editMateriaPrimaForm(): FormGroup {
    return this.fb.group({
      id_materia_prima:['',[Validators.required]],
      nombre: ['', [Validators.required]],
      descripcion: ['',[Validators.required]],
      cantidad: ['', [Validators.required]],
      unidad_medida: ['', [Validators.required]],     
    })
  }
}
