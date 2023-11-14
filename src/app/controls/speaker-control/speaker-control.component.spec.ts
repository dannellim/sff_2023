import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerControlComponent } from './speaker-control.component';

describe('SpeakerControlComponent', () => {
  let component: SpeakerControlComponent;
  let fixture: ComponentFixture<SpeakerControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeakerControlComponent]
    });
    fixture = TestBed.createComponent(SpeakerControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
