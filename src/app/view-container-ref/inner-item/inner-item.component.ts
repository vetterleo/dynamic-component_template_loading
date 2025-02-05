import { Component, ViewContainerRef } from '@angular/core';
import { LeafContentComponent } from '../leaf-content/leaf-content.component';

@Component({
  selector: 'app-inner-item',
  standalone: true,
  imports: [],
  templateUrl: './inner-item.component.html',
  styleUrl: './inner-item.component.scss'
})
export class InnerItemComponent {

  constructor(private viewContainer: ViewContainerRef) {}

  loadContent() {
    this.viewContainer.createComponent(LeafContentComponent);
  }

}
