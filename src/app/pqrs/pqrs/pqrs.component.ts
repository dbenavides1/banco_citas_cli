import { Component, OnInit } from '@angular/core';
import { PqrsService } from '../../services/pqrs/pqrs.service';

@Component({
  selector: 'app-pqrs',
  templateUrl: './pqrs.component.html',
  styleUrls: ['./pqrs.component.scss']
})
export class PqrsComponent implements OnInit {

  public pqrs: any;

  constructor(
    private pq: PqrsService
  ) { }

  ngOnInit(): void {
    let pqrs = this.pq.getPqrs().subscribe({
      next: (data => {
        this.pqrs = data;
        console.log(data);
      }),
      error: (err => err)
    });
  }

  deletePqrs(id: any): any {
    if(confirm("¿Estás seguro de eliminar este pqrs?")) {
      let pqrs = this.pq.deletePqrs(id).subscribe({
        next: (data => {
          console.log(data);
          window.location.reload();
        }),
        error: (err => err)
      });
    }
  }

}
