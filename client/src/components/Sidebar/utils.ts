import { SidebarItem } from "./types";

export function getLocaleKey(item: SidebarItem) {
  return `sidebar.${item}`;
}
