import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  constructor(
    protected http: HttpClient
  ) { }

  getCitas(): Observable<any> {
    let route = [environment.apiUrl, 'citas'].join('/');
    //http://localhost:3000/citas
    return this.http.get(route);
  }

  getCitasById(id: any): Observable<any> {
    let route = [environment.apiUrl, 'citas', id].join('/');
    //http://localhost:3000/citas/:id
    return this.http.get(route);
  }

  addCitas(usr: any): Observable<any> {
    let route = [environment.apiUrl, 'citas'].join('/');
    //http://localhost:3000/citas
    return this.http.post(route, usr);
  }

  editCitas(usr: any, id: any): Observable<any> {
    let route = [environment.apiUrl, 'citas', id].join('/');
    //http://localhost:3000/citas/:id
    return this.http.put(route, usr);
  }

  deleteCitas(id: any): Observable<any> {
    let route = [environment.apiUrl, 'citas', id].join('/');
    //http://localhost:3000/citas/:id
    return this.http.delete(route);
  }


}
