import AdminPage from '@/pages/admin-portal/Admin'
import ForgetPassword from "@/pages/auth/ForgetPassword";
import RecoverPassword from "@/pages/auth/RecoverPassword";

import authService from '@/services/auth';

const EmptyParentComponent = {
  render: (h) => h('router-view'),
}

const authRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/auth/Auth'),
  },
  {
    path: '/sign-up',
    name: 'registration',
    component: () => import('@/pages/auth/Register'),
  },
  {
    path: '/logout',
    name: 'logout',
    beforeEnter: (to, from, next) => {
      authService.logout()
        .then(() => next('/login'));
    }
  },
  {
    path: '/forget-password',
    name: 'forgetPassword',
    component: ForgetPassword
  },
  {
    path: '/new-password',
    name: 'newPassword',
    component: RecoverPassword
  }
]

const adminRoutes = [
  {
    path: '',
    redirect: 'affiliates',
  },
  {
    path: 'affiliates',
    component: EmptyParentComponent,
    children: [
      {
        path: '',
        name: 'affiliates',
        component: () => import('@/pages/admin-portal/children/Affiliates'),
      },
    ],
  },

  {
    path: 'employees',
    component: EmptyParentComponent,
    children: [
      {
        path: '',
        name: 'employees',
        component: () => import('@/pages/admin-portal/children/Employees'),
      },
      {
        path: 'add-user',
        name: 'add-user',
        component: () => import('@/pages/admin-portal/children/AddUser')
      },
      {
        path: ':id/edit',
        name: 'edit-employee',
        props: {
          isEdit: true,
        },
        component: () => import('@/pages/admin-portal/children/AddUser')
      }
    ],
  },

  {
    path: 'cards',
    component: EmptyParentComponent,
    children: [
      {
        path: '',
        name: 'cards',
        component: () => import("@/pages/admin-portal/children/Cards"),
      },
      {
        path: 'add-course',
        name: 'add-course',
        component: () => import("@/pages/admin-portal/children/CourseEditAndCreation"),
      },
      {
        path: ':id/edit',
        name: 'edit-course',
        props: {
          isEdit: true,
        },
        component: () => import("@/pages/admin-portal/children/CourseEditAndCreation"),
      },
      {
        path: '/department/:id',
        name: 'department',
        component: () => import("@/pages/admin-portal/children/DepartmentOpen")
      }
    ]
  },
  {
    path: 'adaptation',
    component: () => import("../pages/admin-portal/children/CreateAdaptation"),
    children: [
      {
        path: ':id',
        name: 'adaptation',
        component:  () => import("@/components/adaptation/ChooseAdaptation"),
      },
      {
        path: ':id/add-lesson',
        name: 'add-lesson',
        component: () => import("../components/adaptation/lessons/AddLesson")
      },
      {
        path: ':id/add-test',
        name: 'add-test',
        component: () => import("../components/adaptation/test/AddTest")
      },
      {
        path: ':id/lesson-add-test',
        name: 'lesson-add-test',
        component: () => import("../components/adaptation/test/AddTest")
      }
    ]
  },

  {
    path: '/admin/profile',
    name: 'profile',
    component: EmptyParentComponent,
    redirect: '/change-password',
    children: [
      //TODO: Add base profile page
    ]
  },
  {
    path: 'settings-profile',
    name: 'settingsProfile',
    component: () => import("@/pages/admin-portal/children/SettingsProfile"),
  },
  {
    path: 'change-password',
    name: 'change-password',
    component: () => import("@/pages/admin-portal/children/ChangePassword"),
  }
]

const routes = [
  {
    path: '/',
    redirect: '/login',
    name: 'Home'
  },
  ...authRoutes,
  {
    path: '/admin',
    component: AdminPage,
    name: 'admin',
    redirect: 'affiliates',
    children: adminRoutes
  },

  { path: '**', component: AdminPage }
];

export default routes;
