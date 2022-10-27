import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UsuariosService } from '../services/usuarios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public formUser: FormGroup;
  is_error = false;
  usuario: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usuariosService: UsuariosService,
  ) { }

  ngOnInit() {
    this.formUser = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  validarUsuario(): any {
    let alertWarning = document.getElementById("alert-warning");

    this.usuariosService.getUsuariosByEmail(this.formUser.value).subscribe({
      next: (data => {
          console.log(data);
          this.router.navigate(['dashboard/home']);
      }),
      //error: (err => err)
      error: (err => {
        console.log(err);
        alertWarning.style.display="block";
      })
    });
  }
}