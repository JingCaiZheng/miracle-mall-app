const home = [
  {
    path: '/',
    component: () => import('./home')
  },
  {
    path: '/home',
    component: () => import('./home')
  },
  {
    path: '/test',
    component: () => import('./test')
  }
]

export default home