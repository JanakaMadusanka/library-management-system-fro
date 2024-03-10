import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-all-book',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './view-all-book.component.html',
  styleUrl: './view-all-book.component.css'
})
export class ViewAllBookComponent implements OnInit {
  private http;
  public bookList: any = {};
  public selectedBook: any;
  book: any;

  constructor(private httpCliant: HttpClient) {
    this.http = httpCliant;
  }

  ngOnInit(): void {
    this.loadBooks(); 
  }

  loadBooks() {
    this.http.get('http://localhost:8081/book/get').subscribe((data) => {
      this.bookList = data;
      console.log(this.bookList);
    });
  }

  deleteBook() {
    this.http.delete('http://localhost:8081/book/' + this.selectedBook.id, { responseType: 'text' }).subscribe((data) => {
      this.loadBooks();
      console.log(data);

      //Show success message
      Swal.fire({
        title: "Good job!",
        text: `${this.selectedBook?.title} deleted successfully !`,
        icon: "success"
      });

      this.selectedBook = {};
    });
  }
  updateBook() {
    let postApi = 'http://localhost:8081/book/add';
    this.http.post(postApi, this.selectedBook).subscribe(data => {
      console.log("saved");
      this.loadBooks();

      //Show success message
      Swal.fire({
        title: "Good job!",
        text: `${this.selectedBook?.title} updated successfully !`,
        icon: "success"
      });

      this.selectedBook = {};
    });
  }

  getSelectedBook(book: any) {
    this.selectedBook = book;
  }

}
