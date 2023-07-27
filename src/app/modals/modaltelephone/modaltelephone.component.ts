import {Component} from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modaltelephone',
  templateUrl: './modaltelephone.component.html',
  styleUrls: ['./modaltelephone.component.css']
})
export class ModaltelephoneComponent {

  constructor(public modalRef: MdbModalRef<ModaltelephoneComponent>) {}

}