import { atom } from 'recoil'

export const momentsIdxState = atom({
  key: 'momentsIdxState', // unique ID (with respect to other atoms/selectors)
  default: 0 // default value (aka initial value)
})
export default momentsIdxState