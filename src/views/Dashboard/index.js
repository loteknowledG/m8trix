import TopAppBar from './topAppBar'
import BottomAppBar from '../../components/bottomAppBar'
import Headroom from 'react-headroom'

export default function Dashboard () {
  return (
    <div className="App">
      <Headroom>
        <TopAppBar /> 
      </Headroom>
      {/* <BottomAppBar /> */}
    </div>
  )
}