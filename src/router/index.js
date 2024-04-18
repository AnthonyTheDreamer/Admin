import { h, resolveComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'
import NProgress from 'nprogress';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: { name: 'DashboardPage' },
    meta: { title: 'common.home', requiresAuth: true },
    children: [
      {
        path: '/dashboard',
        name: 'DashboardPage',
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ '@/views/dashboard/Dashboard.vue'
          ),
        meta: { title: 'dashboard.title'},
      },
      {
        path: '/resume',
        name: 'Resume',
        redirect: { name: 'MyResume' },
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        meta: { title: 'resume.title' },
        children: [
          {
            path: 'my-resume',
            name: 'MyResume',
            component: () => import('@/views/resume/ResumePage.vue'),
            meta: { title: 'resume.resume.title' },
          },
          {
            path: 'certifications',
            name: 'Certifications',
            component: () => import('@/views/resume/CertificationsPage.vue'),
            meta: { title: 'resume.certifications.title' },
          },
          {
            path: 'education',
            name: 'Education',
            component: () => import('@/views/resume/EducationPage.vue'),
            meta: { title: 'resume.education.title' },
          },
          {
            path: 'awards',
            name: 'Awards',
            component: () => import('@/views/resume/AwardsPage.vue'),
            meta: { title: 'resume.awards.title' },
          },
          {
            path: 'experience',
            name: 'Experience',
            component: () => import('@/views/resume/ExperiencePage.vue'),
            meta: { title: 'resume.experience.title' },
          },
          {
            path: 'portfolio',
            name: 'Portfolio',
            component: () => import('@/views/resume/PortfolioPage.vue'),
            meta: { title: 'resume.portfolio.title' },
          },
          {
            path: 'profile',
            name: 'Profile',
            component: () => import('@/views/resume/ProfilePage.vue'),
            meta: { title: 'resume.profile.title' },
          },
          {
            path: 'skills',
            name: 'Skills',
            component: () => import('@/views/resume/SkillsPage.vue'),
            meta: { title: 'resume.skills.title' },
          },
        ],
      },
      {
        path: '/blogs',
        name: 'Blogs',
        redirect: { name: 'BlogList' },
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        meta: { title: 'blogs.title' },
        children: [
          {
            path: 'list',
            name: 'BlogList',
            component: () => import('@/views/blogs/BlogList.vue'),
            meta: { title: 'blogs.list.title' },
          },
          {
            path: 'write',
            name: 'BlogWrite',
            component: () => import('@/views/blogs/BlogForm.vue'),
            meta: { title: 'blogs.write.title' },
          },
          {
            path: ':id',
            name: 'BlogDetail',
            component: () => import('@/views/blogs/BlogDetails.vue'),
            meta: { title: 'blogs.detail.title' },
          },
          {
            path: ':id/edit',
            name: 'BlogEdit',
            component: () => import('@/views/blogs/BlogForm.vue'),
            meta: { title: 'blogs.edit.title' },
          },
        ],
      },
      {
        path: '/settings',
        name: 'Settings',
        redirect: { name: 'AccountSettings' },
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        meta: { title: 'settings.title' },
        children: [
          {
            path: 'account',
            name: 'AccountSettings',
            component: () => import('@/views/settings/AccountSettings.vue'),
            meta: { title: 'settings.account.title' },
          },
          {
            path: 'backup',
            name: 'Backup',
            component: () => import('@/views/settings/BackupPage.vue'),
            meta: { title: 'settings.backup.title' },
          },
          {
            path: 'customization',
            name: 'Customization',
            component: () => import('@/views/settings/CustomizationPage.vue'),
            meta: { title: 'settings.customization.title' },
          },
          {
            path: 'media',
            name: 'Media',
            component: () => import('@/views/settings/MediaPage.vue'),
            meta: { title: 'settings.media.title' },
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/pages/LoginPage'),
  },
  {
    path: '/:notFound(.*)',
    name: 'NotFound',
    component: () => import('@/views/pages/NotFound'),
  },
]

const router = createRouter({
  // eslint-disable-next-line no-undef
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start()
  }
  next()
})

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router
