import {User} from './user';
import {CommandAssoc} from './command-assoc';

export class Command {
    id: number;
    user: User;
    commandassocs: CommandAssoc[];
}
