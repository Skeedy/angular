import {User} from './user';
import {CommandAssoc} from './command-assoc';
import {CommandMenu} from './command-menu';
import { State } from "./state";

export class Command {
    id: number;
    user: User;
    commandassocs: CommandAssoc[];
    commandMenus: CommandMenu[];
    state: State;
    price: number;

}
