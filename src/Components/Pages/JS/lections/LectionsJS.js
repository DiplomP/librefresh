import React from 'react'
import DropdownPDF from '../../../Shared/UI/DropdownPdf/DropdownPDF';
import { lectionsJS } from '../../../store';
import './lections.css'

const LectionsJS = () => {
  return (
	<div className='lection'>
		<DropdownPDF title="Выберите урок" items={lectionsJS}/>
	</div>
  )
}

export default LectionsJS