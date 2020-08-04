import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../../models/task'


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  public newText: string = "";
  public error: string = "";
  @Input() selectedTask: Task;
  @Input() taskList: Task[];
  @Input() taskActive: boolean;
  @Output() taskActiveEvent = new EventEmitter<boolean>();
  @Output() newTaskEvent = new EventEmitter<Task>();

  constructor() { 
    
  }

  ngOnInit(): void {
    this.newText = this.selectedTask.text;
  }

  edit() {
    if(this.newText.trim() === ""){
      this.error = "La tarea no puede ser vacía.";
      return;
    }
    this.selectedTask.text = this.newText;
    this.taskList = this.taskList.filter(x => x.id != this.selectedTask.id);
    this.taskList.push(this.selectedTask);
    localStorage.setItem("task-list", JSON.stringify(this.taskList));
    this.newTaskEvent.emit(new Task());
    this.taskActiveEvent.emit(false);
  }

  cancel(){
    this.newTaskEvent.emit(new Task());
    this.taskActiveEvent.emit(false)
  }

  onChangeText(){
    this.error = "";
  }

}
