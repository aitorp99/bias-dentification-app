import { Component, OnInit } from '@angular/core';
import { AnalysisService } from '../analysis.service';
import { PredictionService } from '../prediction.service';
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
  public selectedLanguage: string = 'en'; // Default to English
  public result: string | null = null;
  public analysisResults: AnalysisResults = {
    ekmanEmotion: [],
    personalityTrait: [],
    sentiment: [],
    age: [],
    gender: []
  };
  public joblib1Prediction: any = null;
  public joblib2Prediction: any = null;
  public h5Prediction: any = null;
  public showCharts: boolean = false;

  barCharts: Chart[] = [];
  pieCharts: Chart[] = [];

  // Diccionarios de traducción
  private emotionTranslations: { [key: string]: string } = {
    'fear': 'Miedo',
    'anger': 'Ira',
    'joy': 'Alegría',
    'sadness': 'Tristeza',
    'disgust': 'Asco',
    'surprise': 'Sorpresa',
    'no-emotion': 'Sin Emoción'
  };

  private personalityTranslations: { [key: string]: string } = {
    'rational': 'Racional',
    'emotional': 'Emocional'
  };

  private sentimentTranslations: { [key: string]: string } = {
    'positive': 'Positivo',
    'negative': 'Negativo'
  };

  private genderTranslations: { [key: string]: string } = {
    'male': 'Masculino',
    'female': 'Femenino'
  };

  private ageTranslations: { [key: string]: string } = {
    '18-24': '18-24',
    '25-34': '25-34',
    '35-49': '35-49',
    '50-xx': '50-xx'
  };
  
  constructor(private analysisService: AnalysisService, private predictionService: PredictionService) {}
  
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
          categories: [],
          labels: {
            style: {
              fontSize: '16px'
            }
          }
        },
        yAxis: {
          title: {
            text: 'Probabilidad',
            style: {
              fontSize: '16px'
            }
          },
          labels: {
            style: {
              fontSize: '16px'
            }
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
        plotOptions: {
          pie: {
            dataLabels: {
              style: {
                fontSize: '16px'
              }
            }
          }
        },
        series: [{
          type: 'pie',
          name: 'Probabilidad',
          data: []
        }]
      }));
    }
  }

  selectLanguage(language: string): void {
    this.selectedLanguage = language;
  }

  analyzeText(): void {
    if (this.inputText.trim()) {  
      this.showCharts = false;  // Reset showCharts to false before analysis
      this.analyzeEkmanEmotion('1', this.inputText, this.selectedLanguage);
      this.analyzePersonality('1', this.inputText, this.selectedLanguage);
      this.analyzeSentiment('1', this.inputText, this.selectedLanguage);
      this.analyzeAge('1', this.inputText, this.selectedLanguage);
      this.analyzeGender('1', this.inputText, this.selectedLanguage);
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
          this.updateCharts(this.translateData(response.data, this.emotionTranslations), 0);
          console.log('Ekman Emotion Analysis completed:', this.analysisResults.ekmanEmotion, 'with probability', response.data[0].probability);
          this.checkShowCharts();
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
        if (response.success && response.data) {
          this.analysisResults.personalityTrait = response.data[0].prediction;
          this.updateCharts(this.translateData(response.data, this.personalityTranslations), 1);
          console.log('Personality Analysis completed:', this.analysisResults.personalityTrait, 'with probability', response.data[0].probability);
          this.checkShowCharts();
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
        if (response.success && response.data) {
          this.analysisResults.sentiment = response.data[0].prediction;
          this.updateCharts(this.translateData(response.data, this.sentimentTranslations), 2);
          console.log('Sentiment Analysis completed:', this.analysisResults.sentiment, 'with probability', response.data[0].probability);
          this.checkShowCharts();
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
        if (response.success && response.data) {
          this.analysisResults.age = response.data[0].prediction;
          this.updateCharts(this.translateData(response.data, this.ageTranslations), 3);
          console.log('Age Analysis completed:', this.analysisResults.age, 'with probability', response.data[0].probability);
          this.checkShowCharts();
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
        if (response.success && response.data) {
          this.analysisResults.gender = response.data[0].prediction;
          this.updateCharts(this.translateData(response.data, this.genderTranslations), 4);
          console.log('Gender analysis completed:', this.analysisResults.gender, 'with probability', response.data[0].probability);
          this.checkShowCharts();
        } else {
          console.error('Received unexpected response or no data:', response);
          this.analysisResults.gender = [];
        }
      },
      error: (error) => {
        console.error('Error during Gender analysis:', error);
        this.analysisResults.gender = [];
      }
    });
  }
  
  checkShowCharts(): void {
    if (this.analysisResults.ekmanEmotion.length &&
        this.analysisResults.personalityTrait.length &&
        this.analysisResults.sentiment.length &&
        this.analysisResults.age.length &&
        this.analysisResults.gender.length) {
      this.showCharts = true;
    }
  }

  translateData(data: { prediction: string, probability: number }[], translations: { [key: string]: string }): { prediction: string, probability: number }[] {
    return data.map(d => ({
      prediction: translations[d.prediction] || d.prediction,
      probability: d.probability
    }));
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
        categories: categories,
        labels: {
          style: {
            fontSize: '16px'
          }
        }
      },
      yAxis: {
        title: {
          text: 'Probabilidad',
          style: {
            fontSize: '16px'
          }
        },
        labels: {
          style: {
            fontSize: '16px'
          }
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
      plotOptions: {
        pie: {
          dataLabels: {
            style: {
              fontSize: '16px'
            }
          }
        }
      },
      series: [{
        type: 'pie',
        name: 'Probabilidad',
        data: data.map(d => ({ name: d.prediction, y: d.probability }))
      }]
    });
  }
}
