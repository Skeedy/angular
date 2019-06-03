import { Command} from './command';

export class User {
    id: number;
    username: string;
    email: string;
    commands: Command[];
}
