import { Component, OnInit } from '@angular/core';
import {JwtClientService} from '../service/jwt-client.service';
import {HttpResponse} from '@angular/common/http';
import {subscribeOn} from 'rxjs/operators';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  authRequest: any = {
    username: 'intern',
    password: 'intern'
  };
/*
  authRequest: any = {
    username: 'admin',
    password: 'admin'
  };
*/
  showButton = false;

  accessToken: string;
  rezult = 'DENIED';

  constructor(private service: JwtClientService) { }

  ngOnInit(): void {
    this.getAccessToken(this.authRequest);
   // this.getWelcome(this.accessToken);
  }

  public getAccessToken(authRequest){
    const response = this.service.generateToken(authRequest);
    response.subscribe((data: HttpResponse<any>) => {
      console.log(data.headers.get('authorization'));
      this.accessToken = data.headers.get('authorization');
    //  this.getWelcome(this.accessToken);
    });
  }

  public getWelcome(tkn){
    const welcome = this.service.welcome(tkn);
    return welcome.subscribe( (data: string) =>
    {this.rezult = data;
     console.log(this.rezult);
     this.showButton = true;
    } );
  }


  public onClick() {
    this.getWelcome(this.accessToken);
  }
}
