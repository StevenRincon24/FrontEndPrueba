import { Component } from '@angular/core';
import {Client} from './model/Client';
import { ClientService } from './services/client.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  client:Client = new Client();
  datatable:any=[];

  constructor(private clientService:ClientService){

  }

  ngOnInit() {
    this.onDataTable();
  }

  onDataTable(){
    this.clientService.getClient().subscribe(res=>{
      this.datatable = res;
      console.log(res);
    });
  }
}
