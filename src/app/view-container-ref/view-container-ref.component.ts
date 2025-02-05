import { Component } from '@angular/core';
import { InnerItemComponent } from './inner-item/inner-item.component';

@Component({
  selector: 'app-view-container-ref',
  standalone: true,
  imports: [ InnerItemComponent ],
  templateUrl: './view-container-ref.component.html',
  styleUrl: './view-container-ref.component.scss'
})
export class ViewContainerRefComponent {

}
