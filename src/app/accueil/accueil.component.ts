import { Component } from '@angular/core';
import * as constantes from '../shared/constants';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {

  introduction: string = constantes.INTRODUCTION;
  ManagersNumber : string = constantes.MANAGERSNUMBER;

}
