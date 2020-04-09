import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private http: HttpClient) {



  }

  public generateToken(request){
    //   const httpOptions: { headers; observe; } = {
    //     headers: new HttpHeaders({
    //     'Authorization':  'application/json'
    //   }),
    //   observe: 'response'
    //  };
    //   return this.http.post('http://localhost:8080/login', request, httpOptions)
    return this.http.post('http://localhost:8080/login', request, {observe : 'response'})
  //  return this.http.post('http://localhost:8080/login', request, {responseType: 'text' as 'json'})

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
