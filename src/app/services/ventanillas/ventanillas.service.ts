import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VentanillasService {

  constructor(
    protected http: HttpClient
  ) { }

  getVentanillas(): Observable<any> {
    let route = [environment.apiUrl, 'ventanillas'].join('/');
    //http://localhost:3000/ventanillas
    return this.http.get(route);
  }

  getVentanillasById(id: any): Observable<any> {
    let route = [environment.apiUrl, 'ventanillas', id].join('/');
    //http://localhost:3000/ventanillas/:id
    return this.http.get(route);
  }

  addVentanillas(usr: any): Observable<any> {
    let route = [environment.apiUrl, 'ventanillas'].join('/');
    //http://localhost:3000/ventanillas
    return this.http.post(route, usr);
  }

  editVentanillas(usr: any, id: any): Observable<any> {
    let route = [environment.apiUrl, 'ventanillas', id].join('/');
    //http://localhost:3000/ventanillas/:id
    return this.http.put(route, usr);
  }

  deleteVentanillas(id: any): Observable<any> {
    let route = [environment.apiUrl, 'ventanillas', id].join('/');
    //http://localhost:3000/ventanillas/:id
    return this.http.delete(route);
  }


}