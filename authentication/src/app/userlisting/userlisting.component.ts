import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.scss']
})
export class UserlistingComponent{
  dataSource: any;
  userList: any;
  @ViewChild(MatPaginator) paginator  !:MatPaginator;
  constructor(private as: AuthService){
    this.userData();
  }

  userData(){
    this.as.getAll().subscribe(data =>{
      console.log(data);
      if(data){
        this.userList = data;
        this.dataSource = new MatTableDataSource(this.userList);
        this.dataSource.paginator = this.paginator;
      }
    })
  }

  displayedColumns: string[] = ['id', 'name', 'email', 'gender', 'role',  'status', 'action'];


  
}
