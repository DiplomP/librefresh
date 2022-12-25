import React from 'react'
import Dropdown from '../../../Shared/UI/Dropdown/Dropdown'
import { videosJS } from '../../../store'

const VideosJS = () => {
  return (
	<div className='container'>
		<Dropdown title="Выберите урок" items={videosJS} />
	</div>
  )
}

export default VideosJS