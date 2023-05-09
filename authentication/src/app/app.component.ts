import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'authentication';
  menu: boolean = false;

  constructor(private as: AuthService){

  }

  ngOnInit(): void {
    this.as.showMenuEvent.subscribe((data: any) => {
      console.log(data);
      if(data == true){
        this.menu = true;
      }
    })

    if(this.as.isLoggedIn()){
      this.menu = true;
    }
  }

}
