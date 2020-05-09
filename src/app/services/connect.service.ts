import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { ItemI } from '../models/item.interface'
import { FileI } from '../models/file.interface';
import { AngularFireStorage } from '@angular/fire/storage'
import { cvI } from '../models/cv.interface';
import { licI } from '../models/lic.interface';
import { recI } from '../models/rec.interface';
import { revI } from '../models/rev.interface';


@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  private itemsCollection: AngularFirestoreCollection<ItemI>
  private items: Observable<ItemI[]>;
  private itemDoc: AngularFirestoreDocument<ItemI>;
  private itema: Observable<ItemI>;
  private filePath: any;
  private filePath2: any;
  private filePath3: any;
  private filePath4: any;
  private filePath5: any;



  private downloadURL: Observable<string>;
  private downloadURL2: Observable<string>;
  private downloadURL3: Observable<string>;
  private downloadURL4: Observable<string>;
  private downloadURL5: Observable<string>;



  constructor(private bd: AngularFirestore, private storage: AngularFireStorage) {
    this.itemsCollection = bd.collection<ItemI>('formulario');
    this.items = this.itemsCollection.snapshotChanges().pipe(map( actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as ItemI;
        const id = a.payload.doc.id;
        return { id, ...data};
      });
    }
    ));
   }

   getPersons(){
     return this.items;
   }

   savePerson(post: ItemI) {
    // this.itemsCollection.add(newPerson);
    const postObj = {
      name: post.name,
      email: post.email,
      cedula: post.cedula,
      RTN: this.downloadURL,
      cv: this.downloadURL2,
      lic: this.downloadURL3,
      rec: this.downloadURL4,
      phone: post.phone,
      ref: post.ref,
      rev: this.downloadURL5,
      kompas: post.kompas
    }
    console.log(postObj);
    this.itemsCollection.add(postObj);
   }

   getOne(idex: string){
    this.itemDoc = this.bd.doc<ItemI>(`formulario/${idex}`);
    return this.itema = this.itemDoc.snapshotChanges().pipe(map(action =>{
      if (action.payload.exists == false){
        return null;
      }else {
        const data = action.payload.data() as ItemI;
        data.id = action.payload.id;
        return data;
      }
    }));
   }

   public preAddUpdateImage( post: ItemI, image: FileI, cv: cvI, lic: licI, rec: recI, rev: revI): void{
    this.uploadImage(post,image,cv,lic,rec,rev);
    // this.savePerson(post);
   }

   private uploadImage(post: ItemI,image: FileI, cv: cvI, lic: licI, rec: recI, rev: revI){
    this.filePath = `images/${image.name}`;
    this.filePath2 = `image/${cv.name}`;
    this.filePath3 = `image/${lic.name}`;
    this.filePath4 = `image/${rec.name}`;
    this.filePath5 = `image/${rev.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const fileRef2 = this.storage.ref(this.filePath2);
    const fileRef3 = this.storage.ref(this.filePath3);
    const fileRef4 = this.storage.ref(this.filePath4);
    const fileRef5 = this.storage.ref(this.filePath5);
    const task = this.storage.upload(this.filePath, image);
    const task2 = this.storage.upload(this.filePath2, cv);
    const task3 = this.storage.upload(this.filePath3, lic);
    const task4 = this.storage.upload(this.filePath4, rec);
    const task5 = this.storage.upload(this.filePath5, rev);
    task.snapshotChanges()
    .pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(urlImage => {
          this.downloadURL = urlImage;
          console.log('URL_IMAGE', urlImage);
          // console.log('Post', post);
          //llamar al metodo addPost()
          this.savePerson(post);
          console.log(post);
        });
      })
    ).subscribe();

    task2.snapshotChanges()
    .pipe(finalize(() => {
      fileRef2.getDownloadURL().subscribe( urlImage2 => {
        this.downloadURL2 = urlImage2;
        console.log('URL_IMAGE_2', urlImage2);
      });
    })
    ).subscribe();

    task3.snapshotChanges()
    .pipe(finalize(() => {
      fileRef3.getDownloadURL().subscribe( urlImage3 => {
        this.downloadURL3 = urlImage3;
        console.log('URL_IMAGE_3', urlImage3);
      });
    })
    ).subscribe();

    task4.snapshotChanges()
    .pipe(finalize(() => {
      fileRef4.getDownloadURL().subscribe( urlImage4 => {
        this.downloadURL4 = urlImage4;
        console.log('URL_IMAGE_4', urlImage4);
      });
    })
    ).subscribe();

    task5.snapshotChanges()
    .pipe(finalize(() => {
      fileRef5.getDownloadURL().subscribe( urlImage5 => {
        this.downloadURL5 = urlImage5;
        console.log('URL_IMAGE_5', urlImage5);
      });
    })
    ).subscribe();
   }
}
