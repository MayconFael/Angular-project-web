import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from '../models/user.model';

const URL = "http://localhost:8181/api"

@Injectable()
export class UserService {

    constructor(private http: HttpClient) {

    }

    public create(user: User): Observable<User> {
        return this.http.post<User>(`${URL}/users`, user);
    }

    public findAll() {
        return this.http.get<User[]>(`${URL}/users`);
    }
}