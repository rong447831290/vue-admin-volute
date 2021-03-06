const getters = {
  isZoom: state => state.app.isZoom,
  cacheKeepMap: state => state.app.cacheKeepMap,
  addRoutes: state => state.permission.addRoutes,
  currentRoutes: state => state.permission.currentRoutes,
  roles: state => state.user.roles
}
export default getters
