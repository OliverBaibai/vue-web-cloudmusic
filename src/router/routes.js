import Layout from "@view/layout/Index";

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
export const loginRouter = [
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录",
      isLogin: true,
    },
    component: (resolve) => {
      require(["@/views/login/Index"], resolve);
    },
  },
];
