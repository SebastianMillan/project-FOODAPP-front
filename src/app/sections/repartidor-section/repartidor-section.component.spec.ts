import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepartidorSectionComponent } from './repartidor-section.component';

describe('RepartidorSectionComponent', () => {
  let component: RepartidorSectionComponent;
  let fixture: ComponentFixture<RepartidorSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepartidorSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepartidorSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
