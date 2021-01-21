const NAV_ITEMS = [
  {
    pathname: '/',
    hash: '#experiences',
    label: 'Experiences',
  },
  {
    pathname: '/',
    hash: '#projects',
    label: 'Projects',
  },
  {
    pathname: '/',
    hash: '#contact',
    label: 'Contact',
  },
]

const LANDING_PAGE_SECTIONS = [
  {
    pathname: '/',
    hash: '#about',
  },
  ...NAV_ITEMS,
]

export { NAV_ITEMS, LANDING_PAGE_SECTIONS }
