import React from 'react'
import { lessonsTypesCSS } from '../../store'
import ActionAreaCard from '../../Shared/UI/Card/Card'
import './csspage.css'

const CssPage = () => {
  return (
    <div className='css__wrapper'>
		{lessonsTypesCSS.map((lessonsType) =>
    	<div className='card' key={lessonsType.image}><ActionAreaCard content={lessonsType} /></div>)
		}
	</div>
  )
}

export default CssPage