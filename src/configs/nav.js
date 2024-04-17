export default [
  {
    component: 'CNavItem',
    name: "dashboard.title",
    to: '/dashboard',
    icon: 'fa-solid fa-gauge',
    badge: {
      color: 'primary',
      text: 'NEW',
    },
  },

  {
    component: 'CNavTitle',
    name: "sideNav.resume",
  },

  {
    component: 'CNavItem',
    name: "resume.resume.title",
    to: '/resume/my-resume',
    icon: 'fa-solid fa-file',
  },
  {
    component: 'CNavItem',
    name: "resume.profile.title",
    to: '/resume/profile',
    icon: 'fa-solid fa-user-tie',
  },
  {
    component: 'CNavItem',
    name: "resume.portfolio.title",
    to: '/resume/portfolio',
    icon: 'fa-solid fa-box',
  },
  {
    component: 'CNavItem',
    name: "resume.experience.title",
    to: '/resume/experience',
    icon: 'fa-solid fa-briefcase',
  },
  {
    component: 'CNavItem',
    name: "resume.skills.title",
    to: '/resume/skills',
    icon: 'fa-solid fa-star',
  },
  {
    component: 'CNavItem',
    name: "resume.education.title",
    to: '/resume/education',
    icon: 'fa-solid fa-user-graduate',
  },
  {
    component: 'CNavItem',
    name: "resume.certifications.title",
    to: '/resume/certifications',
    icon: 'fa-solid fa-certificate',
  },
  {
    component: 'CNavItem',
    name: "resume.awards.title",
    to: '/resume/awards',
    icon: 'fa-solid fa-award',
  },

  {
    component: 'CNavTitle',
    name: "sideNav.extras",
  },
  {
    component: 'CNavGroup',
    name: "blogs.title",
    to: '/blogs',
    icon: 'fa-solid fa-blog',
    items: [
      {
        component: 'CNavItem',
        name: "blogs.list.title",
        to: '/blogs/list',
      },
      {
        component: 'CNavItem',
        name: "blogs.write.title",
        to: '/blogs/write',
      },
    ],
  },

  {
    component: 'CNavTitle',
    name: "sideNav.settings",
  },
  {
    component: 'CNavItem',
    name: "settings.account.title",
    to: '/settings/account',
    icon: 'fa-solid fa-user',
  },
  {
    component: 'CNavItem',
    name: "settings.customization.title",
    to: '/settings/customization',
    icon: 'fa-solid fa-paintbrush',
  },
  {
    component: 'CNavItem',
    name: "settings.media.title",
    to: '/settings/media',
    icon: 'fa-solid fa-image',
  },
  {
    component: 'CNavItem',
    name: "settings.backup.title",
    to: '/settings/backup',
    icon: 'fa-solid fa-floppy-disk',
  },
]
