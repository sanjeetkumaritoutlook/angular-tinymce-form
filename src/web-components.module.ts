import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Allow Web Components
  entryComponents: [FormOneComponent, FormTwoComponent]
})
export class WebComponentsModule {}
