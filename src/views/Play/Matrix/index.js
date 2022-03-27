import React from 'react'
import TopAppBar from '../../../components/TopAppBar'
import { useParams } from 'react-router-dom'

export function Matrix() {
  const id = useParams().id
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
      src={ 'https://lh3.googleusercontent.com/' + id } 
      alt={ 'https://lh3.googleusercontent.com/' + id } 
    />
  </>)
}
export default Matrix