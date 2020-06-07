import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetResultService {
  maxVals: any;
  char: any;
  char1: string;
  char2: string;
  constructor() { }
  setData(ch: object){
    this.char = ch;
  }
  getData(){
    return this.char;
  }
  getTopTwo(){
    if (this.char == undefined){
      return false;
    }
    let highest = 0;
    let secondHighest = 0;
    console.log(this.char);
    for(var i in this.char){
      if(this.char[i] > highest){
        highest = this.char[i];
        this.char1 = i;
        continue;
      }
      if(this.char[i] > secondHighest && this.char[i] < highest){
        secondHighest = this.char[i];
        this.char2 = i;
      }

    }
    return [this.char1, Math.round((highest/150)*100), this.char2, Math.round((secondHighest/150)*100)];
  }
}
