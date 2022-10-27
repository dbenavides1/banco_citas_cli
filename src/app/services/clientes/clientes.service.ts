import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(
    protected http: HttpClient
  ) {}

  getClientes(): Observable<any> {
    let route = [environment.apiUrl, 'clientes'].join('/');
    //http://localhost:3000/clientes
    return this.http.get(route);
  }

  getClientesById(id: any): Observable<any> {
    let route = [environment.apiUrl, 'clientes', id].join('/');
    //http://localhost:3000/clientes/:id
    return this.http.get(route);
  }

  addClientes(usr: any): Observable<any> {
    let route = [environment.apiUrl, 'clientes'].join('/');
    //http://localhost:3000/clientes
    return this.http.post(route, usr);
  }

  editClientes(usr: any, id: any): Observable<any> {
    let route = [environment.apiUrl, 'clientes', id].join('/');
    //http://localhost:3000/clientes/:id
    return this.http.put(route, usr);
  }

  deleteClientes(id: any): Observable<any> {
    let route = [environment.apiUrl, 'clientes', id].join('/');
    //http://localhost:3000/clientes/:id
    return this.http.delete(route);
  }
}
