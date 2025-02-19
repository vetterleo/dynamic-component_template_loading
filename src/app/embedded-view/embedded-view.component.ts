import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-embedded-view',
  standalone: true,
  imports: [],
  templateUrl: './embedded-view.component.html',
  styleUrl: './embedded-view.component.scss'
})
export class EmbeddedViewComponent implements AfterViewInit {


  @ViewChild('embeddedTemplate') tpl!: TemplateRef<any>;
  @ViewChild('myContainer', { read: ViewContainerRef }) vc!: ViewContainerRef;

  ngAfterViewInit(): void {
    this.vc.createEmbeddedView(this.tpl);
  }
}
