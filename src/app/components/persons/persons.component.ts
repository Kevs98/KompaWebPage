import { Component, OnInit } from '@angular/core';
import { ConnectService } from 'src/app/services/connect.service';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { strict } from 'assert';
import { ItemI } from 'src/app/models/item.interface';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  private image: any;
  private image2: any;
  private image3: any;
  private image4: any;
  private image5: any;



  createFormGroup(){
    return new FormGroup({
      name: new FormControl('',[Validators.minLength(5) ]),
      email: new FormControl(''),
      cedula: new FormControl(''),
      RTN: new FormControl(''),
      cv: new FormControl(''),
      lic: new FormControl(''),
      phone: new FormControl('',[Validators.minLength(5) ]),
      rec: new FormControl(''),
      ref: new FormControl('',[Validators.minLength(15), Validators.maxLength(100)]),
      rev: new FormControl(''),
      kompas: new FormControl('')
    });
  }

  personsForm: FormGroup;

  constructor( private persons: ConnectService) {
    this.personsForm = this.createFormGroup();
   }

  ngOnInit(): void {

  }

  onResetForm(){
    this.personsForm.reset();
  }

  onSaveForm(data: ItemI){
    if (this.personsForm.valid){
      this.persons.preAddUpdateImage(data, this.image, this.image2, this.image3, this.image4, this.image5);
      // this.persons.savePerson(data);
      // this.onResetForm();
      console.log('Valid');
    }else{
      console.log('Invalid');
    }
  }
  onSaveDef(data: ItemI){
    this.onSaveForm(data);
  }

  handleImage(event:any): void{
    // for (let i = 0; i < event.target.files.maxLength; i++){
    //   this.image = event.target.files[i];
    //   console.log('Imagen', this.image);
    // }
    this.image = event.target.files[0];
    console.log('Imagen', this.image);
  }

  handleImage2(event:any): void{
    // for (let i = 0; i < event.target.files.maxLength; i++){
    //   this.image = event.target.files[i];
    //   console.log('Imagen', this.image);
    // }
    this.image2 = event.target.files[0];
    console.log('Imagen_2', this.image2);
  }

  handleImage3(event:any): void{
    this.image3 = event.target.files[0];
    console.log('Imagen_3', this.image3);
  }

  handleImage4(event:any): void{
    // for (let i = 0; i < event.target.files.maxLength; i++){
    //   this.image = event.target.files[i];
    //   console.log('Imagen', this.image);
    // }
    this.image4 = event.target.files[0];
    console.log('Imagen_4', this.image4);
  }

  handleImage5(event:any): void{
    // for (let i = 0; i < event.target.files.maxLength; i++){
    //   this.image = event.target.files[i];
    //   console.log('Imagen', this.image);
    // }
    this.image5 = event.target.files[0];
    console.log('Imagen_5', this.image5);
  }

}
