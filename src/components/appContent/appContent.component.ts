import { NAVIGATION_ITEMS } from '../../data/navigationItems.data';
import { RENDER_MAPPER } from '../../data/renderMapping.data';
import { renderSingleNavigation } from '../navigation/navigation.component';
import appContentTemplate from './appContent.template.html?raw'

export class AppContent {
    constructor() {
        // Attach handler to window to make it globally accessible
        (window as any).handleNavClick = this.onNavItemClick.bind(this);
    }

    public onNavItemClick(event: Event): void {
        const selectedId = (event.target as HTMLInputElement).id;
        NAVIGATION_ITEMS.forEach(item => {
            item.isActive = item.id === selectedId;
        });
        this.updateAppContent(selectedId);
    }

    public prepareAppContent(): string {
        const navigationBar = NAVIGATION_ITEMS
                .map(navitem => renderSingleNavigation(navitem, "handleNavClick(event)"))
                .join("");
        return appContentTemplate.replace("{navigation}", navigationBar);
    }

    public updateAppContent(id?: string): void {
        if(id === undefined || id === null) {
            id = NAVIGATION_ITEMS[0].id;
        }
        this.updateContentArea(id);
    }

    private updateContentArea(id: string): void {
        const contentArea = document.querySelector<HTMLDivElement>('#contentArea')!;
        if (contentArea) {
            contentArea.innerHTML = RENDER_MAPPER.get(id) || 'Either I made a mistake or you are trying to break me... :(';
            
        }
    }
}