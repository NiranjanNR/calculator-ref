import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubComponent } from './sub.component';

describe('SubComponent', () => {
  let component: SubComponent;
  let fixture: ComponentFixture<SubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subtract properly', () => {
    component.input1 = 5;
    component.input2 = 5;
    component.sub();
    expect(component.result).toEqual(0);
  });
});
