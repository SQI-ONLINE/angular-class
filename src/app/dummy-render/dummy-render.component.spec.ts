import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyRenderComponent } from './dummy-render.component';

describe('DummyRenderComponent', () => {
  let component: DummyRenderComponent;
  let fixture: ComponentFixture<DummyRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
