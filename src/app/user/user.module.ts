import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {UserRoutingModule} from './user-routing.module';


@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule  // Import the routing module
  ],
  exports: [
    UserDetailsComponent  //If other modules need to use these components, add them to the exports array    
  ]
})
export class UserModule { }
