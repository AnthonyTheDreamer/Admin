export default [
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'fa-solid fa-gauge',
    badge: {
      color: 'primary',
      text: 'NEW',
    },
  },

  {
    component: 'CNavTitle',
    name: 'Resume',
  },

  {
    component: 'CNavItem',
    name: 'My Resume',
    to: '/resume/my-resume',
    icon: 'fa-solid fa-file',
  },
  {
    component: 'CNavItem',
    name: 'Profile',
    to: '/resume/profile',
    icon: 'fa-solid fa-user-tie',
  },
  {
    component: 'CNavItem',
    name: 'Portfolio',
    to: '/resume/portfolio',
    icon: 'fa-solid fa-box',
  },
  {
    component: 'CNavItem',
    name: 'Experience',
    to: '/resume/experience',
    icon: 'fa-solid fa-briefcase',
  },
  {
    component: 'CNavItem',
    name: 'Skills',
    to: '/resume/skills',
    icon: 'fa-solid fa-star',
  },
  {
    component: 'CNavItem',
    name: 'Education',
    to: '/resume/education',
    icon: 'fa-solid fa-user-graduate',
  },
  {
    component: 'CNavItem',
    name: 'Certifications',
    to: '/resume/certifications',
    icon: 'fa-solid fa-certificate',
  },
  {
    component: 'CNavItem',
    name: 'Awards',
    to: '/resume/awards',
    icon: 'fa-solid fa-award',
  },

  {
    component: 'CNavTitle',
    name: 'Extras',
  },
  {
    component: 'CNavGroup',
    name: 'Blogs',
    to: '/blogs',
    icon: 'fa-solid fa-blog',
    items: [
      {
        component: 'CNavItem',
        name: 'Blogs List',
        to: '/blogs/list',
      },
      {
        component: 'CNavItem',
        name: 'Write Blog',
        to: '/blogs/write',
      },
    ],
  },

  {
    component: 'CNavTitle',
    name: 'Settings',
  },
  {
    component: 'CNavItem',
    name: 'Account Settings',
    to: '/settings/account',
    icon: 'fa-solid fa-user',
  },
  {
    component: 'CNavItem',
    name: 'Customization',
    to: '/settings/customization',
    icon: 'fa-solid fa-paintbrush',
  },
  {
    component: 'CNavItem',
    name: 'Media',
    to: '/settings/media',
    icon: 'fa-solid fa-image',
  },
  {
    component: 'CNavItem',
    name: 'Backup',
    to: '/settings/backup',
    icon: 'fa-solid fa-floppy-disk',
  },
]
