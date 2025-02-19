import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedViewComponent } from './embedded-view.component';

describe('EmbeddedViewComponent', () => {
  let component: EmbeddedViewComponent;
  let fixture: ComponentFixture<EmbeddedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmbeddedViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmbeddedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
