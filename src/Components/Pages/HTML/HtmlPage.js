import React from 'react'
import './htmlpage.css'
import { lessonsTypes } from '../../store'
import ActionAreaCard from '../../Shared/UI/Card/Card'

const HtmlPage = () => {
  return (
	<div className='html__wrapper'>
		{lessonsTypes.map((lessonsType) =>
    	<div className='card' key={lessonsType.image}><ActionAreaCard content={lessonsType} /></div>)
		}
	</div>
  )
}

export default HtmlPage