import { Component } from '@angular/core';
import {UserServiceService} from './user-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog app'
  data;
  parentFunction(data){
    console.log(data)
  }
  constructor(private user:UserServiceService){
    //console.log(this.user.getData())
    this.user.getData().subscribe(data=>{
      console.warn(data);
      this.data = data
    })
  }
}
