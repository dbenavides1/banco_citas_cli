import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PqrsService } from 'src/app/services/pqrs/pqrs.service';
import { ClientesService } from 'src/app/services/clientes/clientes.service';

@Component({
  selector: 'app-create-pqrs',
  templateUrl: './create-pqrs.component.html',
  styleUrls: ['./create-pqrs.component.scss']
})
export class CreatePqrsComponent implements OnInit {

  public formPqrs: FormGroup;
  public clientes: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private pqrsService: PqrsService,
    private cli: ClientesService
  ) { }

  ngOnInit(): void {
    this.formPqrs = this.formBuilder.group({
      id_clie: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      mensaje: ['', [Validators.required]]
    })

    //clientes
    let clientes = this.cli.getClientes().subscribe({
      next: (data => {
        this.clientes = data;
        console.log(data);
      }),
      error: (err => err)
    });
  }

  save(): any {
    console.log(this.formPqrs.value);
    let alertSuccess = document.getElementById("alert-success");
    let alertDanger = document.getElementById("alert-danger");

    this.pqrsService.addPqrs(this.formPqrs.value).subscribe({
      next: (data => {
        console.log(data);
        alertDanger.style.display="none";
        alertSuccess.style.display="block";
        setTimeout(() => {  
          this.router.navigate(['dashboard/pqrs']);
        }, 3000);
      }),
      error: (err => {
        console.log(err);
        alertDanger.style.display="block";
      })
    })

  }
}
