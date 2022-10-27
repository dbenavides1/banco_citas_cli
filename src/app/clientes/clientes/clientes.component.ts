import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  public clientes: any;

  constructor(
    private cli: ClientesService
  ) { }

  ngOnInit(): void {
    let clientes = this.cli.getClientes().subscribe({
      next: (data => {
        this.clientes = data;
        console.log(data);
      }),
      error: (err => err)
    });
  }

  deleteCliente(id: any): any {
    if(confirm("¿Estás seguro de eliminar este cliente?")) {
      let cliente = this.cli.deleteClientes(id).subscribe({
        next: (data => {
          console.log(data);
          window.location.reload();
        }),
        error: (err => err)
      });
    }
  }

}
