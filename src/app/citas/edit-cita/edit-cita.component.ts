import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CitasService } from 'src/app/services/citas.service';

@Component({
  selector: 'app-edit-cita',
  templateUrl: './edit-cita.component.html',
  styleUrls: ['./edit-cita.component.scss']
})
export class EditCitaComponent implements OnInit {

  public formCita: FormGroup;
  public id = '';

  constructor(
    //private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private citaService: CitasService
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.formCita = this.formBuilder.group({
      id_clie: ['', [Validators.required]],
      id_usu: ['', [Validators.required]],
      id_ventanilla: ['', [Validators.required]],
      fec_cita: ['', [Validators.required]],
      hora: ['', [Validators.required]],
      estado: ['', [Validators.required]],
    })

    //traemos el proyecto de la BD
    let citas = this.citaService.getCitasById(this.id).subscribe({
      next: (data => {
        console.log(data);

        //valores por defecto:
        this.formCita.patchValue({
          id_clie: data.id_clie,
          id_usu: data.id_usu,
          id_ventanilla: data.id_ventanilla,
          fec_cita: data.fec_cita,
          hora: data.hora,
          estado: data.estado
        })

      }),
      error: (err => {
        console.log(err);
      })
    })
  }

  save() {
    console.log(this.formCita.value);
    let alertSuccess = document.getElementById("alert-success");
    let alertDanger = document.getElementById("alert-danger");

    this.citaService.editCitas(this.formCita.value, this.id).subscribe({
      next: (data => {
        console.log(data);
        alertDanger.style.display="none";
        alertSuccess.style.display="block";
        setTimeout(() => {  window.history.back(); }, 3000);
      }),
      error: (err => {
        console.log(err);
        alertDanger.style.display="block";
      })
    })
  }
}
