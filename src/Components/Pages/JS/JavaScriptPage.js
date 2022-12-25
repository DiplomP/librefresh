import React from 'react'
import { lessonsTypesJS } from '../../store'
import ActionAreaCard from '../../Shared/UI/Card/Card'
import './javascriptpage.css'

const JavaScriptPage = () => {
  return (
    <div className='js__wrapper'>
		{lessonsTypesJS.map((lessonsType) =>
    	<div className='card' key={lessonsType.image}><ActionAreaCard content={lessonsType} /></div>)
		}
	</div>
  )
}

export default JavaScriptPage