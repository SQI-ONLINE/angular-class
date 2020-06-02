import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeMakeupClassComponent } from './pipe-makeup-class.component';

describe('PipeMakeupClassComponent', () => {
  let component: PipeMakeupClassComponent;
  let fixture: ComponentFixture<PipeMakeupClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeMakeupClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeMakeupClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
