import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinboardComponent } from './pinboard.component';

describe('PinboardComponent', () => {
  let component: PinboardComponent;
  let fixture: ComponentFixture<PinboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
