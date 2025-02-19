import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { LeafContentComponent } from '../leaf-content/leaf-content.component';

@Component({
  selector: 'app-inner-item-2',
  standalone: true,
  imports: [],
  templateUrl: './inner-item-2.component.html',
  styleUrl: './inner-item-2.component.scss'
})
export class InnerItem2Component {

  @ViewChild('innerItem2', { read: ViewContainerRef }) vc!: ViewContainerRef;

  loadContent2() {

    this.vc.createComponent(LeafContentComponent)
  }
}
