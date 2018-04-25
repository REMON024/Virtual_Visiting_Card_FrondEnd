import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeAdminPasswordComponent } from './change-admin-password.component';

describe('ChangeAdminPasswordComponent', () => {
  let component: ChangeAdminPasswordComponent;
  let fixture: ComponentFixture<ChangeAdminPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeAdminPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeAdminPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
