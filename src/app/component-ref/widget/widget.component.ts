import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss'
})
export class WidgetComponent {

  @Input() title?: string;
  @Input() close = new EventEmitter();
}
