import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { ProfileFormComponent } from './profile-form/profile-form.component'; // Import the feature module
import { ExampleComponent } from './example/example.component';
import {UserDetailsComponent} from './user/user-details/user-details.component';
import { FormOneComponent } from './web-components/form-one/form-one.component';
import { FormTwoComponent } from './web-components/form-two/form-two.component';
const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'editor', component: EditorComponent },          // Route for EditorModule
  { path: 'profile-form', component: ProfileFormComponent },   
  { path: 'user-details', component: UserDetailsComponent },  //this is from feature module
  { path: 'microui-one', component: FormOneComponent },
  { path: 'microui-two', component: FormTwoComponent },       // Route for ProfileFormComponent
  { path: '**', component: ExampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
