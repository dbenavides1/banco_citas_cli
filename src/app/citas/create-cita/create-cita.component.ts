import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CitasService } from 'src/app/services/citas.service';

@Component({
  selector: 'app-create-cita',
  templateUrl: './create-cita.component.html',
  styleUrls: ['./create-cita.component.scss']
})
export class CreateCitaComponent implements OnInit {

  public formCita: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private citaService: CitasService
  ) { }

  ngOnInit(): void {
    this.formCita = this.formBuilder.group({
      id_clie: ['', [Validators.required]],
      id_usu: ['', [Validators.required]],
      id_ventanilla: ['', [Validators.required]],
      fec_cita: ['', [Validators.required]],
      hora: ['', [Validators.required]],
      estado: ['', [Validators.required]],
    })
  }

  save(): any {
    console.log(this.formCita.value);
    let alertSuccess = document.getElementById("alert-success");
    let alertDanger = document.getElementById("alert-danger");

    this.citaService.addCitas(this.formCita.value).subscribe({
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
