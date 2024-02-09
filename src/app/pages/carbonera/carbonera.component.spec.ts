import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarboneraComponent } from './carbonera.component';

describe('CarboneraComponent', () => {
  let component: CarboneraComponent;
  let fixture: ComponentFixture<CarboneraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarboneraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarboneraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
