import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import {UserServiceService} from './user-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog app'
 
  parentFunction(data){
    console.log(data)
  }
  constructor(
    private vcr:ViewContainerRef,
    private cfr:ComponentFactoryResolver)
    {
    }

  SaveValue(formValue)
  {
      console.log(formValue)
  }

  async loadAdmin()
  {
    this.vcr.clear();
    const {AdminlistComponent} = await import('./adminlist/adminlist.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(AdminlistComponent)
    )
  }

  async loadUser()
  {
    this.vcr.clear();
    const {UserlistComponent} = await import('./userlist/userlist.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(UserlistComponent)
    )
  }

  
}
