import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivComponent } from './div.component';

describe('DivComponent', () => {
  let component: DivComponent;
  let fixture: ComponentFixture<DivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should divide properly', () => {
    component.input1 = 5;
    component.input2 = 5;
    component.div();
    expect(component.result).toEqual(1);
  });
});
