import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private UsersUrl = 'https://reqres.in/api/users?page={page}';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Array<User>> {
    const page = 1;
    const url = this.UsersUrl.replace('{page}', page.toString());

    return this.http.get<{ data: Array<User> }>(url).pipe(
      map((response: any) => {
        console.log(response.data);
        return response.data;
      })
    );
  }

  getUserById(id: number): Observable<User> {
    const url = `https://reqres.in/api/users/${id}`;

    return this.http.get<{ data: User }>(url).pipe(
      map((response: any) => {
        console.log(response.data);
        return response.data;
      })
    );
  }
}
