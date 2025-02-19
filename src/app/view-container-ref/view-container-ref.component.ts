import { Component } from '@angular/core';
import { InnerItemComponent } from './inner-item/inner-item.component';
import { InnerItem2Component } from './inner-item-2/inner-item-2.component';

@Component({
  selector: 'app-view-container-ref',
  standalone: true,
  imports: [ InnerItemComponent, InnerItem2Component ],
  templateUrl: './view-container-ref.component.html',
  styleUrl: './view-container-ref.component.scss'
})
export class ViewContainerRefComponent {

}
