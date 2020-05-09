import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(public authService: AuthService, public router: Router) {

   }

  ngOnInit(): void {
  }

  onSubmitLogin(){
    // this.authService.login(this.email, this.password)
    // .then((res)=> {
    //   this.router.navigate(['/inscriptions']);
    // }).catch((err) => {
    //   console.log(err);
    //   this.router.navigate(['/inicio']);
    // });
    if(this.email == 'kevin.estrada@gmail.com' && this.password == 'kevin123'){
      this.router.navigate(['/inscriptions']);
    }else if(this.email == 'chaconld@gmail.com' && this.password == 'kompadiego*'){
      this.router.navigate(['/inscriptions']);
    }
    else if(this.email == 'Dennis' && this.password == 'kompadennis*'){
      this.router.navigate(['/inscriptions']);
    }else {
      console.log('erorr');
    }
  }

}
