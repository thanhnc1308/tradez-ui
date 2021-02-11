import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/pages/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/pages/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: '',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'Profile', icon: 'user', noCache: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // #region sidebar
  {
    path: '/market-info',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/market-info/ListStock.vue'),
        name: 'MarketInfo',
        meta: { title: 'Market Info', icon: 'clipboard' }
      }
    ]
  },
  {
    path: '/stock-screener',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/stock-screener/StockScreener.vue'),
        name: 'StockScreener',
        meta: { title: 'Stock Screener', icon: 'clipboard' }
      }
    ]
  },
  {
    path: '/watch-list',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/watch-list/ListWatchStock.vue'),
        name: 'WatchList',
        meta: { title: 'Watch List', icon: 'clipboard' }
      }
    ]
  },
  {
    path: '/notification',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/notification/ListNotification.vue'),
        name: 'Notification',
        meta: { title: 'Notification', icon: 'clipboard' }
      }
    ]
  },
  {
    path: '/technical-analysis',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/charts/CandlestickCharts.vue'),
        name: 'CandlestickCharts',
        meta: { title: 'Candlestick Charts', icon: 'clipboard' }
      }
    ]
  },
  {
    path: '/investing-journal',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/investing-journal/ListJournal.vue'),
        name: 'ListJournal',
        meta: { title: 'Investing Journal', icon: 'clipboard' }
      }
    ]
  },
  {
    path: '/risk-management',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/risk-management/RiskManagement.vue'),
        name: 'RiskManagement',
        meta: { title: 'Risk Management', icon: 'clipboard' }
      }
    ]
  },
  // #endregion sidebar

  // #region hidden router
  {
    path: '/test',
    component: Layout,
    children: [
      {
        path: 'test-component',
        component: () => import('@/pages/TestComponent'),
        name: 'test-component'
      },
      {
        path: 'test-chart',
        component: () => import('@/pages/TestChart'),
        name: 'test-chart'
      }
    ],
    hidden: true
  },
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: 'Permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/components-demo/permission/page'),
        name: 'PagePermission',
        meta: {
          title: 'Page Permission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/components-demo/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: () => import('@/views/components-demo/permission/role'),
        name: 'RolePermission',
        meta: {
          title: 'Role Permission',
          roles: ['admin']
        }
      }
    ],
    hidden: true
  },

  /** when your routing map is too long, you can split it into small modules **/
  componentsRouter,
  chartsRouter,
  nestedRouter,
  tableRouter,

  {
    path: '/example',
    component: Layout,
    redirect: '/example/list',
    name: 'Example',
    meta: {
      title: 'Example',
      icon: 'el-icon-s-help'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/components-demo/example/create'),
        name: 'CreateArticle',
        meta: { title: 'Create Article', icon: 'edit' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/components-demo/example/edit'),
        name: 'EditArticle',
        meta: { title: 'Edit Article', noCache: true, activeMenu: '/example/list' },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/components-demo/example/list'),
        name: 'ArticleList',
        meta: { title: 'Article List', icon: 'list' }
      }
    ],
    hidden: true
  },

  {
    path: '/tab',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/components-demo/tab/index'),
        name: 'Tab',
        meta: { title: 'Tab', icon: 'tab' }
      }
    ],
    hidden: true
  },
  {
    path: '/icon',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/components-demo/icons/index'),
        name: 'Icons',
        meta: { title: 'Icons', icon: 'icon', noCache: true }
      }
    ],
    hidden: true
  },
  {
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: 'Error Pages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/pages/error-page/401'),
        name: 'Page401',
        meta: { title: '401', noCache: true }
      },
      {
        path: '404',
        component: () => import('@/pages/error-page/404'),
        name: 'Page404',
        meta: { title: '404', noCache: true }
      }
    ],
    hidden: true
  },
  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    children: [
      {
        path: '',
        component: () => import('@/views/components-demo/guide/index'),
        name: 'Guide',
        meta: { title: 'Guide', icon: 'guide', noCache: true }
      }
    ],
    hidden: true
  },

  {
    path: '/excel',
    component: Layout,
    redirect: '/excel/export-excel',
    name: 'Excel',
    meta: {
      title: 'Excel',
      icon: 'excel'
    },
    children: [
      {
        path: 'export-excel',
        component: () => import('@/views/components-demo/excel/export-excel'),
        name: 'ExportExcel',
        meta: { title: 'Export Excel' }
      },
      {
        path: 'export-selected-excel',
        component: () => import('@/views/components-demo/excel/select-excel'),
        name: 'SelectExcel',
        meta: { title: 'Export Selected' }
      },
      {
        path: 'export-merge-header',
        component: () => import('@/views/components-demo/excel/merge-header'),
        name: 'MergeHeader',
        meta: { title: 'Merge Header' }
      },
      {
        path: 'upload-excel',
        component: () => import('@/views/components-demo/excel/upload-excel'),
        name: 'UploadExcel',
        meta: { title: 'Upload Excel' }
      }
    ],
    hidden: true
  },

  {
    path: '/zip',
    component: Layout,
    redirect: '/zip/download',
    alwaysShow: true,
    name: 'Zip',
    meta: { title: 'Zip', icon: 'zip' },
    children: [
      {
        path: 'download',
        component: () => import('@/views/components-demo/zip/index'),
        name: 'ExportZip',
        meta: { title: 'Export Zip' }
      }
    ],
    hidden: true
  },

  {
    path: '/pdf',
    component: Layout,
    redirect: '/pdf/index',
    children: [
      {
        path: '',
        component: () => import('@/views/components-demo/pdf/index'),
        name: 'PDF',
        meta: { title: 'PDF', icon: 'pdf' }
      }
    ],
    hidden: true
  },

  {
    path: '/pdf/download',
    component: () => import('@/views/components-demo/pdf/download'),
    hidden: true
  },

  {
    path: '/theme',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/components-demo/theme/index'),
        name: 'Theme',
        meta: { title: 'Theme', icon: 'theme' }
      }
    ],
    hidden: true
  },

  {
    path: '/clipboard',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/components-demo/clipboard/index'),
        name: 'ClipboardDemo',
        meta: { title: 'Clipboard', icon: 'clipboard' }
      }
    ],
    hidden: true
  },

  // #endregion hidden router

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  mode: 'history',
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
