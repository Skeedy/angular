import {Assoc} from './assoc';
import {Menu} from './menu';
import {Price} from './price';


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

    getPrice() {
        let price: any = 0;

        this.assocs.map((assoc: Assoc) => {
            const prices = assoc.prices;
            prices.map((p: Price) => {
                price += parseFloat(p.value);
            });
        });

        return price;
    }
}
