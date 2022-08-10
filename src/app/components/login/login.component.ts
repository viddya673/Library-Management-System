import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  user: User;

  constructor(private service: LoginService, private router: Router, private route: ActivatedRoute, private userService: UserService) { 
  }

  ngOnInit(): void {
    this.user=JSON.parse(localStorage.getItem('user')|| 'null') as User
    if(this.user!=null){
      this.router.navigate(['']);
    }
  }


  userLogin(){
    
    this.service.loginUserService(this.email, this.password).subscribe(
      data => { 
      if(data.role.rid == 4){
        alert('Inactive user');
        location.reload();
      }
      else if(data.role.rid == 2){
        alert('Login Successful');
        this.router.navigate(['/main-admin-component/user-list'])
      }else{
        alert('Login Successful');
        localStorage.setItem("user", JSON.stringify(data))
        this.router.navigate(['/main-user-component/view-books'])
      }
    },
      error => alert('Incorrect Credentials')
    );
  }

}
