import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInputsComponent } from './test-inputs.component';

describe('TestInputsComponent', () => {
  let component: TestInputsComponent;
  let fixture: ComponentFixture<TestInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
