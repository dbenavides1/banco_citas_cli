import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes/clientes.service';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.scss']
})
export class EditClienteComponent implements OnInit {

  public formCliente: FormGroup;
  public id = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private clienteService: ClientesService
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.formCliente = this.formBuilder.group({
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
      password: ['', [Validators.required]]
    })

    //traemos al cliente de la BD
    let clientes = this.clienteService.getClientesById(this.id).subscribe({
      next: (data => {
        console.log(data);

        //valores por defecto:
        this.formCliente.patchValue({
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
          password: data.password
        })

      }),
      error: (err => {
        console.log(err);
      })
    })
  }

  save() {
    console.log(this.formCliente.value);
    let alertSuccess = document.getElementById("alert-success");
    let alertDanger = document.getElementById("alert-danger");

    this.clienteService.editClientes(this.formCliente.value, this.id).subscribe({
      next: (data => {
        console.log(data);
        alertDanger.style.display="none";
        alertSuccess.style.display="block";
        setTimeout(() => {
          this.router.navigate(['dashboard/clientes']);
        }, 3000);
      }),
      error: (err => {
        console.log(err);
        alertDanger.style.display="block";
      })
    })
  }

}
