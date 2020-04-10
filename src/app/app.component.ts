import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { DummyRenderComponent } from './dummy-render/dummy-render.component';
import { DummyRender2Component } from './dummy-render2/dummy-render2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-class';
  @ViewChild('container', {read: ViewContainerRef}) private container: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public mapper = {project1: DummyRenderComponent, project2: DummyRender2Component}


  render(id){
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.getComponent(`project${id}`));
    const viewContainerRef = this.container;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    // (<CardTemplateBaseComponent>componentRef.instance).data = this.data;
  }

  getComponent(id){
    return this.mapper[id]
  }
}
