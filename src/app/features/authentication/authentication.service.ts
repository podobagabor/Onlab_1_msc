import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUser, User, UserCreate } from 'src/app/shared/models';

@Injectable({
  providedIn: 'any',
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}

  login(
    user: LoginUser
  ): Observable<{
    succeeded: Boolean;
    isLockedOut: Boolean;
    isNotAllowed: Boolean;
    requiresTwoFactor: Boolean;
  }> {
    return this.httpClient.post<{
      succeeded: Boolean;
      isLockedOut: Boolean;
      isNotAllowed: Boolean;
      requiresTwoFactor: Boolean;
    }>('https://localhost:7158/api/User/login', user);
  }

  registration(user: UserCreate): Observable<{ succeeded: Boolean }> {
    const formData = new FormData();
    formData.append('email', user.email);
    formData.append('name', user.name);
    formData.append('password', user.password);
    formData.append('userName', user.userName);
    if(user.photo) {
      formData.append('photo', user.photo);
    }
    return this.httpClient.post<{ succeeded: Boolean }>(
      'https://localhost:7158/api/User/register',
      formData
    );
  }

  getUser(userId: number): Observable<User> {
    return this.httpClient.get<User>("https://localhost:7158/api/User/findUser?id=" + userId.toString());
  }

  currentUser(): Observable<User> {
    return this.httpClient.get<User>("")
  }
}
