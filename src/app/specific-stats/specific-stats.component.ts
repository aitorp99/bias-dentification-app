import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export class Model {
  name: string = '';
  imageUrl: string = '';
  observations: string = '';
  useCases: string[] = [];
}

@Component({
  selector: 'app-specific-stats',
  templateUrl: './specific-stats.component.html',
  styleUrls: ['./specific-stats.component.scss']
})
export class SpecificStatsComponent implements OnInit {
  modelName: string = '';
  sourceName: string = '';
  modelData: Model | undefined;
  statsTypes: string[] = ['emotion', 'personality', 'sentiment', 'age', 'gender'];
  shownStatsTypes: { [key: string]: string } = {
    emotion: 'Emoción',
    personality: 'Personalidad',
    sentiment: 'Sentimiento',
    age: 'Edad',
    gender: 'Género'
  };

  models: Model[] = [
    {
      name: 'Bloomz',
      imageUrl: './assets/logos/bloomzLogo.jpeg',
      observations: 'Tiene un equilibrio entre varias emociones y es particularmente racional, con una notable inclinación hacia grupos de edad mayores y un equilibrio de género que se acerca más a fuentes como Wikihow y Wikipedia.',
      useCases: ['Educación para adultos', 'Asistente para guías']
    },
    {
      name: 'ChatGPT',
      imageUrl: './assets/logos/chatGPTLogo.png',
      observations: 'Tiene una fuerte inclinación hacia el positivismo y la racionalidad, con una distribución que favorece un enfoque optimista.',
      useCases: ['Atención al cliente', 'Creación de publicidad']
    },
    {
      name: 'Cohere',
      imageUrl: './assets/logos/cohereLogo.png',
      observations: 'Predominantemente racional y neutro en emociones, con una fuerte inclinación hacia audiencias más adultas.',
      useCases: ['Investigación Académica', 'Publicaciones técnicas']
    },
    {
      name: 'Davinci',
      imageUrl: './assets/logos/davinciLogo.png',
      observations: 'Destaca por su capacidad para manejar información de manera racional y objetiva, lo que lo hace ideal para áreas que requieran un enfoque metódico.',
      useCases: ['Desarrollo de Contenido Académico', 'Análisis de Datos y Reportes']
    },
    {
      name: 'Dolly',
      imageUrl: './assets/logos/dollyLogo.png',
      observations: 'Tiene un buen equilibrio emocional con una inclinación hacia la alegría y el miedo, lo que puede ser apreopiado para un público más joven',
      useCases: ['Marketing y publicidad dirigida a jóvenes', 'Aplicaciones educativas para niños']
    },
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.modelName = params['modelName']; // Capture the model name from URL parameter
      this.modelData = this.models.find(model => model.name === this.modelName);

    });
  }

  getImageUrl(statType: string): string {
    const url = `./assets/modelos/${this.modelName}/${statType}${this.modelName}.png`;
    console.log(url);
    return url;
  }
  

}
