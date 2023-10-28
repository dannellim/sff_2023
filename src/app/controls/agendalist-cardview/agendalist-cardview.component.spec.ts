import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendalistCardviewComponent } from './agendalist-cardview.component';

describe('AgendalistCardviewComponent', () => {
  let component: AgendalistCardviewComponent;
  let fixture: ComponentFixture<AgendalistCardviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendalistCardviewComponent]
    });
    fixture = TestBed.createComponent(AgendalistCardviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
