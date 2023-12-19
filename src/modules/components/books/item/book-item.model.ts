import {Author} from "../../../core/domain/author/author.model";

export interface BookItem {
  title: string,
  authors: Author[],
  first_publish_year?: string,
  cover_url?: string,
  url_open_library: string,
  //states
}
