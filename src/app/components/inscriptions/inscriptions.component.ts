import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../../services/connect.service';
import { ItemI } from '../../models/item.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.css']
})
export class InscriptionsComponent implements OnInit {

  items: ItemI[];

  constructor( private data: ConnectService) {
    this.data.getPersons().subscribe( item => {
      this.items = item;
      console.log(this.items);
    })
  }

  ngOnInit(): void {
  }

  getInscriptions(){
    this.data.getPersons();
  }

}
