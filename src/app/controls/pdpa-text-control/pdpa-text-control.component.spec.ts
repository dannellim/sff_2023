import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdpaTextControlComponent } from './pdpa-text-control.component';

describe('PdpaTextControlComponent', () => {
  let component: PdpaTextControlComponent;
  let fixture: ComponentFixture<PdpaTextControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdpaTextControlComponent]
    });
    fixture = TestBed.createComponent(PdpaTextControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
