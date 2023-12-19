import {WorkModel} from "../work/work.model";

export interface SubjectResultModel { //pas besoin ? // pas BlaModel juste Bla
  //metadata
    key: string,
    name: string,
    work_count: number,
    works: Array<WorkModel> // juste works: Work[] (rigoureusement identique)
}
