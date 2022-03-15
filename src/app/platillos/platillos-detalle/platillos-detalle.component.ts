import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Platillo } from 'src/app/models/platillo.interface';
import { PlatillosService } from '../service/platillos.service';

@Component({
  selector: 'app-platillos-detalle',
  templateUrl: './platillos-detalle.component.html',
  styleUrls: ['./platillos-detalle.component.css']
})
export class PlatillosDetalleComponent implements OnInit {
  
  objPlatillo!:Platillo;
  safeURL!:SafeResourceUrl;
  url!:string ;
  constructor(
    private activatedRoute: ActivatedRoute,
    private platilloService: PlatillosService,
    private _sanitizer: DomSanitizer
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res => {
      // res.id;
      this.platilloService.getPlatillID(res.id).subscribe(res =>{
        this.objPlatillo = res[0];
        this.url = this.objPlatillo.strYoutube as string;
        this.url = this.url.replace('watch', 'embed');
        this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.url!);
      });
    });
  }

}
