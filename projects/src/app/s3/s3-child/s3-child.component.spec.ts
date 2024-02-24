import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S3ChildComponent } from './s3-child.component';

describe('S3ChildComponent', () => {
  let component: S3ChildComponent;
  let fixture: ComponentFixture<S3ChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [S3ChildComponent]
    });
    fixture = TestBed.createComponent(S3ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
