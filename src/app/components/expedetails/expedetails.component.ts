import { Component, OnInit } from '@angular/core';
import { ConnectService } from 'src/app/services/connect.service';
import { ItemI } from 'src/app/models/item.interface';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-expedetails',
  templateUrl: './expedetails.component.html',
  styleUrls: ['./expedetails.component.css']
})
export class ExpedetailsComponent implements OnInit {

  public items: ItemI = {};

  constructor(private conect: ConnectService, private route: ActivatedRoute) { }

  ngOnInit() {
    const idex = this.route.snapshot.params['id'];
    this.getExpe(idex);
  }

  getExpe(idex:string){
    this.conect.getOne(idex).subscribe ( item => {
      console.log('Expediente', item);
      this.items = item;
    });
  }


}
