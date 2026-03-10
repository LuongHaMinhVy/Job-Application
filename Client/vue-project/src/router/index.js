import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/register",
      name: "register",
      component: () =>
        import(/* webChunkName:"register" */ "../views/auth/Register.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webChunkName:"login" */ "../views/auth/Login.vue"),
    },
    {
      path: "",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      component: () =>
        import(/* webChunkName:"home" */ "../views/user/Home.vue"),
    },
    {
      path: "/profile",
      redirect: "/profile/user-profile",
      component: () =>
        import(/* webChunkName:"profile" */ "../views/user/Profile.vue"),
      children: [
        {
          path: "user-profile",
          component: () =>
            import(
              /* webChunkName:"user-profile" */ "../components/Company/Homepage/UserProfile.vue"
            ),
        },
        {
          path: "cv-manager",
          name: "cv-manager",
          component: () =>
            import(
              /* webChunkName:"cv-manager" */ "../components/Company/Homepage/CvManager.vue"
            ),
        },
        {
          path: "certificate-list",
          name: "certificate-list",
          component: () =>
            import(
              /* webChunkName:"certificate-list" */ "../components/Company/Homepage/CertificateList.vue"
            ),
        },
        {
          path: "interview",
          name: "interview",
          component: () =>
            import(/* webpackChunkName:"interview" */ "../components/Company/Homepage/Interview.vue"),
         }
       
      ],
    },
    {
      path : "/candidates" ,
      component : () =>
         import("../views/user/Candidate.vue")
     },
     {
      path : "/candidate-detail/:id" ,
      component : () => import("../views/user/CandidateDetail.vue")
     },
     {
      path: "/joblist",
      name: "company",
      component: () =>
        import(/* webpackChunkName:"company" */ "../views/company/Joblist.vue"),
     },
     {
      path : "/job-detail/:id" ,
      component : () => import("../views/company/Jobdetail.vue")
     },
     
  ],
});

export default router;
