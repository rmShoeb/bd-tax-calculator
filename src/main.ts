import { AppContent } from "./components/appContent/appContent.component";

document.addEventListener('DOMContentLoaded', () => {
    const appContent = new AppContent();
    const app = document.querySelector<HTMLDivElement>('#app')!;
    app.innerHTML = appContent.prepareAppContent();
    appContent.updateAppContent();
});