import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specific-stats',
  templateUrl: './specific-stats.component.html',
  styleUrls: ['./specific-stats.component.scss']
})
export class SpecificStatsComponent implements OnInit {
  modelName: string = '';
  sourceName: string = '';
  statsTypes: string[] = ['emotion', 'personality', 'sentiment', 'age', 'gender'];
  shownStatsTypes: { [key: string]: string } = {
    emotion: 'Emoción',
    personality: 'Personalidad',
    sentiment: 'Sentimiento',
    age: 'Edad',
    gender: 'Género'
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.modelName = params['modelName']; // Capture the model name from URL parameter
      // Here you can now load data or images based on modelName
    });
  }

  getImageUrl(statType: string): string {
    const url = `./assets/modelos/${this.modelName}/${statType}${this.modelName}.png`;
    console.log(url);
    return url;
  }
  

}
