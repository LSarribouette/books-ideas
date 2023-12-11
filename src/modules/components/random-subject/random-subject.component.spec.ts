import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomSubjectComponent } from './random-subject.component';

describe('RandomSubjectComponent', () => {
  let component: RandomSubjectComponent;
  let fixture: ComponentFixture<RandomSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomSubjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RandomSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
