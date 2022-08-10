import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-main-user',
  templateUrl: './main-user.component.html',
  styleUrls: ['./main-user.component.css']
})
export class MainUserComponent implements OnInit {

  user: User;

  constructor(private service: LoginService, private router: Router, private userService: UserService) { }
  
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || 'null') as User;
    if(this.user==null){
      this.router.navigate([''])
  }
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }

  onClick(){
    this.router.navigate(['main-user-component/password-change']);
  }
}
