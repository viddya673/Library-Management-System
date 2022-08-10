import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from 'src/app/models/books';
import { Issue } from 'src/app/models/issue';
import { User } from 'src/app/models/user';
import { IssuesService } from 'src/app/services/issues.service';

@Component({
  selector: 'app-user-issues',
  templateUrl: './user-issues.component.html',
  styleUrls: ['./user-issues.component.css']
})
export class UserIssuesComponent implements OnInit {

  issues: Issue[];
  user: User;
  overdues: Issue[];

  constructor(private router: Router, private issueService: IssuesService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || 'null') as User;
    if(this.user==null){
      this.router.navigate([''])
  }
  this.getIssues();
  this.UserOverdues();
  }

  private getIssues(){
    this.issueService.getIssues(this.user.uid!).subscribe(data =>{
    this.issues = data;
    console.log(this.issues);
    })
  }

  returnBook(iid: number){
    this.issueService.returnBook(iid, this.issues).subscribe(data =>{
      if(data == null){
        alert('Already returned!');
      }else{
        alert('Book returned!');
        location.reload();
      }
    });
  }

  UserOverdues(){
    this.issueService.userOverdues(this.user.uid!).subscribe(data =>{
      this.overdues = data;
    });
  }
}
