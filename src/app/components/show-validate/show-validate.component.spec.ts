import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowValidateComponent } from './show-validate.component';

describe('ShowValidateComponent', () => {
  let component: ShowValidateComponent;
  let fixture: ComponentFixture<ShowValidateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowValidateComponent]
    });
    fixture = TestBed.createComponent(ShowValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
