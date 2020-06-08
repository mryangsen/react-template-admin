/* eslint-disable no-unused-vars */
import {
    Login,
    Artical,
    ArticalDetail,
    Settings,
    Dashboard,
    Notification,
    NotFound,
  } from "../viwes/index.js";

  export const mainRouter = [
    {
      pathname: "/login",
      component: Login,
    },
    {
      pathname: "/404",
      component: NotFound,
    },
  ];
  export const adminRouter = [


    {
      pathname: "/admin/artical",
      component: Artical,
      title:'文章管理',
      isNav:true,
      exact:true
    },
    {
      pathname: "/admin/dashboard",
      component: Dashboard,
      icon:'DashboardOutlined',
      title:'仪表盘',
      isNav:true
    },
    {
      pathname: "/admin/Notification",
      component: Notification,
      title:'通知中心',
      isNav:true,
      exact:true
    },
    {
      pathname: "/admin/artical/articaldetail/:id",
      component: ArticalDetail,
    },
    {
      pathname: "/admin/settings",
      component: Settings,
      title:'页面设置',
      isNav:true
    },
  ];
