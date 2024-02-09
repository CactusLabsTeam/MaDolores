import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailagriculturaComponent } from './detailagricultura.component';

describe('DetailagriculturaComponent', () => {
  let component: DetailagriculturaComponent;
  let fixture: ComponentFixture<DetailagriculturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailagriculturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailagriculturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
