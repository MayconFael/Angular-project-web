import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user : User;
  users : User[]=[];

  constructor() {
    this.user = new User();
  }
  ngOnInit(): void {
  }

  
}
