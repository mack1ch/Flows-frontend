export interface IHeaderItem {
    title: string;
    path: string;
    icon?: string;
    submenu?: boolean;
    subMenuItems?: IHeaderItem[];
}
