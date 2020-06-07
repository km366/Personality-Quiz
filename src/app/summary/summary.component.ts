import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  characterInfo =
    [
      {
        'name': 'Theodor',
        'image': './assets/images/Theodor.jpg',
        'description': 'Theodor is an empathetic individual who is open to new ideas and often questions new beliefs. However, this view may be limited by his high moral sense. He is always up for an adventure and loves travelling.'
      },
      {
        'name': 'Marget',
        'image': './assets/images/Marget.jpg',
        'description': 'Marget cares about what society thinks of her and is extremely loyal to her family and lover. She is kind, giving, and hardworking in nature.'
      },
      {
        'name': 'Satan',
        'image': './assets/images/Satan.jpg',
        'description': 'Satan is a person who is always looking at the bigger picture. He shows grace and confidence in front of every audience and is never scared to express his thoughts. He gathers sadistic pleasures from deceiving and fooling others. '
      },
      {
        'name': 'Henry',
        'image': './assets/images/Henry.jpg',
        'description': 'Henry is an altruistic individual who is often confronted with conflicting ideas of what is good and bad. He is extremely modest about his good deeds and is against violent behavior.'
      },
      {
        'name': 'Catherine',
        'image': './assets/images/Catherine.jpg',
        'description': 'Catherine is a loyal and dedicated individual. She is mature and brave when serving in her role as a nurse. She is a huge romantic and highly values love.'
      },
      {
        'name': 'Rinaldi',
        'image': './assets/images/Rinaldi.jpg',
        'description': 'Rinaldi has a great sense of humor that when coupled with his extroversion makes him nice to be around. He is loyal and often looks for ways to better himself.'
      },
      {
        'name': 'Quentin',
        'image': './assets/images/Quentin.jpg',
        'description': 'Quentin is an intelligent but sensitive person. He has a strong moral compass and often finds himself in a world of fantasy. He has a high regard for his family name and cannot see it perish.'
      },
      {
        'name': 'Benjy',
        'image': './assets/images/Benjy.jpg',
        'description': 'Benjy possesses the ability to sense things, especially unpleasant ones. He can look past the faff and see the bigger picture. Most of his decisions are driven by his past experiences. His thoughts are highly objective but he has trouble expressing them.'
      },
      {
        'name': 'Caddy',
        'image': './assets/images/Caddy.jpg',
        'description': 'Caddy is a loving and affectionate person. She able to deal with her adversities of the past and knows her place in the world. She is constantly on the lookout for truth in any situation.'
      },
      {
        'name': 'Dilsey',
        'image': './assets/images/Dilsey.jpg',
        'description': 'Dilsey has a set of values that she sticks to. She is extremely hardworking and is the rock of the Compson household. She is patient and selfless, putting others before herself.'
      }
    ];
  constructor() { }

  ngOnInit() {
  }

}
