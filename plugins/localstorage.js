import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
    storage: sessionStorage,
    reducer(val) {
      return {
        locale: val.locale,
      }
    }
  })(store)
}