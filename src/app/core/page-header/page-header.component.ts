import { Component } from '@angular/core';
import * as constantes from '../../shared/constants';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent {

  title: string = constantes.TITLE;

}
