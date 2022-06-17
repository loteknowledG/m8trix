import { atom } from 'recoil'

export const clickCounterState = atom({
  key: 'clickCounterState', // unique ID (with respect to other atoms/selectors)
  default: 0 // default value (aka initial value)
})
export default clickCounterState