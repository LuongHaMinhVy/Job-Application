import { createRouter, createWebHistory } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/admin",
      name: "admin",
      component: () => import(/* webChunkName:"admin" */ "@/views/Admin.vue"),
      children: [
        {
          path: "user-manager",
          name: "user-manager",
          component: () => import(/* webChunkName:"user-manager" */ "@/views/userManager.vue"),
        },
        
        {
          path: "certificate-manager",
          name: "certificate-manager",
          component: () => import(/* webChunkName:"user-manager" */ "@/views/certificateManager.vue"),
        },
        {
      path: "enterprise-manager",
      name: "enterprise-manager",
      component: () => import("@/views/EnterpriseManager.vue"),
    },
        {
      path: "cv-languages",
      name: "cv-languages",
      component: () => import("@/views/CVLanguageManager.vue"),
    },
      ],
    },
  ],
});

export default router;
