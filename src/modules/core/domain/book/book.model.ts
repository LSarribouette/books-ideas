import {Author} from "../author/author.model";

export interface Book {
  work_key: string,
  title: string,
  cover_url?: string,
  subjects: string[],
  authors: Author[],
  first_publish_year?: string
  url_open_library: string
}
