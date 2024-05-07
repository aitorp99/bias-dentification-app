import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export class Source {
  name: string = '';
  imageUrl: string = '';
  observations: string = '';
}

@Component({
  selector: 'app-source-stats',
  templateUrl: './source-stats.component.html',
  styleUrls: ['./source-stats.component.scss']
})
export class SourceStatsComponent implements OnInit {

  sourceName: string = '';
  sourceData: Source | undefined;
  statsTypes: string[] = ['emotion', 'personality', 'sentiment', 'age', 'gender'];
  shownStatsTypes: { [key: string]: string } = {
    emotion: 'Emoción',
    personality: 'Personalidad',
    sentiment: 'Sentimiento',
    age: 'Edad',
    gender: 'Género'
  };

  sources: Source[] = [
    {
      name: 'Arxiv',
      imageUrl: './assets/logos/bloomzLogo.jpeg',
      observations: 'Tiene un equilibrio entre varias emociones y es particularmente racional, con una notable inclinación hacia grupos de edad mayores. Trás analizar las fuentes y los modelos, se llega a la conclusión de que es probalble que las siguientes fuentes hayan tenido un peso significante en el entrenamiento de Bloomz: Arxiv y Peerread por su enfoque académico y racional, y Wikihow por su balance de género'
    }, 
    {
      name: 'Peerread',
      imageUrl: './assets/logos/chatGPTLogo.png',
      observations: 'Es un modelo que tiende hacia el positivismo y la racionalidad, con un equilibrio de género y de edad que favorece un enfoque optimista. Trás analizar las fuentes y los modelos, se llega a la conclusión de que es probalble que las siguientes fuentes hayan tenido un peso significante en el entrenamiento de chatGPT: Wikipedia, por su alto contenido positivo y equilibrado, y Peerread, por su enfoque racional'
    },
    {
      name: 'Reddit',
      imageUrl: './assets/logos/cohereLogo.png',
      observations: 'Predominantemente racional y neutro en emociones, con una fuerte inclinación hacia audiencias más adultas. Trás analizar las fuentes y los modelos, se llega a la conclusión de que es probalble que las siguientes fuentes hayan tenido un peso significante en el entrenamiento de cohere: Wikipedia y Arxiv, por su alto contenido racional y educativo, lo cual es ideal para entornos informativos.'
    },
    { 
      name: 'Wikihow',
      imageUrl: './assets/logos/davinciLogo.png',
      observations: 'Destaca por su capacidad para manejar información de manera racional y objetiva, lo que lo hace ideal para áreas que requieran un enfoque metódico. Trás analizar las fuentes y los modelos, se llega a la conclusión de que es probalble que las siguientes fuentes hayan tenido un peso significante en el entrenamiento de Davinci: Wikipedia por su contenido informativo y positivo, y Arxiv por su peso racional y académico.'
    },
    {
      name: 'Wikipedia',
      imageUrl: './assets/logos/dollyLogo.png',
      observations: 'Tiene un buen equilibrio emocional con una inclinación hacia la alegría y el miedo, lo que puede ser apreopiado para un público más joven. Trás analizar las fuentes y los modelos, se llega a la conclusión de que es probalble que las siguientes fuentes hayan tenido un peso significante en el entrenamiento de Dolly:'
    },
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.sourceName = params['sourceName'];
      console.log(this.sourceName);
      this.sourceData = this.sources.find(source => source.name === this.sourceName);

    });
  }

  getImageUrl(statType: string): string {
    const url = `./assets/fuentes/${this.sourceName}/${statType}${this.sourceName}.png`;
    console.log(url);
    return url;
  }

}
