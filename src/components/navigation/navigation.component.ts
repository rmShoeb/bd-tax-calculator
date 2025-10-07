import { NavigationItem } from '../../types/navigation.type';
import navigationTemplate from './navigation.template.html?raw';

export function renderSingleNavigation(navItem: NavigationItem, navItemClickFn: string): string {
    return navigationTemplate
            .replaceAll("{btn-id}", navItem.id)
            .replaceAll("{btn-title}", navItem.title)
            .replaceAll("{btn-click-fn}", navItemClickFn);
}