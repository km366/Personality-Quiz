import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { stringify } from 'querystring';
import { SetResultService } from '../set-result.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz = this.fb.group({
    question1: ['', Validators.required],
    question2: ['', Validators.required],
    question3: ['', Validators.required],
    question4: ['', Validators.required],
    question5: ['', Validators.required],
    question6: ['', Validators.required],
    question7: ['', Validators.required],
    question8: ['', Validators.required],
    question9: ['', Validators.required],
    question10: ['', Validators.required],
    question11: ['', Validators.required],
    question12: ['', Validators.required],
    question13: ['', Validators.required],
    question14: ['', Validators.required],
    question15: ['', Validators.required],
    question16: ['', Validators.required],
    question17: ['', Validators.required]
  })
  questions = [{"type":"radiogroup","name":"question1","title":"Do you feel you understand other people's emotions??","isRequired":true,"choices":[{"value":"item1","text":"Often"},{"value":"item2","text":"Sometimes"},{"value":"item3","text":"Not usually"}]},{"type":"radiogroup","name":"question2","title":"On a free day, do you prefer in-home entertainment or going out?","isRequired":true,"choices":[{"value":"item1","text":"In-home entertainment "},{"value":"item2","text":"Venturing out "}]},{"type":"radiogroup","name":"question3","title":"Do your dreams take you on crazy adventures?","isRequired":true,"choices":[{"value":"item1","text":"All the time"},{"value":"item2","text":"Sometimes"},{"value":"item3","text":"Rarely"}]},{"type":"radiogroup","name":"question4","title":"Do you believe in taking revenge or forgiving people?","isRequired":true,"choices":[{"value":"item1","text":"Revenge"},{"value":"item2","text":"Forgiveness"},{"value":"item3","text":"Not sure"}]},{"type":"radiogroup","name":"question5","title":"When meeting a new group of people, you do not have trouble being a part of their conversation.","isRequired":true,"choices":[{"value":"item1","text":"Agree"},{"value":"item2","text":"Neutral"},{"value":"item3","text":"Disagree"}]},{"type":"radiogroup","name":"question6","title":"Would you rather play a game of monopoly with your family or go out with your friends?","isRequired":true,"choices":[{"value":"item1","text":"Monopoly with Family"},{"value":"item2","text":"Go out with Friends"},{"value":"item3","text":"Neither"}]},{"type":"radiogroup","name":"question7","title":"Do you highly value societal perception?","isRequired":true,"choices":[{"value":"item1","text":"Yes"},{"value":"item2","text":"No"},{"value":"item3","text":"Not sure"}]},{"type":"radiogroup","name":"question8","title":"Are you often haunted by mistakes from the past?","isRequired":true,"choices":[{"value":"item1","text":"All the time"},{"value":"item2","text":"Sometimes"},{"value":"item3","text":"Rarely"}]},{"type":"radiogroup","name":"question9","title":"Are you easy to talk to?","isRequired":true,"choices":[{"value":"item1","text":"Yes"},{"value":"item2","text":"No"}]},{"type":"radiogroup","name":"question10","title":"Do you prefer to live an independent life, or would you rather have someone’s support?","isRequired":true,"choices":[{"value":"item1","text":"Independent"},{"value":"item2","text":"Dependent"},{"value":"item3","text":"In the middle"}]},{"type":"radiogroup","name":"question11","title":"Do you like receiving recognition for your work?","isRequired":true,"choices":[{"value":"item1","text":"Absolutely"},{"value":"item2","text":"Sometimes"},{"value":"item3","text":"Never"}]},{"type":"radiogroup","name":"question12","title":"Are you easily affected by what other people say about you?","isRequired":true,"choices":[{"value":"item1","text":"Yes"},{"value":"item2","text":"No"},{"value":"item3","text":"From time to time"}]},{"type":"radiogroup","name":"question13","title":"Would you make a good judge?","isRequired":true,"choices":[{"value":"item1","text":"Yes"},{"value":"item2","text":"No"},{"value":"item3","text":"Maybe"}]},{"type":"radiogroup","name":"question14","title":"Do you depend on other people to keep a conversation going?","choices":[{"value":"item1","text":"Yes"},{"value":"item2","text":"Sometimes"},{"value":"item3","text":"No"}]},{"type":"radiogroup","name":"question15","title":"Do you enjoy social gathering with a lot of people?","choices":[{"value":"item1","text":"Definitely"},{"value":"item2","text":"Sometimes"},{"value":"item3","text":"Rarely"}]},{"type":"radiogroup","name":"question16","title":"When planning for a vacation, would you create a detailed itinerary or just sketch out rough ideas?","choices":[{"value":"item1","text":"Detailed Itinerary "},{"value":"item2","text":"Rough ideas"},{"value":"item3","text":"Bit of both"}]},{"type":"radiogroup","name":"question17","title":"Do you ever have premonitions?","choices":[{"value":"item1","text":"Often"},{"value":"item2","text":"Sometimes"},{"value":"item3","text":"Never"}]}];
  characters = {
    'theodor': 0,
    'marget': 0,
    'satan': 0,
    'henry': 0,
    'catherine': 0,
    'rinaldi': 0,
    'quentin': 0,
    'benjy': 0,
    'caddy': 0,
    'dilsey': 0
  }

  constructor(private fb: FormBuilder,
    private setResult: SetResultService,
    private router: Router) {
    }

  ngOnInit() {}
  test(){
    if (this.quiz.status === "INVALID"){
      alert("Please answers all question!");
    }
    else {
      if (this.quiz.value.question1 === "item1"){
        this.characters['quentin'] += 8;
        this.characters['benjy'] += 10;
      }
      else if(this.quiz.value.question1 === "item2"){
        this.characters['henry'] += 8;
        this.characters['rinaldi'] += 8;
        this.characters['theodor'] += 8;
      }
      else{
        this.characters['satan'] += 9;
        this.characters['marget'] += 9;
        this.characters['catherine'] += 9;
        this.characters['caddy'] += 9;
        this.characters['dilsey'] += 9;
      }
      if (this.quiz.value.question2 === "item1"){
        this.characters['marget'] += 8;
        this.characters['quentin'] += 8;
        this.characters['dilsey'] += 8;
        this.characters['henry'] += 9;
      }
      else{
        this.characters['benjy'] += 8;
        this.characters['caddy'] += 8;
        this.characters['satan'] += 10;
        this.characters['catherine'] += 9;
      }
      if (this.quiz.value.question3 === "item1"){
        this.characters['theodor'] += 9;
        this.characters['satan'] += 8;
        this.characters['rinaldi'] += 8;
      }
      else if (this.quiz.value.question3 === "item2"){
        this.characters['henry'] += 8;
        this.characters['catherine'] += 8;
        this.characters['caddy'] += 8;
        this.characters['dilsey'] += 9;
      }
      else {
        this.characters['marget'] += 8;
        this.characters['quentin'] += 9;
        this.characters['benjy'] += 9;
      }
      if (this.quiz.value.question4 === "item1"){
        this.characters['satan'] += 10;
        this.characters['quentin'] += 9;
      }
      else if (this.quiz.value.question4 === "item2"){
        this.characters['theodor'] += 10;
        this.characters['marget'] += 10;
        this.characters['catherine'] += 9;
        this.characters['rinaldi'] += 8;
        this.characters['dilsey'] += 10;
      }
      else{
        this.characters['henry'] += 8;
        this.characters['benjy'] += 8;
        this.characters['caddy'] += 8;
      }
      if (this.quiz.value.question5 === "item1"){
        this.characters['satan'] += 10;
        this.characters['rinaldi'] += 10;
        this.characters['catherine'] += 9;
        this.characters['caddy'] += 9;
      }
      else if(this.quiz.value.question5 === "item2"){
        this.characters['theodor'] += 8;
        this.characters['henry'] += 9;
        this.characters['dilsey'] += 9;
      }
      else{
        this.characters['marget'] += 9;
        this.characters['quentin'] += 9;
        this.characters['benjy'] += 9;
      }
      if (this.quiz.value.question6 === "item1"){
        this.characters['dilsey'] += 8;
        this.characters['marget'] += 10
      }
      else if(this.quiz.value.question6 === "item2"){
        this.characters['theodor'] += 9;
        this.characters['satan'] += 7;
        this.characters['henry'] += 8;
        this.characters['catherine'] += 9;
        this.characters['rinaldi'] += 10;
      }
      else{
        this.characters['quentin'] += 8;
        this.characters['benjy'] += 9;
        this.characters['caddy'];
      }
      if (this.quiz.value.question7 === "item1"){
        this.characters['marget'] += 9;
        this.characters['quentin'] += 10;
        this.characters['dilsey'] += 8;
        this.characters['rinaldi'] += 8;
      }
      else if(this.quiz.value.question7 === "item2"){
        this.characters['satan'] += 10;
        this.characters['henry'] += 10;
        this.characters['benjy'] += 8;
        this.characters['caddy'] += 10;
      }
      else{
        this.characters['theodor'] += 9;
        this.characters['catherine'] += 8;
      }
      if(this.quiz.value.question8 === "item1"){
        this.characters['quentin'] += 9;
        this.characters['benjy'] += 10;
      }
      else if(this.quiz.value.question8 === "item2"){
        this.characters['theodor'] += 8;
        this.characters['catherine'] += 10;
        this.characters['caddy'] += 8;
      }
      else{
        this.characters['satan'] += 9;
        this.characters['henry'] += 10;
        this.characters['rinaldi'] += 8;
        this.characters['dilsey'] += 10;
        this.characters['marget'] += 9;
      }
      if(this.quiz.value.question9 === "item1"){
        this.characters['theodor'] += 8;
        this.characters['satan'] += 10;
        this.characters['catherine'] += 9;
        this.characters['rinaldi'] += 10;
        this.characters['caddy'] += 9;
        this.characters['dilsey'] += 10;
      }
      else{
        this.characters['marget'] += 8;
        this.characters['henry'] += 9;
        this.characters['quentin'] += 10;
        this.characters['benjy'] += 10;
      }
      if(this.quiz.value.question10 === "item1"){
        this.characters['satan'] += 8;
        this.characters['rinaldi'] += 8;
        this.characters['quentin'] += 10;
        this.characters['dilsey'] += 8;
        this.characters['caddy'] += 9;
      }
      else if(this.quiz.value.question10 === "item2"){
        this.characters['marget'] += 9;
        this.characters['benjy'] += 8;
      }
      else{
        this.characters['theodor'] += 8;
        this.characters['catherine'] += 9;
        this.characters['henry'] += 8;
      }
      if(this.quiz.value.question11 === "item1"){
        this.characters['theodor'] += 9;
        this.characters['marget'] += 9;
        this.characters['benjy'] += 8;
      }
      else if(this.quiz.value.question11 === "item2"){
        this.characters['henry'] += 9;
        this.characters['quentin'] += 8;
      }
      else{
        this.characters['satan'] += 9;
        this.characters['catherine'] += 9;
        this.characters['rinaldi'] += 9;
        this.characters['caddy'] += 9;
        this.characters['dilsey'] += 8;
      }
      if(this.quiz.value.question12 === "item1"){
        this.characters['rinaldi'] += 9;
        this.characters['quentin'] += 8;
      }
      else if(this.quiz.value.question12 === "item2"){
        this.characters['marget'] += 9;
        this.characters['catherine'] += 9;
        this.characters['caddy'] += 9;
        this.characters['theodor'] += 8;
      }
      else{
        this.characters['henry'] += 10;
        this.characters['satan'] += 8;
        this.characters['dilsey'] += 9;
        this.characters['benjy'] += 8;
      }
      if(this.quiz.value.question13 === "item1"){
        this.characters['marget'] += 9;
        this.characters['catherine'] += 8;
        this.characters['rinaldi'] += 8;
        this.characters['quentin'] += 10;
      }
      else if(this.quiz.value.question13 === "item2"){
        this.characters['satan'] += 8;
        this.characters['henry'] += 9;
        this.characters['caddy'] += 10;
        this.characters['benjy'] += 9;
        this.characters['dilsey'] += 9;
      }
      else{
        this.characters['theodor'] += 10;
      }
      if(this.quiz.value.question14 === "item1"){
        this.characters['marget'] += 9;
        this.characters['dilsey'] += 10;
        this.characters['benjy'] += 9;
      }
      else if(this.quiz.value.question14 === "item2"){
        this.characters['rinaldi'] += 8;
        this.characters['quentin'] += 8;
        this.characters['satan'] += 8;
        this.characters['catherine'] += 9;
      }
      else{
        this.characters['theodor'] += 9;
        this.characters['henry'] += 8;
        this.characters['caddy'] += 9;
      }
      if(this.quiz.value.question15 === "item1"){
        this.characters['satan'] += 8;
        this.characters['catherine'] += 9;
        this.characters['rinaldi'] += 10;
      }
      else if(this.quiz.value.question15 === "item2"){
        this.characters['theodor'] += 10;
        this.characters['marget'] += 8;
        this.characters['dilsey'] += 8;
        this.characters['caddy'] += 9;
      }
      else{
        this.characters['henry'] += 9;
        this.characters['quentin'] += 9;
        this.characters['benjy'] += 9;
      }
      if(this.quiz.value.question16 === "item1"){
        this.characters['satan'] += 8;
        this.characters['marget'] += 9;
        this.characters['quentin'] += 10;
        this.characters['benjy'] += 8;
        this.characters['dilsey'] += 9
      }
      else if(this.quiz.value.question16 === "item2"){
        this.characters['catherine'] += 8;
        this.characters['rinaldi'] += 10;
        this.characters['caddy'] += 9;
      }
      else{
        this.characters['theodor'] += 10;
        this.characters['henry'] += 9;
      }
      if(this.quiz.value.question17 === "item1"){
        this.characters['satan'] += 10;
        this.characters['benjy'] += 10;
      }
      else if(this.quiz.value.question17 === "item2"){
        this.characters['caddy'] += 9;
        this.characters['catherine'] += 9;
        this.characters['quentin'] += 8;
      }
      else{
        this.characters['marget'] += 8;
        this.characters['theodor'] += 9;
        this.characters['rinaldi'] += 8;
        this.characters['dilsey'] += 8;
        this.characters['henry'] += 9;
      }
      this.setResult.setData(this.characters);
      this.router.navigate(['/result']).then(nav=> {
        console.log("Going to results page...");
      }, err => {
        console.log(err);
      });
    }
  }
}