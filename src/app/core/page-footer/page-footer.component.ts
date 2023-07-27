import { Component } from '@angular/core';
import { ModaltelephoneComponent } from '../../modals/modaltelephone/modaltelephone.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.css']
})

export class PageFooterComponent {
  
  modalRef: MdbModalRef<ModaltelephoneComponent> | null = null 
  /*Le null = null sert à appeler le "modalRef" du module de la Modaletelephone mais sans lui attribuer de valeur de suite pour pouvoir la modifier ensuite. */

  constructor(private modalService: MdbModalService) {}
  /*modalService sert à initialiser une instance de MdbModalService afin de pouvoir manipuler ma modale.*/ 

  openModal() {
    this.modalRef = this.modalService.open(ModaltelephoneComponent)
  }
  /*Utiliser "modalService" pour donner à "modalRef" la valeur de la modale de la pop up et ouvrir la ModaltelephoneComponent*/

}
