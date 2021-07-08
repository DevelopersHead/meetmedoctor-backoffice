import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMenuItem } from 'src/app/core/models/IMenuItem';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient: HttpClient) { }

  public get(): Observable<Array<IMenuItem>> {
      return this.httpClient.get("http://localhost:5000/api/menuitem") as Observable<IMenuItem[]>;
  }
}
