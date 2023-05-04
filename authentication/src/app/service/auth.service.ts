import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  apiUrl = "http://localhost:3000/user";

  getAll(){
    return this.http.get(this.apiUrl);
  }

  getById(id: string){
    return this.http.get(this.apiUrl+'/'+id);
  }

  proceedRegistration(inputData: any){
    return this.http.post(this.apiUrl, inputData);
  }

  updateUser(id: string, inputData: any){
    return this.http.put(this.apiUrl+'/'+id, inputData);
  }
}
