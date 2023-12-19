import { AuthorModel } from "../author/author.model"; //TSLint pour formatting

export type BookSubject = //en js on fait des types (pas enum) ==> passer dans domaine? book autheur, subject...
  'climate change'
  | 'science'
  | 'romance'
  | 'comedy'
  | 'history'
  | 'geography'
  | 'literature'
  | 'education'
  | 'dystopias'
  | 'culture';

export interface WorkModel { // book ?
  key: string,
  title: string,
  cover_id: number,
  subjects: BookSubject[],
  authors: Array<AuthorModel>,
  first_publish_year: number
  url_open_library: string
}
