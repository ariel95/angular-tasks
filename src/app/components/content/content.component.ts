import { Component, OnInit } from '@angular/core';
import {Task} from '../../models/task'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  taskList : Task[] = JSON.parse(localStorage.getItem("task-list")) || [];
  selectedTask: Task = new Task();
  taskActive: boolean = false;

  addTask(){
    this.taskActive = true;
  }

  deleteAllTasks(){
    this.taskList = [];
    localStorage.setItem("task-list", JSON.stringify(this.taskList));
  }

  deleteDoneTasks(){
    this.taskList = this.taskList.filter(x => !x.done);
    localStorage.setItem("task-list", JSON.stringify(this.taskList));
  }

  changeTaskActive(isActive: boolean){
    this.taskActive = isActive;
  }

  changeNewTask(task: Task){
    this.selectedTask = task;
  }
}
