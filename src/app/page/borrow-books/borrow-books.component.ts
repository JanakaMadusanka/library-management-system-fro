import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-borrow-books',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './borrow-books.component.html',
  styleUrl: './borrow-books.component.css'
})
export class BorrowBooksComponent {

  public borrower:any;
  public bookId:any;
  public searchBookRes:any;

  public cartList:any = []

  constructor(private http: HttpClient) {}
  public userName:String=""

  searchBorrower(){
    this.http.get(`http://localhost:8080/borrower/search-by-username/${this.userName}`).subscribe((data:any)=>{
      console.log(data);
      this.borrower=data;
    })
  }

  searchBook(){
    this.http.get(`http://localhost:8081/book/search/${this.bookId}`).subscribe((data:any)=>{
      console.log(data);
      this.searchBookRes=data;
      Swal.fire({
        title: `"${this.searchBookRes.title}" Do you watn to get this book ?`,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Yes",
        denyButtonText: `No`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
          this.cartList.push(this.searchBookRes)
          this.searchBookRes={}
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    })
  }

  bookIds:any=[];

  loadBookIds(){
    this.cartList .forEach((element:any) => {
      this.bookIds.push(element.id);
    });
  }
  borrowBooks(){
    const borrowBooks:any={
      borrowId:this.borrower.id,
      books:this.bookIds,
      date:new Date(),
      fine:""
    }

    this.http.post("http://localhost:8082/add-borrow-details",borrowBooks).subscribe(res=>{
      console.log(res);
    })
  }
}
 