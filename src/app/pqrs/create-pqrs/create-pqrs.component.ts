import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PqrsService } from 'src/app/services/pqrs/pqrs.service';

@Component({
  selector: 'app-create-pqrs',
  templateUrl: './create-pqrs.component.html',
  styleUrls: ['./create-pqrs.component.scss']
})
export class CreatePqrsComponent implements OnInit {

  public formPqrs: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private pqrsService: PqrsService
  ) { }

  ngOnInit(): void {
    this.formPqrs = this.formBuilder.group({
      id_clie: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      mensaje: ['', [Validators.required]]
    })
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
