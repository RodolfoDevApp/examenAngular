import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private router:Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  loading = false;
  miLogin:FormGroup = this.fb.group({
    correo:['',[Validators.required]],
    password:['',[Validators.required]]
  });

  ingresar(){

    const {correo,password} = this.miLogin.value;

  
      if (correo === 'user' && password === 'root') {
        this.fakeLoading();
      }else{
        this.error();
        this.miLogin.reset();
      }
    
  }

  error(){
    this._snackBar.open('usuario o constraseña invalidos','',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
  
  fakeLoading(){
    this.loading=true;
    setTimeout(() => {
      // redireccionamos a menu
      this.router.navigateByUrl('/inicio');
    }, 1500);
  }

}
