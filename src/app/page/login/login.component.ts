import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,HttpClientModule,FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj : any = {
    "email" : "",
    "password":""
  }
  constructor(private http:HttpClient,private router:Router){}
  login(){
    this.http.post("http://localhost:8080/login/request",this.loginObj).subscribe((res:any)=>{
      console.log(res);
      if(res===true){
        this.router.navigate(['/view-all-book']);
      }else{
        alert("you cant login !");
      }
    })
  }
}
