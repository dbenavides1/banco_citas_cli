import { Component, OnInit } from '@angular/core';
import { CitasService } from '../../services/citas/citas.service';
import { ClientesService } from '../../services/clientes/clientes.service';
import { UsuariosService } from '../../services/usuarios/usuarios.service';
import { PqrsService } from '../../services/pqrs/pqrs.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  public citas: any;
  public clientes: any;
  public usuarios: any;
  public pqrs: any;

  constructor(
    private cs: CitasService,
    private cli: ClientesService,
    private usu: UsuariosService,
    private pq: PqrsService
  ) { }

  ngOnInit(): void {
    //$.getScript("./assets/js/deafult-dashboard.js")
    //citas
    let citas = this.cs.getCitas().subscribe({
      next: (data => {
        this.citas = data.length;
        console.log(data);
      }),
      error: (err => err)
    });

    //clientes
    let clientes = this.cli.getClientes().subscribe({
      next: (data => {
        this.clientes = data.length;
        console.log(data);
      }),
      error: (err => err)
    });

    //usuarios
    let usuarios = this.usu.getUsuarios().subscribe({
      next: (data => {
        this.usuarios = data.length;
        console.log(data);
      }),
      error: (err => err)
    });

    //pqrs
    let pqrs = this.pq.getPqrs().subscribe({
      next: (data => {
        this.pqrs = data.length;
        console.log(data);
      }),
      error: (err => err)
    });
  }

}
