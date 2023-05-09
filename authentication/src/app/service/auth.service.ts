import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';

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

  isLoggedIn(){
    return sessionStorage.getItem('username')!=null
  }

  @Output() showMenuEvent = new EventEmitter<any>();
  showMenu(data: any){
    this.showMenuEvent.emit(data);
  }

}
