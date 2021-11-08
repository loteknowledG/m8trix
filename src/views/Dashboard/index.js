import TopAppBar from './topAppBar'
import Headroom from 'react-headroom'

export default function Dashboard () {
  return (
    <div className="App">
      <Headroom>
        <TopAppBar /> 
      </Headroom>
    </div>
  )
}