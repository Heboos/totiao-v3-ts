import user from './modules/user'
import home from './modules/home'

export default function useStore() {
  return {
    userList: user(),
    homeList: home(),
  }
}