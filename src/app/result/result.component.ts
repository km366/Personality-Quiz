import { Component, OnInit } from '@angular/core';
import { SetResultService } from '../set-result.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  name: string;
  image: string;
  description: string;
  characters: object;
  characterInfo =
    {
      'theodor': {
        'name': 'Theodor',
        'image': './assets/images/Theodor.jpg',
        'description': 'abc'
      },
      'marget': {
        'name': 'Marget',
        'image': './assets/images/Marget.jpg',
        'description': 'xyz'
      }
    };
  constructor(private setResult: SetResultService,
    private router: Router) { }

  ngOnInit() {
    this.characters = this.setResult.getData();
    if (this.characters === undefined){
      alert("Please complete the survey first!");
      this.router.navigate(['/quiz']);
    }
    else {
      console.log(this.characters);
      this.name = this.characterInfo['theodor']['name'];
      this.image = this.characterInfo['theodor']['image'];
      this.description = this.characterInfo['theodor']['description'];
    }
  }

}
