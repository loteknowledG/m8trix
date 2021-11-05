import TopAppBar from './topAppBar'
import Headroom from 'react-headroom'
import MomentsGrid from './momentsGrid'

export default function Play () {
  return (
    <div className="App">
      <Headroom>
        <TopAppBar /> 
      </Headroom>
      <MomentsGrid />
      in play
    </div>
  )
}