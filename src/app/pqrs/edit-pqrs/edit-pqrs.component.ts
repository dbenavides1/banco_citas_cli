import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PqrsService } from 'src/app/services/pqrs/pqrs.service';

@Component({
  selector: 'app-edit-pqrs',
  templateUrl: './edit-pqrs.component.html',
  styleUrls: ['./edit-pqrs.component.scss']
})
export class EditPqrsComponent implements OnInit {

  public formPqrs: FormGroup;
  public id = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private pqrsService: PqrsService
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.formPqrs = this.formBuilder.group({
      id_clie: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      mensaje: ['', [Validators.required]]
    })

    //traemos la pqrs de la BD
    let pqrs = this.pqrsService.getPqrsById(this.id).subscribe({
      next: (data => {
        console.log(data);

        //valores por defecto:
        this.formPqrs.patchValue({
          id_clie: data.id_clie,
          tipo: data.tipo,
          estado: data.estado,
          mensaje: data.mensaje
        })

      }),
      error: (err => {
        console.log(err);
      })
    })
  }

  save() {
    console.log(this.formPqrs.value);
    let alertSuccess = document.getElementById("alert-success");
    let alertDanger = document.getElementById("alert-danger");

    this.pqrsService.editPqrs(this.formPqrs.value, this.id).subscribe({
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
