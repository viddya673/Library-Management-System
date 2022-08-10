import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IssuesService } from 'src/app/services/issues.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  newUserForm: FormGroup;
  closeResult: string;
  users: User[];

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private modalService: NgbModal, private issueService: IssuesService) { }

  ngOnInit(): void {
    this.getUsers();
    this.newUserForm = this.fb.group({
      email:this.fb.control(''),
      fullname:this.fb.control(''),
      password:this.fb.control(''),
    })
  }

  private getUsers(){
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  deleteUser(uid: number){
    this.userService.deleteUser(uid).subscribe(data => {
      alert('User inactivated');
      this.getUsers();
    })
  }
    updatePwd(uid: number){
    this.router.navigate(['main-admin-component/update-password-admin', uid]);
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit(){
    let user: User = {
      email:this.Email.value,
      fullname:this.Fullname.value,
      password:this.Password.value,
    }
    this.userService.createUser(user).subscribe(data =>{
      alert('User Added sucessfully!');
      location.reload();
    }, error => console.log(error));
  }


  public get Email(): FormControl {
    return this.newUserForm.get('email') as FormControl;
  }
  public get Fullname(): FormControl {
    return this.newUserForm.get('fullname') as FormControl;
  }
  public get Password(): FormControl {
    return this.newUserForm.get('password') as FormControl;
  }
  
  clearForm() {
    this.Email.setValue('');
    this.Fullname.setValue('');
    this.Password.setValue('');
  }

  setForm(user: User){
    this.Email.setValue(user.email)
    this.Fullname.setValue(user.fullname)
    this.Password.setValue(user.password)
  }

  navigate(uid: number){
    this.router.navigate(['main-admin-component/admin-issues', uid]);
  }
  
}
