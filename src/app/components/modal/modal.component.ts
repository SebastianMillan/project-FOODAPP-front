import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientDetailResponse } from '../../models/client-detail.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  @ViewChild('miModal') miModal!: ElementRef;
  @Input() usuarioLogueado!: ClientDetailResponse;

  constructor(private modalService: NgbModal) { }



  open(modal: any) {
    this.modalService.open(modal,
      {
        keyboard: false,
        size: 'sm',
        backdrop: false,

        scrollable: true
      });
  }
}
