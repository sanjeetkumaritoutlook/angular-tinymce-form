import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'details', component: UserDetailsComponent }
];
//created  UserRoutingModule inside the UserModule to define feature-specific routes
//and then import this file in user.module.ts
@NgModule({
 
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class UserRoutingModule { }  //this is new file manually created
