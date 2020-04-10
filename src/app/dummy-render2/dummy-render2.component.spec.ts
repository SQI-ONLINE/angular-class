import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyRender2Component } from './dummy-render2.component';

describe('DummyRender2Component', () => {
  let component: DummyRender2Component;
  let fixture: ComponentFixture<DummyRender2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyRender2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyRender2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
