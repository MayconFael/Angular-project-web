import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from 'src/models/user.model';

const URL = "http://localhost:8282/api"

@Injectable()
export class UserService{

    constructor (private  http: HttpClient){

    }
public creat (user: User){
    return this.http.post<User>(`${URL}/users`,user)
}
}
