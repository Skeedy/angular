import { Assoc } from './assoc';
import { Menu } from './menu';

export class Cart {
    assocs: Assoc[];
    menus: Menu[];

    constructor() {
        this.assocs = [];
        this.menus = [];
    }

    getTotalQuantity() {
        return this.assocs.length + this.menus.length;
    }
}
