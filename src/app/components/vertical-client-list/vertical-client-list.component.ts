import { Component, Input } from '@angular/core';
import { ClientCardResponse } from '../../models/client-card.interface';

@Component({
  selector: 'app-vertical-client-list',
  templateUrl: './vertical-client-list.component.html',
  styleUrl: './vertical-client-list.component.css'
})
export class VerticalClientListComponent {
  @Input() listClient: ClientCardResponse[] | undefined;
}
