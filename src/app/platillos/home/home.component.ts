import { Component, OnInit } from '@angular/core';
import { Platillo } from 'src/app/models/platillo.interface';
import { PlatillosService } from '../service/platillos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  objPlatillo!:Platillo;
  constructor(private platilloService: PlatillosService) { }

  ngOnInit(): void {
    this.platilloService.getPlatilloRandom().subscribe(res => {
      this.objPlatillo = res[0];
      
    })
  }
  

}
