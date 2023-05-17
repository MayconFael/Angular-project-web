import {
  Component,
  OnInit,
} from '@angular/core';

import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  users: User[] = [];

  constructor(private service: UserService) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    return this.service.findAll().subscribe(res => {
      this.users = res;
      console.log(res);
    })
  }

  public gravar() {
    return this.service.create(this.user).subscribe(res => {
      console.log("gravado...");
      this.listar();
    })
  }
}