import { NgModule,Injector  } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormOneComponent } from './app/web-components/form-one/form-one.component';
import { FormTwoComponent } from './app/web-components/form-two/form-two.component';

@NgModule({
  declarations: [
    FormOneComponent,
    FormTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
 // schemas: [CUSTOM_ELEMENTS_SCHEMA], // Allow Web Components
  //entryComponents: [FormOneComponent, FormTwoComponent]
  providers: []
})
export class WebComponentsModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
     // Register Web Components
     const formOneElement = createCustomElement(FormOneComponent, {injector: this.injector });
     customElements.define('web-component-template', formOneElement);
 
     const formTwoElement = createCustomElement(FormTwoComponent, { injector: this.injector });
     customElements.define('web-component-reactive', formTwoElement);
  }
}
