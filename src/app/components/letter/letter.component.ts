import { Component, Input, OnInit } from '@angular/core';
import { Letter } from '../letter';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.scss']
})
export class LetterComponent implements OnInit {

  @Input('letter') letter = "";
  @Input('good') good = false;
  @Input('warm') warm = false;
  @Input('bad') bad = false;
  @Input('blank') blank = false;
  @Input('unsubmitted') unsubmitted = false;
  
  //letterVal = this.letter.letter;
  //good = this.letter.good;
  //warm = this.letter.warm;
  //blank = this.letter.blank; 
  //bad = this.letter.bad;

  constructor() { }

  ngOnInit(): void {

    //console.log(this.letter);
    //console.log(this.good);
    //console.log(this.warm);
    //console.log(this.bad);
    //console.log(this.blank);
    //console.log("unsubmitted:" + this.unsubmitted);
    //console.log(this);
    


  }

}
