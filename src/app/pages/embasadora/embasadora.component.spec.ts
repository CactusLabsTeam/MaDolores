import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbasadoraComponent } from './embasadora.component';

describe('EmbasadoraComponent', () => {
  let component: EmbasadoraComponent;
  let fixture: ComponentFixture<EmbasadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbasadoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbasadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
