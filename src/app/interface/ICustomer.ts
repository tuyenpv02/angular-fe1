import { IHangKhach } from "./IHangKhach";

export interface ICustomer {
    maKhachHang:number;
    tenKhachHang:string;
    soDienThoai:string;
    gioiTinh:boolean;
    hangKhachHang:IHangKhach;
}
