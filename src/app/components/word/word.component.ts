import { Component, Input, OnInit } from '@angular/core';
import { Letter } from '../letter'

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnInit {

  @Input("gWord") gWord ="words";
  @Input('aWord') aWord: any ="wards";
  @Input("submitted") submitted = false;


 letterArray = new Array;

  constructor() { }

  ngOnInit(): void {

    //console.log("gWord: " + this.gWord);
    //console.log("submittedCount: " + this.submitted);

  let gWordArray = this.gWord.split('');
  let aWordArray = this.aWord.split('');

  console.log(gWordArray);

  for (let i=0; i < 5; i++){

    let letter = {};

    if(!this.submitted){
      //console.log("Found a unsubmitted");
    if (gWordArray[i] == aWordArray[i]){
      letter = {
        id:i,
        letter:gWordArray[i],
        good:true,
        bad:false,
        warm:false,
        blank:false,
        unsubmitted:true
        };
        //console.log("good");
    }

    if (aWordArray.includes(gWordArray[i]) && gWordArray[i] != aWordArray[i]){
      letter = {
        id:i,
        letter:gWordArray[i],
        good:false,
        bad:false,
        warm:true,
        blank:false,
        unsubmitted:true
        };
        //console.log("warm");
    }

    if (!aWordArray.includes(gWordArray[i])){
    letter = {
      id:i,
      letter:gWordArray[i],
      good:false,
      bad:true,
      warm:false,
      blank:false,
      unsubmitted:true
      };
      //console.log("bad");
    }

    if (gWordArray[i] == undefined){
      letter = {
        id:i,
        letter:" ",
        good:false,
        bad:false,
        warm:false,
        blank:true,
        unsubmitted:true
        };
        //console.log("blank");
    }
  }

  if (this.submitted){
    //console.log("Found a submitted");
    if (gWordArray[i] == aWordArray[i]){
      letter = {
        id:i,
        letter:gWordArray[i],
        good:true,
        bad:false,
        warm:false,
        blank:false,
        unsubmitted:false
        };
        //console.log("good");
    }

    if (aWordArray.includes(gWordArray[i]) && gWordArray[i] != aWordArray[i]){
      letter = {
        id:i,
        letter:gWordArray[i],
        good:false,
        bad:false,
        warm:true,
        blank:false,
        unsubmitted:false
        };
        //console.log("warm");
    }

    if (!aWordArray.includes(gWordArray[i])){
    letter = {
      id:i,
      letter:gWordArray[i],
      good:false,
      bad:true,
      warm:false,
      blank:false,
      unsubmitted:false
      };
      //console.log("bad");
    }

    if (gWordArray[i] == undefined){
      letter = {
        id:i,
        letter:" ",
        good:false,
        bad:false,
        warm:false,
        blank:true,
        unsubmitted:false
        };
        //console.log("blank");
    }
  }



    this.letterArray.push(letter);

  }

  console.log(this.letterArray)

  }

}
