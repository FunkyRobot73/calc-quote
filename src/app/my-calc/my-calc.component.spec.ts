import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCalcComponent } from './my-calc.component';

describe('MyCalcComponent', () => {
  let component: MyCalcComponent;
  let fixture: ComponentFixture<MyCalcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyCalcComponent]
    });
    fixture = TestBed.createComponent(MyCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
