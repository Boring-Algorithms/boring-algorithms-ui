import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestExecutionsComponent } from './test-executions.component';

describe('TestExecutionsComponent', () => {
  let component: TestExecutionsComponent;
  let fixture: ComponentFixture<TestExecutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestExecutionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestExecutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
