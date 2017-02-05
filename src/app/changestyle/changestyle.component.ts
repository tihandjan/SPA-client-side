import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-changestyle',
  templateUrl: './changestyle.component.html',
  styleUrls: ['./changestyle.component.css']
})
export class ChangestyleComponent implements OnInit {
  @Output() change = new EventEmitter;
  @Input() currentStyle: string;
  styles: Array<string> = [
    'purple-theme',
    'deep-purple-theme',
    'red-theme',
    'pink-theme',
    'light-blue-theme',
    'blue-theme',
    'indigo-theme ',
    'green-theme',
    'teal-theme',
    'deep-orange-theme',
    'orange-theme'
  ]


  constructor() { }

  ngOnInit() {
  }

  onClick(value) {
    this.change.emit({ newStyle: value })
  }

}
