import { Component, OnInit } from '@angular/core';
import { AnalysisService } from '../analysis.service';
import { StatisticsComponent } from '../statistics/statistics.component';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';

interface AnalysisResults {
  ekmanEmotion: { prediction: string, probability: number }[];
  personalityTrait: { prediction: string, probability: number }[];
  sentiment: { prediction: string, probability: number }[];
  age: { prediction: string, probability: number }[];
  gender: { prediction: string, probability: number }[];
}

@Component({
  selector: 'app-main-interface',
  templateUrl: './main-interface.component.html'
})
export class MainInterfaceComponent implements OnInit {
  public inputText: string = '';
  public result: string | null = null;
  public analysisResults: AnalysisResults = {
    ekmanEmotion: [],
    personalityTrait: [],
    sentiment: [],
    age: [],
    gender: []
  };
  barCharts: Chart[] = [];
  pieCharts: Chart[] = [];
  
  constructor(private analysisService: AnalysisService) {}
  ngOnInit(): void {
    // Inicializar gráficos vacíos
    for (let i = 0; i < 5; i++) {
      this.barCharts.push(new Chart({
        chart: {
          type: 'column'
        },
        title: {
          text: ''
        },
        xAxis: {
          categories: []
        },
        yAxis: {
          title: {
            text: 'Probabilidad'
          }
        },
        series: [{
          type: 'column',
          name: 'Probabilidad',
          data: []
        }]
      }));

      this.pieCharts.push(new Chart({
        chart: {
          type: 'pie'
        },
        title: {
          text: ''
        },
        series: [{
          type: 'pie',
          name: 'Probabilidad',
          data: []
        }]
      }));
    }
  }

  analyzeText(): void {
    if (this.inputText.trim()) {  
      this.analyzeEkmanEmotion('1', this.inputText, 'en');
      this.analyzePersonality('1', this.inputText, 'en');
      this.analyzeSentiment('1', this.inputText, 'en');
      this.analyzeAge('1', this.inputText, 'en');
      this.analyzeGender('1', this.inputText, 'en');
    } else {
      console.error('Input text is empty');
      this.result = 'Please provide text for analysis.';
    }
  }

  analyzeEkmanEmotion(id: string, text: string, language: string): void {
    this.analysisService.analyzeEkmanEmotion(id, text, language).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.analysisResults.ekmanEmotion = response.data[0].prediction;
          this.updateCharts(response.data, 0);
          console.log('Ekman Emotion Analysis completed:', this.analysisResults.ekmanEmotion, 'with probability', response.data[0].probability);
        } else {
          console.error('Received unexpected response or no data:', response);
          this.analysisResults.ekmanEmotion = [];
        }
      },
      error: (error) => {
        console.error('Error during Ekman Emotion analysis:', error);
        this.analysisResults.ekmanEmotion = [];
      }
    });
  }
  
  analyzePersonality(id: string, text: string, language: string): void {
    this.analysisService.analyzePersonality(id, text, language).subscribe({
      next: (response) => {
        // Asegúrate de que la respuesta contiene los datos esperados y que es exitosa
        if (response.success && response.data) {
          this.analysisResults.personalityTrait = response.data[0].prediction;
          this.updateCharts(response.data, 1);

          console.log('Personality Analysis completed:', this.analysisResults.personalityTrait, 'with probability', response.data[0].probability);
        } else {
          console.error('Received unexpected response or no data:', response);
          this.analysisResults.personalityTrait = [];
        }
      },
      error: (error) => {
        console.error('Error during Personality analysis:', error);
        this.analysisResults.personalityTrait = [];
      }
    });
  }
  
  analyzeSentiment(id: string, text: string, language: string): void {
    this.analysisService.analyzeSentiment(id, text, language).subscribe({
      next: (response) => {
        // Asegúrate de que la respuesta contiene los datos esperados y que es exitosa
        if (response.success && response.data) {
          this.analysisResults.sentiment = response.data[0].prediction;
          this.updateCharts(response.data, 2);
          console.log('Sentiment Analysis completed:', this.analysisResults.sentiment, 'with probability', response.data[0].probability);
        } else {
          console.error('Received unexpected response or no data:', response);
          this.analysisResults.sentiment = [];
        }
      },
      error: (error) => {
        console.error('Error during Sentiment analysis:', error);
        this.analysisResults.sentiment = [];
      }
    });
  }

  

  analyzeAge(id: string, text: string, language: string): void {
    this.analysisService.analyzeAge(id, text, language).subscribe({
      next: (response) => {
        // Asegúrate de que la respuesta contiene los datos esperados y que es exitosa
        if (response.success && response.data) {
          this.analysisResults.age = response.data[0].prediction;
          this.updateCharts(response.data, 3);
          console.log('Age Analysis completed:', this.analysisResults.age, 'with probability', response.data[0].probability);
        } else {
          console.error('Received unexpected response or no data:', response);
          this.analysisResults.age = [];
        }
      },
      error: (error) => {
        console.error('Error during Age analysis:', error);
        this.analysisResults.age = [];
      }
    });
  }

  analyzeGender(id: string, text: string, language: string): void {
    this.analysisService.analyzeGender(id, text, language).subscribe({
      next: (response) => {
        // Asegúrate de que la respuesta contiene los datos esperados y que es exitosa
        if (response.success && response.data) {
          this.analysisResults.gender = response.data[0].prediction;
          this.updateCharts(response.data, 4);
          console.log('Gender analysis completed:', this.analysisResults.gender, 'with probability', response.data[0].probability);
        } else {
          console.error('Received unexpected response or no data:', response);
          this.analysisResults.gender = [];
        }
      },
      error: (error) => {
        console.error('Error during Gedner analysis:', error);
        this.analysisResults.gender =[];
      }
    });
  }
  

  updateCharts(data: { prediction: string, probability: number }[], chartIndex: number): void {
    const categories = data.map(d => d.prediction);
    const probabilities = data.map(d => d.probability);

    this.barCharts[chartIndex] = new Chart({
      chart: {
        type: 'column'
      },
      title: {
        text: 'Resultados'
      },
      xAxis: {
        categories: categories
      },
      yAxis: {
        title: {
          text: 'Probabilidad'
        }
      },
      series: [{
        type: 'column',
        name: 'Probabilidad',
        data: probabilities
      }]
    });

    this.pieCharts[chartIndex] = new Chart({
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Resultados'
      },
      series: [{
        type: 'pie',
        name: 'Probabilidad',
        data: data.map(d => ({ name: d.prediction, y: d.probability }))
      }]
    });
  }

  

}
