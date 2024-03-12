import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [HttpClientModule,FormsModule,FormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  constructor(private http:HttpClient){}

  public bookObj:any={
    isbn:"",
    title:"",
    author:"",
    category:"",
    qty:""
  }
  addBook(){
    this.http.post("http://localhost:8081/book/add",this.bookObj).subscribe(data=>{})
  }
}
