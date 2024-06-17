export interface AppDrawerChild {
  mini: boolean;
}

export enum AppNavListItemEnum {
  NOTIFICATIONS = "notifications",
}

export interface AppNavListItem {
  text: string;
  icon?: string;
  color?: string;
  to?: string;
  childs?: AppNavListItem[];
  chip?: string;
  label?: string;
  type?: AppNavListItemEnum;
  action?: (event: PointerEvent) => void;
}
