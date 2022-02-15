// import BottomAppBar from '../../components/bottomAppBar'
import TopAppBar from '../../components/TopAppBar'
import Headroom from 'react-headroom'
// import Backstory from '../../components/backStory'


export default function Dashboard () {
  return (
    <div className="App" >
      <Headroom >
        <TopAppBar  /> 
      </Headroom>
      {/* <Backstory/> */}
    </div>
  )
}