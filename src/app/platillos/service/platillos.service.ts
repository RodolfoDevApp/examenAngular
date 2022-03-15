import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platillo } from 'src/app/models/platillo.interface';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlatillosService {

  baseURL:string = environment.baseURL;

  constructor(private http: HttpClient) { }
  
  
  getPlatillos(){
    const url = `${this.baseURL}search.php?f=a`;
    return this.http.get<Platillo[]>(url).pipe(map((res:any) => res.meals));
  }
  getPlatillID(id:string){
    const url = `${this.baseURL}lookup.php?i=${id}`;
    return this.http.get<Platillo>(url).pipe(map((res:any) => res.meals));
  }

  getPlatilloRandom(){
    const url = `${this.baseURL}random.php`;
    return this.http.get<Platillo>(url).pipe(map((res:any) => res.meals));
  }


}
