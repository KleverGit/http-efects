import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlCommon = 'https://reqres.in/api';

  constructor(private httpClient: HttpClient) {

  }

  getUsers() {
    return this.httpClient.get(`${this.urlCommon}/users?per_page=6`).pipe(
      map(
        resp => {
          return resp['data'];
        }
      )
    );
  }

}
