import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-all-book',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './view-all-book.component.html',
  styleUrl: './view-all-book.component.css'
})
export class ViewAllBookComponent implements OnInit{
    private http;
    public bookList:any = {};
    public selectedBook:any;
  
    constructor (private httpCliant:HttpClient){
      this.http=httpCliant;
    }
    ngOnInit(): void {
      this.loadBooks();
    }
    loadBooks(){
      this.http.get('http://localhost:8080/book/get').subscribe((data)=>{
        this.bookList = data;
        console.log(this.bookList);
      });
    } 
    deleteBook(book:any){
      this.selectedBook = book;
      this.http.delete('http://localhost:8080/book/'+this.selectedBook.id,{responseType:'text'}).subscribe((data)=>{
        this.loadBooks();
        console.log(data);
      });

    }
    updateBook(){
      
    }

}
