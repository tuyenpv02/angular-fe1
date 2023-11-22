export interface IProduct {
    id?:number|string;
    name?:string;
}

export interface IProductCreate {
    name:string;
}

export interface IProductCart {
    id:number;
    name:string;
    value:number
}
