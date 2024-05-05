import { Component, OnInit } from '@angular/core';
import { AnalysisService } from '../analysis.service';
import { StatisticsComponent } from '../statistics/statistics.component';

interface AnalysisResults {
  ekmanEmotion: string | null;
  personalityTrait: string | null;
  sentiment: string | null;
  age: string | null;
  gender: string | null;
}

@Component({
  selector: 'app-main-interface',
  templateUrl: './main-interface.component.html'
})
export class MainInterfaceComponent implements OnInit {
  public inputText: string = '';
  public result: string | null = null;
  public analysisResults: AnalysisResults = {
    ekmanEmotion: null,
    personalityTrait: null,
    sentiment: null,
    age: null,
    gender: null
  };
  
  
  constructor(private analysisService: AnalysisService) {}
  ngOnInit(): void {
  }

  analyzeText(): void {
    this.analyzeEkmanEmotion(1, this.inputText);
    this.analyzePersonality(1, this.inputText);
    this.analyzeSentiment(1, this.inputText);
    this.analyzeAge(1, this.inputText);
    this.analyzeGender(1, this.inputText);
  }

  analyzeEkmanEmotion(id: any, text: string): void {
    this.analysisService.analyzeEkmanEmotion(id, text).subscribe({
      next: (response) => {
        this.result = `Prediction: ${response.data[0].predictions[0].prediction}, Probability: ${response.data[0].predictions[0].probability}`;
        console.log('Analysis completed:', this.result);
      },
      error: (error) => {
        console.error('Error during analysis:', error);
        this.result = 'Failed to analyze gender';
      }
    });
  }

  analyzePersonality(id: any, text: string): void {
    this.analysisService.analyzePersonality(id, text).subscribe({
      next: (response) => {
        this.result = `Prediction: ${response.data[0].predictions[0].prediction}, Probability: ${response.data[0].predictions[0].probability}`;
        console.log('Analysis completed:', this.result);
      },
      error: (error) => {
        console.error('Error during analysis:', error);
        this.result = 'Failed to analyze gender';
      }
    });
  }

  analyzeSentiment(id: any, text: string): void {
    this.analysisService.analyzeSentiment(id, text).subscribe({
      next: (response) => {
        this.result = `Prediction: ${response.data[0].predictions[0].prediction}, Probability: ${response.data[0].predictions[0].probability}`;
        console.log('Analysis completed:', this.result);
      },
      error: (error) => {
        console.error('Error during analysis:', error);
        this.result = 'Failed to analyze gender';
      }
    });
  }

  analyzeAge(id: any, text: string): void {
    this.analysisService.analyzeAge(id, text).subscribe({
      next: (response) => {
        this.result = `Prediction: ${response.data[0].predictions[0].prediction}, Probability: ${response.data[0].predictions[0].probability}`;
        console.log('Analysis completed:', this.result);
      },
      error: (error) => {
        console.error('Error during analysis:', error);
        this.result = 'Failed to analyze gender';
      }
    });
  }

  analyzeGender(id: any, text: string): void {
    this.analysisService.analyzeGender(id, text).subscribe({
      next: (response) => {
        this.result = `Prediction: ${response.data[0].predictions[0].prediction}, Probability: ${response.data[0].predictions[0].probability}`;
        console.log('Analysis completed:', this.result);
      },
      error: (error) => {
        console.error('Error during analysis:', error);
        this.result = 'Failed to analyze gender';
      }
    });
  }

  

}
