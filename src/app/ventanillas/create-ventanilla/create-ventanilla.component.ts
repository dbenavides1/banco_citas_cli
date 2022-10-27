import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { VentanillasService } from 'src/app/services/ventanillas/ventanillas.service';

@Component({
  selector: 'app-create-ventanilla',
  templateUrl: './create-ventanilla.component.html',
  styleUrls: ['./create-ventanilla.component.scss']
})
export class CreateVentanillaComponent implements OnInit {

  public formVentanilla: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ventanillaService: VentanillasService
  ) { }

  ngOnInit(): void {
    this.formVentanilla = this.formBuilder.group({
      nom_ventanilla: ['', [Validators.required]]
    })
  }

  save(): any {
    console.log(this.formVentanilla.value);
    let alertSuccess = document.getElementById("alert-success");
    let alertDanger = document.getElementById("alert-danger");

    this.ventanillaService.addVentanillas(this.formVentanilla.value).subscribe({
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
