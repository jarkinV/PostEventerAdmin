import {Component, ViewChild} from '@angular/core';
import {MatMenuTrigger} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  title = 'app';

  mdMenuTriggerFor(s: string): string {
    return s;
  }
}
