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
          console.log('Ekman Emotion Analysis completed:', this.analysisResults.ekmanEmotion, 'with probability', response.data[0].probability);
        } else {
          console.error('Received unexpected response or no data:', response);
          this.analysisResults.ekmanEmotion = 'No data received';
        }
      },
      error: (error) => {
        console.error('Error during Ekman Emotion analysis:', error);
        this.analysisResults.ekmanEmotion = 'Analysis failed';
      }
    });
  }
  
  analyzePersonality(id: string, text: string, language: string): void {
    this.analysisService.analyzePersonality(id, text, language).subscribe({
      next: (response) => {
        // Asegúrate de que la respuesta contiene los datos esperados y que es exitosa
        if (response.success && response.data) {
          this.analysisResults.personalityTrait = response.data[0].prediction;
          console.log('Personality Analysis completed:', this.analysisResults.personalityTrait, 'with probability', response.data[0].probability);
        } else {
          console.error('Received unexpected response or no data:', response);
          this.analysisResults.personalityTrait = 'No data received';
        }
      },
      error: (error) => {
        console.error('Error during Personality analysis:', error);
        this.analysisResults.personalityTrait = 'Analysis failed';
      }
    });
  }
  
  analyzeSentiment(id: string, text: string, language: string): void {
    this.analysisService.analyzeSentiment(id, text, language).subscribe({
      next: (response) => {
        // Asegúrate de que la respuesta contiene los datos esperados y que es exitosa
        if (response.success && response.data) {
          this.analysisResults.sentiment = response.data[0].prediction;
          console.log('Sentiment Analysis completed:', this.analysisResults.sentiment, 'with probability', response.data[0].probability);
        } else {
          console.error('Received unexpected response or no data:', response);
          this.analysisResults.sentiment = 'No data received';
        }
      },
      error: (error) => {
        console.error('Error during Sentiment analysis:', error);
        this.analysisResults.sentiment = 'Analysis failed';
      }
    });
  }

  

  analyzeAge(id: string, text: string, language: string): void {
    this.analysisService.analyzeAge(id, text, language).subscribe({
      next: (response) => {
        // Asegúrate de que la respuesta contiene los datos esperados y que es exitosa
        if (response.success && response.data) {
          this.analysisResults.age = response.data[0].prediction;
          console.log('Age Analysis completed:', this.analysisResults.age, 'with probability', response.data[0].probability);
        } else {
          console.error('Received unexpected response or no data:', response);
          this.analysisResults.age = 'No data received';
        }
      },
      error: (error) => {
        console.error('Error during Age analysis:', error);
        this.analysisResults.age = 'Analysis failed';
      }
    });
  }

  analyzeGender(id: string, text: string, language: string): void {
    this.analysisService.analyzeGender(id, text, language).subscribe({
      next: (response) => {
        // Asegúrate de que la respuesta contiene los datos esperados y que es exitosa
        if (response.success && response.data) {
          this.analysisResults.gender = response.data[0].prediction;
          console.log('Gender analysis completed:', this.analysisResults.gender, 'with probability', response.data[0].probability);
        } else {
          console.error('Received unexpected response or no data:', response);
          this.analysisResults.gender = 'No data received';
        }
      },
      error: (error) => {
        console.error('Error during Gedner analysis:', error);
        this.analysisResults.gender = 'Analysis failed';
      }
    });
  }
  

  

}
