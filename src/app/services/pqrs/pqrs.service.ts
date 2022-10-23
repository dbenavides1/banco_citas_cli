import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PqrsService {

  constructor(
    protected http: HttpClient
  ) { }

  getPqrs(): Observable<any> {
    let route = [environment.apiUrl, 'pqrs'].join('/');
    //http://localhost:3000/pqrs
    return this.http.get(route);
  }

  getPqrsById(id: any): Observable<any> {
    let route = [environment.apiUrl, 'pqrs', id].join('/');
    //http://localhost:3000/pqrs/:id
    return this.http.get(route);
  }

  addPqrs(usr: any): Observable<any> {
    let route = [environment.apiUrl, 'pqrs'].join('/');
    //http://localhost:3000/pqrs
    return this.http.post(route, usr);
  }

  editPqrs(usr: any, id: any): Observable<any> {
    let route = [environment.apiUrl, 'pqrs', id].join('/');
    //http://localhost:3000/pqrs/:id
    return this.http.put(route, usr);
  }

  deletePqrs(id: any): Observable<any> {
    let route = [environment.apiUrl, 'pqrs', id].join('/');
    //http://localhost:3000/pqrs/:id
    return this.http.delete(route);
  }


}