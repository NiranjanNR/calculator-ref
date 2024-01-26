import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulComponent } from './mul.component';

describe('MulComponent', () => {
  let component: MulComponent;
  let fixture: ComponentFixture<MulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MulComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should multiply properly', () => {
    component.input1 = 5;
    component.input2 = 5;
    component.mul();
    expect(component.result).toEqual(25);
  });
});
