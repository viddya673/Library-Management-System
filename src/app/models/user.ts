import { Role } from "./role";

export class User {
    uid?: number;
    fullname: string;
    email: string;
    password: string;
    role?: Role;
}
