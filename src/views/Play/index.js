import TopAppBar from '../../components/TopAppBar'
import Headroom from 'react-headroom'

export default function Play () {
  return (
    <div className="App">
      <Headroom>
        <TopAppBar /> 
      </Headroom>
    </div>
  )
}