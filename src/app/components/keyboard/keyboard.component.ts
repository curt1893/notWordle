import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {


  @Output() addLetter = new EventEmitter();
  @Output() submitCurrent = new EventEmitter();
  @Output() back = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  add(a:string){
    this.addLetter.emit(a);
  }

  submitCur(){
    this.submitCurrent.emit();
  }

  backSpace(){
    this.back.emit();
  }

}
