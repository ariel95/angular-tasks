import { Component, OnInit } from '@angular/core';
import {Task} from '../../models/task'
import { getListTask, setListTask } from '../../helpers/TaskLS'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.taskList = getListTask() || this.initialTasksDefect;
  }

  initialTasksDefect: Task[] = [
    {id: 1, text: "Tarea 1 sin hacer", done: false},
    {id: 2, text: "Tarea 2 hecha", done: true},
    {id: 3, text: "Tarea 3 sin hacer", done: false},
    {id: 4, text: "Tarea 4 sin hacer", done: false},
    {id: 5, text: "Tarea 5 hecha", done: true},
    {id: 6, text: "Tarea 6 hecha", done: true},
    {id: 7, text: "Tarea 7 sin hacer", done: false}
  ]

  taskList : Task[] = [];
  selectedTask: Task = new Task();
  taskActive: boolean = false;

  addTask(){
    this.taskActive = true;
  }

  deleteAllTasks(){
    this.taskList = [];
    setListTask(this.taskList)
    // localStorage.setItem("task-list", JSON.stringify(this.taskList));
  }

  deleteDoneTasks(){
    this.taskList = this.taskList.filter(x => !x.done);
    setListTask(this.taskList)
  }

  changeTaskActive(isActive: boolean){
    this.taskActive = isActive;
  }

  changeSelectedTask(task: Task){
    this.selectedTask = task;
  }
  changeEditTask(task: Task){
    this.selectedTask = task;
    this.taskActive = true;
  }
}
