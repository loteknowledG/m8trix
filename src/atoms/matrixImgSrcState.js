import { atom } from 'recoil'

export const matrixImgSrcState = atom({
  key: 'matrixImgSrcState', // unique ID (with respect to other atoms/selectors)
  default: false // default value (aka initial value)
})
export default matrixImgSrcState

