import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSpecialComponent } from './admin-special.component';

describe('AdminSpecialComponent', () => {
  let component: AdminSpecialComponent;
  let fixture: ComponentFixture<AdminSpecialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSpecialComponent]
    });
    fixture = TestBed.createComponent(AdminSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
