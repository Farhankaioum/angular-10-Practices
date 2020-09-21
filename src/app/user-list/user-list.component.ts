import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Output() parentFunction:EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    this.parentFunction.emit("Hello from child")
  }

}
