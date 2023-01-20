import "./home.css"
import Sidebar from '../sidebar/Sidebar'
import WorkSspace from '../workspace/WorkSspace'

const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
        <WorkSspace />
    </div>
  )
}

export default Home