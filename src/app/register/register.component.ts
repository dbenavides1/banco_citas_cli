import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../services/usuarios/usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public register: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.register = this.formBuilder.group({
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      tipo_dni: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      municipio: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      fec_nac: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rol: ['', [Validators.required]],
      fec_reg: ['', [Validators.required]],
    })
    console.log(this.register.value);
  }

  save(): any {
    console.log(this.register.value);
    let Pry = this.usuariosService.addUsuarios(this.register.value).subscribe(
      {
        next: (data => {
          console.log(data);
        }),
        error: (err => err)
      }
    );
  }
}
