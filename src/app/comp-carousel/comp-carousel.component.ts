import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-carousel',
  templateUrl: './comp-carousel.component.html',
  styleUrls: ['./comp-carousel.component.css']
})
export class CompCarouselComponent implements OnInit {

  topics: any[] = [];

  constructor() {}

  ngOnInit() {
    this.topics = [
      {nom: 'datas', photoUrl: '../../assets/icones/archive.svg', description: 'of firms only reckon that their datas are safe', pourcentage: '27%'},
      {nom: 'cyberthreats', photoUrl: '../../assets/icones/ordinateur.svg', description: 'of SMB have already been cyber-attacked in France', pourcentage: '74%'},
      {nom: 'attacks', photoUrl: '../../assets/icones/building.svg', description: 'attacks on average per year against every firm', pourcentage: '29'},
      {nom: 'money', photoUrl: '../../assets/icones/euro.svg', description: 'euros lost on average per cyberattack', pourcentage: '25 600'},
    ];
  }
}
