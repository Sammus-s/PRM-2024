import { API } from "../@libs/axios";
import { ICategory } from "../@libs/types";

const _ENDPOINT = '/categories';

const getAll = () => (API.get(_ENDPOINT));
const getById = (id:number) => (API.get(`${_ENDPOINT}/${id}`));
const create = (category:ICategory) => (API.post(_ENDPOINT), category);
const update = (id:number, category:ICategory) => (API.put(`${_ENDPOINT}/${id}`, category));
const remove = (id:number) => (API.delete(`${_ENDPOINT}/${id}`));

export const CategoryService = {
    getAll
    ,getById
    ,update
    ,create
    ,remove    
}