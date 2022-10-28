import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CitasService } from 'src/app/services/citas/citas.service';
import { ClientesService } from 'src/app/services/clientes/clientes.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { VentanillasService } from 'src/app/services/ventanillas/ventanillas.service';

@Component({
  selector: 'app-create-cita',
  templateUrl: './create-cita.component.html',
  styleUrls: ['./create-cita.component.scss']
})
export class CreateCitaComponent implements OnInit {

  public formCita: FormGroup;
  public clientes: any;
  public usuarios: any;
  public ventanillas: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private citaService: CitasService,
    private cli: ClientesService,
    private usu: UsuariosService,
    private vent: VentanillasService
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

    //clientes
    let clientes = this.cli.getClientes().subscribe({
      next: (data => {
        this.clientes = data;
        console.log(data);
      }),
      error: (err => err)
    });
    
    //usuarios
    let usuarios = this.usu.getUsuarios().subscribe({
      next: (data => {
        this.usuarios = data;
        console.log(data);
      }),
      error: (err => err)
    });

    //ventanillas
    let ventanillas = this.vent.getVentanillas().subscribe({
      next: (data => {
        this.ventanillas = data;
        console.log(data);
      }),
      error: (err => err)
    });
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
        setTimeout(() => {  
          this.router.navigate(['dashboard/citas']);
        }, 3000);
      }),
      error: (err => {
        console.log(err);
        alertDanger.style.display="block";
      })
    })

  }
}
