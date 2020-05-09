import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit(): void {
  }

  onSubmitReg(){
    this.authService.register(this.email, this.password)
    .then((res)=> {
      console.log("Exito!");
      console.log(res);
    }).catch((err) => {
      console.log(err);
      this.router.navigate(['/inicio']);
    });
  }

}
