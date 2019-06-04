import {Product} from './product';
import {Type} from './type';
import {Price} from './price';
import {Image} from './image';

export class Assoc {
    id: number;
    type: Type;
    product: Product;
    quantity: number;
    prices: Price[];
    image: Image;
}
