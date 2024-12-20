import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
//version 4 works: https://www.npmjs.com/package/@tinymce/tinymce-angular
import { EditorModule } from '@tinymce/tinymce-angular';
import { UserModule } from './user/user.module';
import { EditorComponent } from './editor/editor.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { ExampleComponent } from './example/example.component'; // Import the feature module

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    ProfileFormComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule,
    UserModule // Add it here
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
