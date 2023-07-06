import { Component } from '@angular/core';
import {Client} from '../model/Client';
import { ClientService } from '../services/client.service';
@Component({
  moduleId: module.id,
  selector: 'app-body',
  templateUrl: './body.component.html',
})
export class BodyComponent {
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
    });
  }
}
