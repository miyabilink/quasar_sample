const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: '', redirect: 'sample1' },
      { path: 'sample1', component: () => import('pages/Sample1.vue') },
      { path: 'sample2', component: () => import('pages/Sample2.vue') },
      { path: 'sample2/:key', component: () => import('pages/Sample2detail.vue') },
      { path: 'sample3', component: () => import('pages/Sample3.vue') }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
