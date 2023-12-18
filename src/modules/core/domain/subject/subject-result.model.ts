import {WorkModel} from "../work/work.model";

export interface SubjectResultModel {
    key: string,
    name: string,
    work_count: number,
    works: Array<WorkModel>
}
