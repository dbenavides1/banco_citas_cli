import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  public usuarios: any;

  constructor(
    private usu: UsuariosService
  ) { }

  ngOnInit(): void {
    let usuarios = this.usu.getUsuarios().subscribe({
      next: (data => {
        this.usuarios = data;
        console.log(data);
      }),
      error: (err => err)
    });
  }

  deleteUsuario(id: any): any {
    if(confirm("¿Estás seguro de eliminar este usuario?")) {
      let usuario = this.usu.deleteUsuarios(id).subscribe({
        next: (data => {
          console.log(data);
          window.location.reload();
        }),
        error: (err => err)
      });
    }
  }

}
