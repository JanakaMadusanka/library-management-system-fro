import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-view-all-transaction',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './view-all-transaction.component.html',
  styleUrl: './view-all-transaction.component.css'
})
export class ViewAllTransactionComponent implements OnInit {

  public allTracsaction:any=[];

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.loadTransaction();
  }
  loadTransaction(){
    this.http.get("http://localhost:8082/get-all").subscribe(res=>{
      console.log(res);
      this.allTracsaction=res
    })
  }

}
