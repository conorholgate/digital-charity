export default {
  state: {
    navItems: [
      { name: 'Home', path: '/' },
      { name: 'What we do', path: '/what-we-do' },
      { name: 'The digital divide', path: '/digital-divide' },
      { name: 'Get involved', path: '/get-involved' },
      { name: 'Our network', path: '/our-network' },
      { name: 'Insights', path: '/insights' },
    ],
  },
  getters: {
    getNavItems: state => {
      return state.navItems
    },
  },
}
