import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-password-admin',
  templateUrl: './update-password-admin.component.html',
  styleUrls: ['./update-password-admin.component.css']
})
export class UpdatePasswordAdminComponent implements OnInit {

  constructor(private service: UserService, private route: ActivatedRoute, private router: Router) { }

  uid: number;
  user: User = new User();
  ngOnInit(): void {
    this.uid = this.route.snapshot.params['uid'];
    this.service.getUserById(this.uid).subscribe(data =>{
      this.user = data;
    }, error => console.log(error))
  }

  onSubmit(){
    this.service.updatePwdAdmin(this.uid, this.user).subscribe(data => {
      alert('Password Updated Successfully');
      this.goToUserList();
    }, error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['main-admin-component/user-list']);
  }

}
