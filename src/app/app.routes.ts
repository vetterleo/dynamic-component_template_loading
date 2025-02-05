import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { OutletComponent } from './outlet/outlet.component';
import { ViewContainerRefComponent } from './view-container-ref/view-container-ref.component';

export const routes: Routes = [
  {
    path: 'ng-outlet',
    component: OutletComponent

  },
  {
    path: 'view-container-ref',
    component: ViewContainerRefComponent
  }
];
