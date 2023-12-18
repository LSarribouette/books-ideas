import {AuthorModel} from "../../core/domain/author/author.model";

export interface BookDetailModel {
  work_key: string;
  title: string;
  // full_title?: string;
  authors: Array<AuthorModel>;
  description?: string;
  subjects?: Array<string>;
  // isbn_13?: string;
  // languages?: Array<string>;
  first_publish_year: string;
  // publishers?: Array<string>;
  // number_pages?: number;
  cover?: string;
  open_library_url?: string;
  selected: boolean;
}
