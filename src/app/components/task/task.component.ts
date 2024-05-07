import { Component } from '@angular/core';
import { Tarea } from '../../models/Tarea';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  listTareas: Tarea[] = []
  nombreTarea = '';
 

  agregarTarea(){
    //crear un objeto tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false,
    
    }
    
    // Agregar el objeto tarea al array
    this.listTareas.push(tarea);
    console.log(tarea)
    // reset form
    this.nombreTarea = '';
  }
  eliminateTask(index: number){
    console.log(index);
    this.listTareas.splice(index, 1);
  }
  updateTask(index:number, tarea: Tarea,){
    this.listTareas[index].estado = !tarea.estado
    //con esta linea cambiamos el estado del objeto
  }
}
//funciona