import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor() { }
  conponentName = "test";
  sum(a, b){
    return a + b;
  }
  ngOnInit(): void {
  }

}
