import {AuthorModel} from "../author/author.model";

export interface WorkModel {
    key: string,
    title: string,
    cover_id: number,
    subjects: Array<string>,
    authors: Array<AuthorModel>,
    first_publish_year: number
    url_open_library: string
}
