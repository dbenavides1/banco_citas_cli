import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UsuariosService } from '../services/usuarios/usuarios.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  is_error = false;
  usuario: any;
  constructor(
    private router: Router,
    private usuariosService: UsuariosService,
  ) { }
  ngOnInit() {
  }
  validarUsuario(login:any,password:any) {
    this.usuariosService.getUsuariosById(login).subscribe(
      {
        next: (data => {
          if (data.email == login && data.password == password) {
            this.is_error = false;
            console.log(data);
            this.router.navigate(['dashboard/citas']);
          }
          else {
            this.is_error = true;
          }
        }),
        error: (err => err)
      }
    );
  }
}