import { useNavigate } from 'react-router-dom'
import './Home.css'


const Home = () => {
  let navigate = useNavigate()

  return (
    <div className='HomeContainer'>
      <h2>Not all who wander are lost.</h2>
      <button onClick={() => navigate('/signin')}>Begin traveling</button>
    </div>
  )
}

export default Home