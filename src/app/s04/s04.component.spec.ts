import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S04Component } from './s04.component';

describe('S04Component', () => {
  let component: S04Component;
  let fixture: ComponentFixture<S04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S04Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(S04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
