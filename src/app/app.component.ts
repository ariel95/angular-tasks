import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Task } from './models/task'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public title = 'to-do-list';
 

}
