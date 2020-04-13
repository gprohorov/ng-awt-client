import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  accessToken: string;

  constructor(private http: HttpClient) {
  }

  get getAccessToken() {
    return this.accessToken;
  }
  set setAccessToken(token: string) {
    this.accessToken = token;
  }

  public generateToken(request){
    return this.http.post('http://localhost:8080/login', request, {observe : 'response'})
      ;
  }

  public welcome(token){

    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get('http://localhost:8080/api/welcomepage', {headers, responseType: 'text'});

  }
  public getDoctors(token){
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get('http://localhost:8080/api/doctor/get/list', {headers, responseType: 'text'});
  }
  public getInterns(token){
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get('http://localhost:8080/api/intern/get/list', {headers, responseType: 'text'});
  }
  public getPersons(token){
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get('http://localhost:8080/api/person/get/list', {headers, responseType: 'text'});
  }


}
