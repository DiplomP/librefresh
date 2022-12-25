import React from 'react'
import Dropdown from '../../../Shared/UI/Dropdown/Dropdown'
import { videosReact } from '../../../store'

const VideosReact = () => {
  return (
	<div className='container'>
		<Dropdown title="Выберите урок" items={videosReact} />
	</div>
  )
}

export default VideosReact