import { Component, NgModuleFactory, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Books } from 'src/app/models/books';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-manage-books',
  templateUrl: './manage-books.component.html',
  styleUrls: ['./manage-books.component.css']
})
export class ManageBooksComponent implements OnInit {

  newBookForm: FormGroup;
  closeResult: string;
  books: Books[];
  constructor(private fb: FormBuilder, private service: UserService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getBooks();
    this.newBookForm = this.fb.group({
      bname:this.fb.control(''),
      author:this.fb.control(''),
      publisher:this.fb.control(''),
      noOfCopies:this.fb.control(''),
    })
  }

  private getBooks(){
    this.service.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  deleteBook(bid: number){
    this.service.deleteBook(bid).subscribe(data =>{
      alert('Book Deleted');
      this.getBooks();
    })
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
    let book: Books = {
      author:this.Author.value,
      bname:this.Bname.value,
      noOfCopies:this.NoOfCopies.value,
      publisher:this.Publisher.value,
    }
    this.service.addBook(book).subscribe(data => {
      alert('Book added');
      location.reload();
    },error => console.log(error));
  }

  public get Bname(): FormControl {
    return this.newBookForm.get('bname') as FormControl;
  }
  public get Author(): FormControl {
    return this.newBookForm.get('author') as FormControl;
  }
  public get NoOfCopies(): FormControl {
    return this.newBookForm.get('noOfCopies') as FormControl;
  }
  public get Publisher(): FormControl {
    return this.newBookForm.get('publisher') as FormControl;
  }
  clearForm() {
    this.Bname.setValue('');
    this.Author.setValue('');
    this.Publisher.setValue('');
    this.NoOfCopies.setValue('');
  }

  setForm(book: Books){
    this.Bname.setValue(book.bname)
    this.Author.setValue(book.author)
    this.Publisher.setValue(book.publisher)
    this.NoOfCopies.setValue(book.noOfCopies)
  }

}
