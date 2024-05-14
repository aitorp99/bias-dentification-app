import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export class Source {
  name: string = '';
  imageUrl: string = '';
  observations: string = '';
  definition: string = '';
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
      imageUrl: './assets/logos/arxivLogo.png',
      observations: 'Tiene un equilibrio entre varias emociones y es particularmente racional, con una notable inclinación hacia grupos de edad mayores. Trás analizar las fuentes y los modelos, se llega a la conclusión de que es probalble que las siguientes fuentes hayan tenido un peso significante en el entrenamiento de Bloomz: Arxiv y Peerread por su enfoque académico y racional, y Wikihow por su balance de género',
      definition: 'ArXiv es un repositorio de acceso abierto para artículos científicos prepublicados en una variedad de áeras incluyendo campos como las matemáticas, física, ciencias de la computación, estadística, etc. Fué fundado en 1991 por Paul Ginsparg, y se ha convertido en una herramienta importante donde los científicos comparten sus investigaciones antes de su publicarlas en revistas.'
    }, 
    {
      name: 'Peerread',
      imageUrl: './assets/logos/peerreadLogo.png',
      observations: 'Es un modelo que tiende hacia el positivismo y la racionalidad, con un equilibrio de género y de edad que favorece un enfoque optimista. Trás analizar las fuentes y los modelos, se llega a la conclusión de que es probalble que las siguientes fuentes hayan tenido un peso significante en el entrenamiento de chatGPT: Wikipedia, por su alto contenido positivo y equilibrado, y Peerread, por su enfoque racional',
      definition: 'PeerRead es un repositorio que ofrece acceso a artículos pre-revisados y revisados por pares en el campo de la ciencia de la computación. Fue diseñado para permitir a investigadores y académicos compartir sus manuscritos para obtener feedback antes de enviarlos a las revistas científicas. Además, sirve como una plataforma para fomentar la discusión y mejorar la calidad de la investigación antes de la publicación oficial.'
    },
    {
      name: 'Reddit',
      imageUrl: './assets/logos/redditLogo.png',
      observations: 'Predominantemente racional y neutro en emociones, con una fuerte inclinación hacia audiencias más adultas. Trás analizar las fuentes y los modelos, se llega a la conclusión de que es probalble que las siguientes fuentes hayan tenido un peso significante en el entrenamiento de cohere: Wikipedia y Arxiv, por su alto contenido racional y educativo, lo cual es ideal para entornos informativos.',
      definition: 'Reddit es una plataforma de publicación de noticias y discusiones en línea, donde los usuarios pueden enviar contenido como enlaces, textos y fotos, los cuales posteriormente son votados por la comunidad. La plataforma está organizada en subforos conocidos como "subreddits", cada uno centrado en un tema específico, que va desde temas generales como noticias o tecnología hasta nichos muy específicos como hobbies o intereses particulares.'
    },
    { 
      name: 'Wikihow',
      imageUrl: './assets/logos/wikihowLogo.png',
      observations: 'Destaca por su capacidad para manejar información de manera racional y objetiva, lo que lo hace ideal para áreas que requieran un enfoque metódico. Trás analizar las fuentes y los modelos, se llega a la conclusión de que es probalble que las siguientes fuentes hayan tenido un peso significante en el entrenamiento de Davinci: Wikipedia por su contenido informativo y positivo, y Arxiv por su peso racional y académico.',
      definition: 'WikiHow es una plataforma que ofrece guías paso a paso sobre cómo realizar una variedad de tareas y actividades. Con el objetivo de ayudar a las personas a aprender cómo hacer "cualquier cosa", cada artículo en WikiHow ha sido escrito y revisado por voluntarios para garantizar que es preciso y fácil de seguir.'
    },
    {
      name: 'Wikipedia',
      imageUrl: './assets/logos/wikipediaLogo.jpeg',
      observations: 'Tiene un buen equilibrio emocional con una inclinación hacia la alegría y el miedo, lo que puede ser apreopiado para un público más joven. Trás analizar las fuentes y los modelos, se llega a la conclusión de que es probalble que las siguientes fuentes hayan tenido un peso significante en el entrenamiento de Dolly:',
      definition: 'Wikipedia es una enciclopedia en línea libre y de acceso gratuito. Es el proyecto más grande y popular de la Fundación Wikimedia y se basa en que el conocimiento debe ser accesible para todos. Sus contenidos están disponibles en múltiples idiomas y cubren una amplia gama de temas, desde la historia y la ciencia hasta el arte y la cultura.'
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
