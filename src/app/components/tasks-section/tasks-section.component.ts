import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from '../../models/task'

@Component({
  selector: 'app-tasks-section',
  templateUrl: './tasks-section.component.html',
  styleUrls: ['./tasks-section.component.css']
})
export class TasksSectionComponent implements OnInit {

  @Input() taskList: Task[];
  @Input() selectedTask: Task;
  @Output() taskActiveEvent = new EventEmitter<Task>();

  constructor() { 

  }

  ngOnInit(): void {
  }


  edit (task: Task){
    this.taskActiveEvent.emit(task);
  }

  delete (task: Task){
    this.taskList = this.taskList.filter(x => x.id !== task.id);
    localStorage.setItem("task-list", JSON.stringify(this.taskList));
  }

  done(task: Task){
    task.done = !task.done;
    localStorage.setItem("task-list", JSON.stringify(this.taskList));
  }

}
