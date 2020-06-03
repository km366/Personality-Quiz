import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetResultService {
  char: any;
  constructor() { }
  setData(ch: object){
    this.char = ch;
  }
  getData(){
    return this.char;
  }
}
