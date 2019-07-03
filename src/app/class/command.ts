import {User} from './user';
import {CommandAssoc} from './command-assoc';
import {CommandMenu} from './command-menu';

export class Command {
    id: number;
    user: User;
    commandassocs: CommandAssoc[];
    commandMenus: CommandMenu[];
}
