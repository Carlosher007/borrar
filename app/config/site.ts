export type SiteConfig = typeof siteConfig;

const logged = false;

export const siteConfig = {
  name: 'ImageHub',
  description: 'The best web application to sell and buy images',
  navMenuItems: [
    {
      label: 'Home',
      href: '/dashboard',
    },
    {
      label: 'Images',
      href: '/dashboard/images',
    },
    logged && {
      label: 'Logout',
      href: '/logout',
    },
  ],
  links: {
    github: 'https://github.com/orgs/ImageHub-UV/repositories',
  },
};
