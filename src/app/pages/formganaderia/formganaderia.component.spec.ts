import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormganaderiaComponent } from './formganaderia.component';

describe('FormganaderiaComponent', () => {
  let component: FormganaderiaComponent;
  let fixture: ComponentFixture<FormganaderiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormganaderiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormganaderiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
