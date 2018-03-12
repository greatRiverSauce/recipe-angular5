import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() select = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  navigate(selected:string) {
    this.select.emit(selected);
  }
}
