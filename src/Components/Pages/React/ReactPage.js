import React from 'react'
import { lessonsTypesReact } from '../../store'
import ActionAreaCard from '../../Shared/UI/Card/Card'
import './reactpage.css'


const ReactPage = () => {
  return (
    <div className='react__wrapper'>
		{lessonsTypesReact.map((lessonsType) =>
    	<div className='card' key={lessonsType.image}><ActionAreaCard content={lessonsType} /></div>)
		}
	</div>
  )
}

export default ReactPage