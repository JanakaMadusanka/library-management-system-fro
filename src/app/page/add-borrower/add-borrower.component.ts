import { CommonModule } from '@angular/common';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-borrower',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './add-borrower.component.html',
  styleUrl: './add-borrower.component.css'
})
export class AddBorrowerComponent {

  private http;
  borrower: any = {};


  constructor(private httpCliant: HttpClient) {
    this.http = httpCliant;
  }

  addBorrower() {
    console.log("saved");
    console.log(this.borrower);
    let postApi = 'http://localhost:8080/borrower/add';
    this.http.post(postApi, this.borrower).subscribe(data => {
      console.log("saved");
    });
  }
}
