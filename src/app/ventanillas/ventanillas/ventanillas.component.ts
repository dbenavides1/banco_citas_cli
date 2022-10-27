import { Component, OnInit } from '@angular/core';
import { VentanillasService } from '../../services/ventanillas/ventanillas.service';

@Component({
  selector: 'app-ventanillas',
  templateUrl: './ventanillas.component.html',
  styleUrls: ['./ventanillas.component.scss']
})
export class VentanillasComponent implements OnInit {
  
  public ventanillas: any;

  constructor(
    private ven: VentanillasService
  ) { }

  ngOnInit(): void {
    let ventanillas = this.ven.getVentanillas().subscribe({
      next: (data => {
        this.ventanillas = data;
        console.log(data);
      }),
      error: (err => err)
    });
  }

  deleteVentanilla(id: any): any {
    if(confirm("¿Estás seguro de eliminar esta ventanilla?")) {
      let ventanilla = this.ven.deleteVentanillas(id).subscribe({
        next: (data => {
          console.log(data);
          window.location.reload();
        }),
        error: (err => err)
      });
    }
  }

}
