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
import { ExampleComponent } from './example/example.component';
import { FormOneComponent } from './web-components/form-one/form-one.component';
import { FormTwoComponent } from './web-components/form-two/form-two.component';
import { GridOneComponent } from './grid-one/grid-one.component';
import { HttpClientModule } from '@angular/common/http';
import { UsernameCheckComponent } from './username-check/username-check.component'; // Import the feature module
import { AgGridModule } from 'ag-grid-angular';
import { GridRowActionsComponent } from './grid-row-actions/grid-row-actions.component';
import { GridTwoComponent } from './grid-two/grid-two.component';
import { GridStatusCellComponent } from './grid-status-cell/grid-status-cell.component'; // Angular Data Grid Component
@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    ProfileFormComponent,
    ExampleComponent,
    FormOneComponent,
    FormTwoComponent,
    UsernameCheckComponent,
    GridOneComponent,
    GridRowActionsComponent,
    GridTwoComponent,
    GridStatusCellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule,
    AgGridModule, 
    HttpClientModule,
    UserModule // Add it here
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
