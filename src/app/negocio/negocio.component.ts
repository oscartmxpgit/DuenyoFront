import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NegocioService } from '../negocio.service';

@Component({
  selector: 'app-negocio',
  templateUrl: './negocio.component.html',
  styleUrls: ['./negocio.component.sass']
})
export class NegocioComponent implements OnInit {
  public negocios : Array<any>;

  constructor(private negocioService: NegocioService, private router: Router) { 
    this.negocios = negocioService.getNegocio();
    console.log(this.negocios)
  }

 
 

  ngOnInit(): void {
  }

}
