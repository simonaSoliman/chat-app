import { Component } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { ChatService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
