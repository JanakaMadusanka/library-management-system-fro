import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-borrowers',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './borrowers.component.html',
  styleUrl: './borrowers.component.css'
})
export class BorrowersComponent implements OnInit{
  private http;
  public borrowerList: any = {};
  public selectedBorrower: any;
  borrower: any;
  private baseURL:any = "http://localhost:8080"

  constructor(private httpCliant: HttpClient) {
    this.http = httpCliant;
  }

  ngOnInit(): void {
    this.loadBorrowers(); 
  }

  loadBorrowers() {
    this.http.get(this.baseURL+'/borrower/get').subscribe((res:any) => {
      this.borrowerList = res;
      console.log(this.borrowerList);
    });
  }
  deleteBorrower() {
    this.http.delete(this.baseURL+'/borrower/delete/' + this.selectedBorrower.id, { responseType: 'text' }).subscribe((data) => {
      this.loadBorrowers();
      console.log(data);

      //Show success message
      Swal.fire({
        title: "Good job!",
        text: `${this.selectedBorrower?.title} deleted successfully !`,
        icon: "success"
      });

      this.selectedBorrower = {};
    });
  }

  updateBorrower() {
    let postApi = this.baseURL+'/borrower/add';
    this.http.post(postApi, this.selectedBorrower).subscribe(data => {
      console.log("saved");
      this.loadBorrowers();

      //Show success message
      Swal.fire({
        title: "Good job!",
        text: `${this.selectedBorrower?.title} updated successfully !`,
        icon: "success"
      });

      this.selectedBorrower = {};
    });
  }
  getSelectedBorrower(barrower: any) {
    this.selectedBorrower = barrower;
  }
}
