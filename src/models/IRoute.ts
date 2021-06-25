import {FC} from "react";

export interface IRoute {
    component: FC | any;
    path: string;
    name: string;
    exact?: boolean;
    routes?: IRoute[];
}//2:28:44