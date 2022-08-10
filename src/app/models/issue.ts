import { Books } from "./books";
import { User } from "./user";

export class Issue {

    iid: number;
    issueDate: Date;
    dueDate: Date;
    returnDate: Date;
    user: User;
    books: Books;
}
