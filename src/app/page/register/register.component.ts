import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  private http;
  public countryList: any;
  public selectedCountry: any;
  public selectedCountryCode: any;
  public isExistBorrower: any;

  public borrowerObj={
    firstName:null,
    lastName:null,
    userName:null,
    email:null,
    addres:null,
    country:null,
    contact:null
  }

  constructor(private httpCliant: HttpClient) {
    this.http = httpCliant;
  }
  ngOnInit(): void {
    this.loadCountries();
  }


  loadCountries() {
    let api = "https://restcountries.com/v3.1/all";
    this.http.get(api).subscribe(res => {
      this.countryList=res;
    });
  }
  setSelectCountry(country : any){
    this.selectedCountry=country;
    this.selectedCountryCode=country.idd.root+""+country.idd.suffixes[0];
    console.log(this.selectedCountryCode);
    console.log(this.selectedCountry);
  }

  submitForme(){
    console.log(this.borrowerObj);
    this.http.get(`http://localhost:8080/borrower/isExist/${this.borrowerObj.userName}`).subscribe(data=>{
      console.log(data);
      this.isExistBorrower=data;
      this.registerBorrower(this.isExistBorrower);
    })
  }
  registerBorrower(isExistBorrower:any){
    if(isExistBorrower==false){
      this.http.post("http://localhost:8080/borrower/add",this.borrowerObj).subscribe(data=>{
        Swal.fire({
          title:"Success",
          text:`${this.borrowerObj.userName} has been registerd !`,
          icon:"success"
        })
    })
    }else{
      Swal.fire({
        title:"cant Register this borrower",
        text:`${this.borrowerObj.userName} has already been registerd !`,
        icon:"error"
      })
    }

  }
}
