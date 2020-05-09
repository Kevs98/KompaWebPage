import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';7


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public Aauth: AngularFireAuth) {

   }

   logout(){
     return this.Aauth.auth.signOut();
   }

   register(email:string, password: string){
    return new Promise((resolve, reject) => {
      this.Aauth.auth.createUserWithEmailAndPassword(email,password)
      .then( userData => resolve(userData),
      err => reject (err));
    });
   }

   login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.Aauth.auth.signInWithEmailAndPassword(email,password)
      .then( userData => resolve(userData),
      err => reject (err));
    });
   }
}
