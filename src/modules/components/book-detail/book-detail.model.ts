export interface BookDetailModel {
  title: string;
  full_title?: string;
  authors: Array<string>;
  description?: string;
  subjects?: Array<string>;
  isbn_13?: string;
  languages?: Array<string>;
  publication_date: string;
  publishers?: Array<string>;
  number_pages?: number;
  cover?: string;
  open_library_url?: string;
  selected: boolean;
}
