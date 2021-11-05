import { atom } from 'recoil'

export const drawerOpenState = atom({
  key: 'drawerOpenState', // unique ID (with respect to other atoms/selectors)
  default: false // default value (aka initial value)
})
export default drawerOpenState

