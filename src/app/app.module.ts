import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { DummyRenderComponent } from './dummy-render/dummy-render.component';
import { DummyRender2Component } from './dummy-render2/dummy-render2.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhoneValidatorDirective } from './phone-validator.directive';
import { EmailValidatorDirective } from './email-validator.directive';
import { FormValidateComponent } from './form-validate/form-validate.component';
import { WorkMailValidatorDirective } from './work-mail-validator.directive';
import { PipeClassComponent } from './pipe-class/pipe-class.component';
import { ExpPipe } from './exp.pipe';
import { TodoFilterPipe } from './todo-filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    TodoComponent,
    NotFoundComponent,
    TodoDetailComponent,
    DummyRenderComponent,
    DummyRender2Component,
    FormsComponent,
    PhoneValidatorDirective,
    EmailValidatorDirective,
    FormValidateComponent,
    WorkMailValidatorDirective,
    PipeClassComponent,
    ExpPipe,
    TodoFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
