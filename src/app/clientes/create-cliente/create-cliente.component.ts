import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes/clientes.service';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.scss']
})
export class CreateClienteComponent implements OnInit {

  public formCliente: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private clienteService: ClientesService
  ) { }

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
  }

  save(): any {
    console.log(this.formCliente.value);
    let alertSuccess = document.getElementById("alert-success");
    let alertDanger = document.getElementById("alert-danger");

    this.clienteService.addClientes(this.formCliente.value).subscribe({
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
