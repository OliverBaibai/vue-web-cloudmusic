import Layout from "@/views/layout/Index";


export const pageError = {
  path: "*",
  name: "404",
  meta: {
    title: "404-您访问的页面不存在",
  },
  component: (resolve) => {
    require(["@/views/error/404"], resolve);
  },
};

/**
 * 登录注册
 */
export const loginRouter = [{
  path: "/login",
  name: "login",
  meta: {
    title: "登录",
    isLogin: true,
  },
  component: (resolve) => {
    require(["@/views/login/Index"], resolve);
  },
}, ];

export const appRouter = [{
  path: '/',
  redirect: {
    name: 'home'
  },
  meta: {
    title: '首页',
    keepAlive: true
  },
  component: Layout,
  children: [{
    path: 'home',
    meta: {
      title: '首页',
      keepAlive: true
    },
    name: 'home',
    component: resolve => {
      require(['@/views/home/Index'], resolve)
    }
  }, ]
}]

export const routes = [...pageError, ...loginRouter, ...appRouter]