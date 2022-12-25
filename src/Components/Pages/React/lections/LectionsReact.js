import React from 'react'
import DropdownPDF from '../../../Shared/UI/DropdownPdf/DropdownPDF';
import { lectionsReact } from '../../../store';
import './lections.css'

const LectionsReact = () => {
  return (
	<div className='lection'>
		<DropdownPDF title="Выберите урок" items={lectionsReact}/>
	</div>
  )
}

export default LectionsReact