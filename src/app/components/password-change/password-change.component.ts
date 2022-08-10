import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  oldPassword: string;
  newPassword: string;
  user: User;

  constructor(private router: Router, private service: UserService) { }

  ngOnInit(): void {
    this.user=JSON.parse(localStorage.getItem('user')|| 'null') as User
    // if(this.user!=null){
    //   this.router.navigate(['']);
    // }
  }

  onSubmit(){

    this.service.changePassword(this.user.uid!, this.oldPassword, this.newPassword).subscribe(data =>{
      if(data != null){
        alert('Password Updated Successfully!');
      }else{
        alert('Invalid Old Password');
      }
      location.reload();
    });
  }

}
