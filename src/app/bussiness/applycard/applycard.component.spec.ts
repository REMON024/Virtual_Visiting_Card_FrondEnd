import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplycardComponent } from './applycard.component';

describe('ApplycardComponent', () => {
  let component: ApplycardComponent;
  let fixture: ComponentFixture<ApplycardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplycardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
