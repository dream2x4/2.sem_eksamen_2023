import { createRouter, createWebHistory } from "vue-router"
import { getAuth, onAuthStateChanged } from "firebase/auth";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: () => import("../views/HomeView.vue")},
    { path: "/about", component: () => import("../views/AboutView.vue")},
    { path: "/events", component: () => import("../views/EventsView.vue")},
    { path: "/eventdetail/:id", component: () => import("../views/EventDetailView.vue")},
    { path: "/volunteer", component: () => import("../views/VolunteerView.vue")},
    { path: "/membership", component: () => import("../views/MembershipView.vue")},
    /*{ path: "/register", component: () => import("../views/RegisterView.vue")},*/
    { path: "/sign-in", component: () => import("../views/SignInView.vue")},
    { 
      path: "/admin",
      component: () => import("../views/AdminView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("you dont have access!");
      next("/");
    }
  } else {
    next();
  }
});

export default router
