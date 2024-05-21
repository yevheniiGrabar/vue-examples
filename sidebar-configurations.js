export const adminSidebar = {
  headerItem: {
      logo: '',
      title: ''
    },
  bodyItems: [
    {
      icon: 'ri-pie-chart-2-line',
      title: 'cabinet',
      path: '/cabinet',
      isRoute: false
    },
    {
      icon: 'ri-file-copy-2-line',
      title: 'cards',
      path: '/admin/cards',
      isRoute: false
    },
    {
      icon: 'ri-community-line',
      title: 'branches',
      path: '/admin/affiliates',
      isRoute: false
    },
    {
      icon: 'ri-group-line',
      title: 'employees',
      path: '/admin/employees',
      isRoute: false
    },
    {
      icon: 'ri-draft-line',
      title: 'tasks',
      path: '/tasks',
      isRoute: false
    },
    {
      icon: 'ri-funds-box-line',
      title: 'analytics',
      path: '/analytics',
      isRoute: false
    },
  ],
  bottomItems: [
    {
      icon: 'ri-settings-5-line',
      title: 'settings',
      path: 'settings',
      isRoute: false
    },
    {
      icon: 'ri-user-line',
      title: 'profile',
      path: '/admin/settings-profile',
      isRoute: false
    },
  ],
  footerItem: {
    icon: 'ri-logout-circle-r-line',
    title: 'logout',
    path: '/logout',
    isRoute: false
  }
}
