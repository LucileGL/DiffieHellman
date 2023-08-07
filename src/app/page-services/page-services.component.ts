import {Component} from '@angular/core';

@Component({
  selector: 'app-page-services',
  templateUrl: './page-services.component.html',
  styleUrls: ['./page-services.component.css'],
})
export class PageServicesComponent {

  visible = false;

  constructor() { }

  toggleCollapse(): void {
    this.visible = !this.visible;
  }

}