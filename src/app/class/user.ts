import { Command} from './command';

export class User {
    id: number;
    username: string;
    fname: string;
    lname: string;
    email: string;
    commands: Command[];
}
