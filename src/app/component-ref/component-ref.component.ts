import { Component, ViewChild, ViewContainerRef, ComponentRef, ElementRef, TemplateRef } from '@angular/core';
import { WidgetComponent } from './widget/widget.component';
import { WeatherComponent } from './weather/weather.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-component-ref',
  standalone: true,
  imports: [ WeatherComponent, MatButtonModule ],
  templateUrl: './component-ref.component.html',
  styleUrl: './component-ref.component.scss'
})
export class ComponentRefComponent {

  @ViewChild('myContainer', { read: ViewContainerRef }) myContainer?: ViewContainerRef;
  componentRef?: ComponentRef<WidgetComponent>
   @ViewChild('content', { read: TemplateRef }) content!: TemplateRef<any>;
   @ViewChild(WeatherComponent, { read: ElementRef }) weatherComponent!: ElementRef;

  createComponent() {

    const contentView = this.myContainer?.createEmbeddedView(this.content)
    this.componentRef = this.myContainer?.createComponent(WidgetComponent, {
      projectableNodes: [ contentView?.rootNodes as Node[] ]
    });
    setTimeout(() => this.componentRef?.setInput('title', 'Strong is better'), 2000);

    this.componentRef?.instance.close.subscribe(() => this.componentRef?.destroy());
  }

  createComponent2() {
    this.componentRef = this.myContainer?.createComponent(WidgetComponent, {
      projectableNodes: [ [ this.weatherComponent.nativeElement ] ]
    });
    setTimeout(() => this.componentRef?.setInput('title', 'Strong is better'), 2000);

    this.componentRef?.instance.close.subscribe(() => this.componentRef?.destroy());
  }
}
