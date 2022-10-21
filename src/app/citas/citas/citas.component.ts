import { Component, OnInit } from '@angular/core';
import { CitasService } from '../../services/citas.service';


@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss']
})
export class CitasComponent implements OnInit {

  public citas: any;
  
  constructor(
    private cs: CitasService
  ) { }

  ngOnInit(): void {
    let citas = this.cs.getCitas().subscribe(
      {
        next: (data => {
          this.citas = data;
          console.log(data);
        }),
        error: (err => err)
      }
    );
  }

}
