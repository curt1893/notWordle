import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankWordComponent } from './blank-word.component';

describe('BlankWordComponent', () => {
  let component: BlankWordComponent;
  let fixture: ComponentFixture<BlankWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlankWordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
