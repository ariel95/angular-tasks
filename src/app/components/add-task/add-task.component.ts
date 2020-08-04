import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../../models/task'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  
  public error: string = "";
  @Input() selectedTask: Task;
  @Input() taskList: Task[];
  @Input() taskActive: boolean;
  @Output() taskActiveEvent = new EventEmitter<boolean>();
  @Output() newTaskEvent = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    
    if(this.selectedTask.text.trim() === ""){
      this.error = "La tarea no puede ser vacía.";
      return;
    }

    this.selectedTask.id = Math.random();
    this.taskList.push(this.selectedTask);
    localStorage.setItem("task-list", JSON.stringify(this.taskList));
    // this.selectedTask = new Task();
    this.newTaskEvent.emit(new Task());
    this.taskActiveEvent.emit(false);
  }

  cancel(){
    
    // this.selectedTask = new Task();
    this.newTaskEvent.emit(new Task());
    this.taskActiveEvent.emit(false)

  }

  onChangeText(){
    this.error = "";
  }

}
