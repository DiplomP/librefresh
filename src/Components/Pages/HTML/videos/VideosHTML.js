import React from 'react'
import Dropdown from '../../../Shared/UI/Dropdown/Dropdown'
import { videosHTML } from '../../../store'
import './videos-html.css'

const VideosHTML = () => {
  return (
	<div className='container'>
		<Dropdown title="Выберите урок" items={videosHTML} />
	</div>
  )
}

export default VideosHTML