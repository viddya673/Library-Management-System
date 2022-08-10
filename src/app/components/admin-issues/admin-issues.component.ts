import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IssuesService } from 'src/app/services/issues.service';
import { Issue } from 'src/app/models/issue';

@Component({
  selector: 'app-admin-issues',
  templateUrl: './admin-issues.component.html',
  styleUrls: ['./admin-issues.component.css']
})
export class AdminIssuesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private userService: UserService, private issueService: IssuesService) { }

  uid: number;
  user: User = new User;
  issues: Issue[];
  overdues: Issue[];

  ngOnInit(): void {
    this.uid = this.route.snapshot.params['uid'];
    // this.userService.getUserById(this.uid).subscribe(data =>{
    //   this.user = data;
    // }, error => console.log(error))
    this.getIssuesofUser();
  }

  getIssuesofUser(){
    this.issueService.getIssues(this.uid).subscribe(data =>{
      this.issues = data;
    });
  }
}
