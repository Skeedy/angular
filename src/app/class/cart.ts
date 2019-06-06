import {Assoc} from './assoc';
import {Menu} from './menu';
import {Price} from './price';
import {CartRow} from './cart-row';
import {TypePrice} from './type-price';


export class Cart {
    cartRows: CartRow[];
    assocs: Assoc[];
    menus: Menu[];

    constructor() {
        this.cartRows = [];
        this.assocs = [];
        this.menus = [];
    }

    getList() {
        return this.cartRows;
    }

    addAssoc(assoc: Assoc) {
        let cartRow = this.cartRows.find((cartRow: CartRow) => {
            return cartRow.idAssoc === assoc.id;
        });
        if (cartRow) {
            this.cartRows.map((cartRow: CartRow) => {
                if (cartRow.idAssoc === assoc.id) {
                    cartRow.nbCart += 1;
                }
                return cartRow;
            });
        } else {
            cartRow = new CartRow();
            cartRow.idAssoc = assoc.id;
            cartRow.assoc = assoc;
            cartRow.nbCart = 1;
            this.cartRows.push(cartRow);
        }
    }

    removeAssoc(assoc: Assoc) {
        const cartRowIndex = this.cartRows.findIndex((cartRow: CartRow) => {
            return cartRow.idAssoc === assoc.id;
        });
        if (cartRowIndex > -1) {
            const cartRow = this.cartRows[cartRowIndex];
            cartRow.nbCart -= 1;
            if (cartRow.nbCart < 1) {
                this.cartRows.splice(cartRowIndex, 1);
            }
        }
    }

    getCartQuantity(assoc: Assoc) {
        const cartRow = this.cartRows.find( (cartRow: CartRow) => {
            return cartRow.idAssoc === assoc.id;
        });

        return cartRow ? cartRow.nbCart : 0;
    }

    getTotalQuantity() {
        let quantity = 0;
        this.cartRows.forEach((cartRow: CartRow) => {
            quantity += cartRow.nbCart;
        });
        return quantity;
    }

    getPrice() {
        return this.getAssocPrice();
    }

    private getAssocPrice() {
        let price = 0;

        this.cartRows.forEach((cartRow: CartRow) => {
            const prices = cartRow.assoc.prices;
            const selectedPrice = prices.find( (price) => {
                return price.type.value === TypePrice.STANDARD;
            });
            const val = selectedPrice ? parseFloat(selectedPrice.value) : 0;
            price += cartRow.nbCart * val;
        });
        return price;
    }
}
