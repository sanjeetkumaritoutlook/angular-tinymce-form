import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { ProfileFormComponent } from './profile-form/profile-form.component'; // Import the feature module
import { ExampleComponent } from './example/example.component';
import {UserDetailsComponent} from './user/user-details/user-details.component';
const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'editor', component: EditorComponent },          // Route for EditorModule
  { path: 'profile-form', component: ProfileFormComponent },          // Route for ProfileFormComponent
  { path: '**', component: ExampleComponent },
  { path: 'user-details', component: UserDetailsComponent }  //this is from feature module
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
