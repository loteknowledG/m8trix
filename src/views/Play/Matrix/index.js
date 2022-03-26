import React, { useState } from 'react'
import { useRecoilValue } from 'recoil';
import matrixImgSrcState from '../../../atoms/matrixImgSrcState'
import TopAppBar from '../../../components/TopAppBar'


export function Matrix() {
  const matrixImgSrc = useRecoilValue(matrixImgSrcState)
  return (<>
    <TopAppBar />
    <img 
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        overflow: 'hidden',
        userSelect: 'none',
        'MozUserSelect': 'none',
        'WebkitUserSelect': 'none',
        'MsUserSelect': 'none'
      }} 
      src={ matrixImgSrc } 
      alt={ matrixImgSrc } 
    />
  </>)
}
export default Matrix