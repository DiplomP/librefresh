import ActionAreaCard from '../../Shared/UI/Card/Card'
import { home } from '../../store'
import './home.css'

const HomePage = () => {
  return (
	<div className='home__wrapper'>
    {home.map((home) =>
    <div className='card' key={home.image}><ActionAreaCard content={home} /></div>)
		} 
  </div>
  )
}

export default HomePage