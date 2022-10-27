import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.scss']
})
export class EditUsuarioComponent implements OnInit {

  public formUsuario: FormGroup;
  public id = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private usuarioService: UsuariosService
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

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

    //traemos al usuario de la BD
    let usuarios = this.usuarioService.getUsuariosById(this.id).subscribe({
      next: (data => {
        console.log(data);

        //valores por defecto:
        this.formUsuario.patchValue({
          nombres: data.nombres,
          apellidos: data.apellidos,
          tipo_dni: data.tipo_dni,
          dni: data.dni,
          sexo: data.sexo,
          municipio: data.municipio,
          direccion: data.direccion,
          tel: data.tel,
          fec_nac: data.fec_nac,
          email: data.email,
          rol: data.rol,
          password: data.password
        })

      }),
      error: (err => {
        console.log(err);
      })
    })
  }

  save() {
    console.log(this.formUsuario.value);
    let alertSuccess = document.getElementById("alert-success");
    let alertDanger = document.getElementById("alert-danger");

    this.usuarioService.editUsuarios(this.formUsuario.value, this.id).subscribe({
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
