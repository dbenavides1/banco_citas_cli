import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: ['./create-usuario.component.scss']
})
export class CreateUsuarioComponent implements OnInit {

  public formUsuario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usuarioService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.formUsuario = this.formBuilder.group({
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      tipo_dni: [''],
      dni: [''],
      sexo: [''],
      municipio: [''],
      direccion: [''],
      tel: [''],
      fec_nac: [''],
      email: ['', [Validators.required]],
      rol: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  save(): any {
    console.log(this.formUsuario.value);
    let alertSuccess = document.getElementById("alert-success");
    let alertDanger = document.getElementById("alert-danger");

    this.usuarioService.addUsuarios(this.formUsuario.value).subscribe({
      next: (data => {
        console.log(data);
        alertDanger.style.display="none";
        alertSuccess.style.display="block";
        setTimeout(() => {
          this.router.navigate(['dashboard/usuarios']);
        }, 3000);
      }),
      error: (err => {
        console.log(err);
        alertDanger.style.display="block";
      })
    })

  }
}
