import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comparison-stats',
  templateUrl: './comparison-stats.component.html',
  styleUrls: ['./comparison-stats.component.scss']
})
export class ComparisonStatsComponent implements OnInit {
  statsTypes: string[] = ['emotion', 'personality', 'sentiment', 'age', 'gender'];
  shownStatsTypes: { [key: string]: string } = {
    emotion: 'Emoción',
    personality: 'Personalidad',
    sentiment: 'Sentimiento',
    age: 'Edad',
    gender: 'Género'
  };

  constructor() { }

  ngOnInit(): void {}

  getImageUrl(statType: string): string {
    const url = `./assets/comparisons/${statType}Comparison.png`;
    console.log(url);
    return url;
  }
}
