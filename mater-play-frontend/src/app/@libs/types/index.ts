export interface IMovie {
    id?:string;
    title:string;
    description:string;
    poster:string;
    ageRating:string;
}

export interface ICategory{
    id?: number;
    name: string;
    active: boolean;
}