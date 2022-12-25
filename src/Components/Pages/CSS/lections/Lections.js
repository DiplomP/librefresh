import React from 'react'
import DropdownPDF from '../../../Shared/UI/DropdownPdf/DropdownPDF';
import { lectionsCSS } from '../../../store';
import './lections.css'

const LectionsCSS = () => {
  return (
	<div className='lection'>
		<DropdownPDF title="Выберите урок" items={lectionsCSS}/>
	</div>
  )
}

export default LectionsCSS