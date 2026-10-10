import router from '../../src/router'
import { DEMO_SHOPPER } from '../../src/config/demo'

export function login ({ commit }) {
  commit('setUserData', DEMO_SHOPPER)
  router.push('/')
}
