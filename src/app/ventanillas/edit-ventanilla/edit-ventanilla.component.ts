import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { VentanillasService } from 'src/app/services/ventanillas/ventanillas.service';

@Component({
  selector: 'app-edit-ventanilla',
  templateUrl: './edit-ventanilla.component.html',
  styleUrls: ['./edit-ventanilla.component.scss']
})
export class EditVentanillaComponent implements OnInit {

  public formVentanilla: FormGroup;
  public id = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private ventanillaService: VentanillasService
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.formVentanilla = this.formBuilder.group({
      nom_ventanilla: ['', [Validators.required]]
    })

    //traemos la ventanilla de la BD
    let ventanillas = this.ventanillaService.getVentanillasById(this.id).subscribe({
      next: (data => {
        console.log(data);

        //valores por defecto:
        this.formVentanilla.patchValue({
          nom_ventanilla: data.nom_ventanilla
        })

      }),
      error: (err => {
        console.log(err);
      })
    })
  }

  save() {
    console.log(this.formVentanilla.value);
    let alertSuccess = document.getElementById("alert-success");
    let alertDanger = document.getElementById("alert-danger");

    this.ventanillaService.editVentanillas(this.formVentanilla.value, this.id).subscribe({
      next: (data => {
        console.log(data);
        alertDanger.style.display="none";
        alertSuccess.style.display="block";
        setTimeout(() => {
          this.router.navigate(['dashboard/ventanillas']);
        }, 3000);
      }),
      error: (err => {
        console.log(err);
        alertDanger.style.display="block";
      })
    })
  }

}
