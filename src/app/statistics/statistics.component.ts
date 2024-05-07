import { Component, OnInit } from '@angular/core';

interface Model {
  name: string;
  imageUrl: string;  
}

interface Source {
  name: string;
  imageUrl: string;  
}


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  humano_maquina_image: string = './assets/logos/humano_maquina.png';

  constructor() { }

  ngOnInit(): void {
  }

  models: Model[] = [
    { name: 'ChatGPT', imageUrl: './assets/logos/chatGPTLogo.png' },
    { name: 'Cohere', imageUrl: './assets/logos/cohereLogo.png' },
    { name: 'Davinci', imageUrl: './assets/logos/davinciLogo.png' },
    { name: 'Bloomz', imageUrl: './assets/logos/bloomzLogo.jpeg' },
    { name: 'Dolly', imageUrl: './assets/logos/dollyLogo.png' }
  ].sort((a, b) => a.name.localeCompare(b.name));

  sources: Source[] = [
    { name: 'Wikipedia', imageUrl: './assets/logos/wikipediaLogo.jpeg' },
    { name: 'Wikihow', imageUrl: './assets/logos/wikiHowLogo.png' },
    { name: 'Peerread', imageUrl: './assets/logos/peerreadLogo.png' },
    { name: 'Reddit', imageUrl: './assets/logos/redditLogo.png' },
    { name: 'Arxiv', imageUrl: './assets/logos/arxivLogo.png' }
  ].sort((a, b) => a.name.localeCompare(b.name));

}
