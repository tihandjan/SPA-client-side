import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  style: string = localStorage['style'] ? localStorage['style'] : 'light-blue-theme';

  onChange($event) {
    this.style = $event.newStyle;
    localStorage['style'] = $event.newStyle;
  }
}
