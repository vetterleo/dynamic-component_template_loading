import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AdminComponent } from './admin/admin.component';
import { StandardComponent } from './standard/standard.component';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-outlet',
  standalone: true,
  imports: [ MatCheckboxModule, FormsModule, CommonModule, MatTabsModule ],
  templateUrl: './outlet.component.html',
  styleUrl: './outlet.component.scss',
})
export class OutletComponent {

  isAdmin = false

  getComponent() {
    return this.isAdmin ? AdminComponent : StandardComponent;
  }

}
