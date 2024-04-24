import { createRouter, createWebHistory } from 'vue-router'
import routes from "./routes";
import NProgress from 'nprogress';

const router = createRouter({
  // eslint-disable-next-line no-undef
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

router.beforeEach((to) => {
  // Start NProgress UI
  NProgress.start();

  // Remove last trailing slashes
  if (/\/{1,}$/.test(to.fullPath) && to.name !== "Home") {
    return to.fullPath.replace(/\/{1,}$/, "");
  }
});

// router.beforeResolve((to, from, next) => {
//   // If this isn't an initial page load.
//   if (to.name) {
//     // Start the route progress bar.
//     NProgress.start()
//   }
//   next()
// })

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router
