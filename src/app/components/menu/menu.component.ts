import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() clearWord = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clear(){
    this.clearWord.emit();
  }

}
