import { Routes } from '@angular/router';
import { OutletComponent } from './outlet/outlet.component';
import { ViewContainerRefComponent } from './view-container-ref/view-container-ref.component';
import { EmbeddedViewComponent } from './embedded-view/embedded-view.component';
import { ComponentRefComponent } from './component-ref/component-ref.component';

export const routes: Routes = [
  {
    path: 'ng-outlet',
    component: OutletComponent

  },
  {
    path: 'view-container-ref',
    component: ViewContainerRefComponent
  },
  {
    path: 'embedded-view',
    component: EmbeddedViewComponent
  },
  {
    path: 'component-ref',
    component: ComponentRefComponent
  }
];
