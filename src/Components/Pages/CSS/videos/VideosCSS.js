import React from 'react'
import Dropdown from '../../../Shared/UI/Dropdown/Dropdown'
import { videosCSS } from '../../../store'

const VideosCSS = () => {
  return (
	<div className='container'>
		<Dropdown title="Выберите урок" items={videosCSS} />
	</div>
  )
}

export default VideosCSS