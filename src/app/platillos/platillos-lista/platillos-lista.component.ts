import { Component, OnInit, ViewChild } from '@angular/core';
import { Platillo } from 'src/app/models/platillo.interface';
import { PlatillosService } from '../service/platillos.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-platillos-lista',
  templateUrl: './platillos-lista.component.html',
  styleUrls: ['./platillos-lista.component.css']
})
export class PlatillosListaComponent implements OnInit {

  arrPlatillos: Platillo[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['nombre', 'area', 'categoria','img'];
  dataSource!: MatTableDataSource<any>;

  constructor(
    private platilloService: PlatillosService,
    private snackbar: MatSnackBar,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.platilloService.getPlatillos().subscribe(res => {
      this.arrPlatillos = [...res];
      console.log(this.arrPlatillos);
      this.dataSource = new MatTableDataSource(this.arrPlatillos)
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
