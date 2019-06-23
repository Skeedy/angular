import { Assoc } from './assoc';
import { Menu } from './menu';

export class CartRow {
  static ASSOC = 'assoc';
  static MENU = 'menu';

  assoc: Assoc|null;
  menu: Menu|null;
  nbCart: number;
  price: string;
  priceAssoc: string;
}
