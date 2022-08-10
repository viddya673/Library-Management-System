import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/models/books';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Issue } from 'src/app/models/issue';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {

  books: Books[];
  user: User;
  issue: Issue;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.getBooks();
    this.user = JSON.parse(localStorage.getItem('user') || 'null') as User;
    if(this.user==null){
      this.router.navigate([''])
  }

}

  private getBooks(){
    this.userService.getBooks().subscribe(data =>{
      this.books = data;
    })
  }

  borrow(bid: number){
    this.userService.issueBook(this.user.uid!, bid, this.issue).subscribe(data => {
      if(data != null){
        alert('Book Issued!');
        location.reload();
      }else{
        alert('Book Unavailable');
      }
    }, error => console.log(error));
  }

}
