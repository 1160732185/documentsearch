import {Type} from './Type';


class Book {
  bar: string;
  isbn: string;
  state: string;
  location: string;
}

export class Information {
  types: Type[];
  ano: number[];
  books: Book[];
  cata: Map<string, number>;
  catd: Map<string, number>;
  catt: Map<string, number>;
  catl: Map<string, number>;
}
