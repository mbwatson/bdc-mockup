export const menuItems = [
    {
        text: 'Home',
        path: '/',
    },
    {
        text: 'About',
        path: '/about',
    },
    {
        text: 'Resources',
        path: '/resources',
        submenu: [
            {
                text: 'Data',
                path: '/resources/data',
            },
            {
                text: 'BYOD',
                path: '/resources/byod',
            },
            {
                text: 'Services',
                path: '/resources/services',
            },
            {
                text: 'Learn',
                path: '/resources/learn',
            },
        ],
    },
    {
        text: 'Contact',
        path: '/contact',
    },
]
