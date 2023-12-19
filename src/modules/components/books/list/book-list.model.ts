import {BookItem} from "../item/book-item.model";

export type PredefinedSubject =
  ''
  | 'climate change'
  | 'science'
  | 'languages'
  | 'comedy'
  | 'history'
  | 'geography'
  | 'literature'
  | 'education'
  | 'dystopias'
  | 'culture';


export interface BookList {
  bookItems: BookItem[],
  subject: PredefinedSubject,
  searchValue: string
}
