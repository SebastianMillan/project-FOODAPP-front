import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTrabajadorComponent } from './form-trabajador.component';

describe('FormTrabajadorComponent', () => {
  let component: FormTrabajadorComponent;
  let fixture: ComponentFixture<FormTrabajadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormTrabajadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
