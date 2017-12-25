import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import Login from '../view/login.vue';
// root 
import dashboard from '../view/dashboard.vue';
// Caller...
import callerMain from '../view/caller_main.vue';
import callerRecords from '../view/caller/records.vue';
import callerSettings from '../view/caller/settings.vue';
import callerClues from '../view/caller/clues.vue';
import callerTasks from '../view/caller/tasks.vue';
import callerStaffs from '../view/caller/staffs.vue';
import callerCounts from '../view/caller/counts.vue';
// Messages...
import systemsMain from '../view/systems_main.vue';
import systemsIndex from '../view/systems/index.vue';

// expose routes array to generate main sidebar and secondary sidebar...
const routesArr = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,
    title: '地产后台',
    children: [
      {
        path: 'caller',
        component: callerMain,
        name: 'caller',
        title: 'Caller客',
        meta: {
          start_path: '/dashboard/caller/records',
          icon: 'el-icon-phone'
        },
        children: [
          {
            path: 'clues',
            name: 'caller_clues',
            component: callerClues,
            title: '线索管理',
            meta: {
              parent_name: 'caller',
              full_path: '/dashboard/caller/clues'
            }
          },
          {
            path: 'records',
            name: 'caller_records',
            component: callerRecords,
            title: '拨打记录',
            meta: {
              parent_name: 'caller',
              full_path: '/dashboard/caller/records'
            }
          },
          {
            path: 'tasks',
            name: 'caller_tasks',
            component: callerTasks,
            title: '任务管理',
            meta: {
              parent_name: 'caller',
              full_path: '/dashboard/caller/tasks'
            }
          },
          {
            path: 'staffs',
            name: 'caller_staffs',
            component: callerStaffs,
            title: '员工列表',
            meta: {
              parent_name: 'caller',
              full_path: '/dashboard/caller/staffs'
            }
          },
          {
            path: 'settings',
            name: 'caller_settings',
            component: callerSettings,
            title: '设置',
            meta: {
              parent_name: 'caller',
              full_path: '/dashboard/caller/settings'
            }
          },
          {
            path: 'counts',
            name: 'caller_counts',
            component: callerCounts,
            title: '统计',
            meta: {
              parent_name: 'caller',
              full_path: '/dashboard/caller/counts'
            }
          },
        ] 
      },
      {
        path: 'systems',
        name: 'systems',
        component: systemsMain,
        title: '系统管理',
        meta: {
          start_path: '/dashboard/systems/index',
          icon: 'el-icon-setting'
        },
        children: [
          {
            path: 'index',
            name: 'systems_index',
            component: systemsIndex,
            title: '系统设置',
            meta: {
              parent_name: 'systems',
              full_path: '/dashboard/systems/index'
            }
          },
        ]
      },  
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    title: '登录'
  }
]
const router = new Router({
  routes: routesArr
})
export { routesArr, router }
