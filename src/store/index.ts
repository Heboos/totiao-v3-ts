import user from './modules/user'

export default function useStore() {
  return {
    userList: user()
  }
}