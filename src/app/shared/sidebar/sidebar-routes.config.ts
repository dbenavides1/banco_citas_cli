import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [

    {
        path: '', title: 'Dashboard', icon: 'bx bx-cube', class: 'sub open', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/dashboard/home', title: 'Home', icon: 'bx bx-home-circle', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/citas', title: 'Citas', icon: 'bx bx-calendar-check', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/clientes', title: 'Clientes', icon: 'bx bx-user-pin', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/usuarios', title: 'Usuarios', icon: 'bx bx-user', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/ventanillas', title: 'Ventanillas', icon: 'bx bx-directions', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/pqrs', title: 'Pqrs', icon: 'bx bx-envelope', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    { path: '/pricing', title: 'Soporte', icon: 'bx bx-support', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

    
];