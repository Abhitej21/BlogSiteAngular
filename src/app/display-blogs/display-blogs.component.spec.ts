import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBlogsComponent } from './display-blogs.component';

describe('DisplayBlogsComponent', () => {
  let component: DisplayBlogsComponent;
  let fixture: ComponentFixture<DisplayBlogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayBlogsComponent]
    });
    fixture = TestBed.createComponent(DisplayBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
