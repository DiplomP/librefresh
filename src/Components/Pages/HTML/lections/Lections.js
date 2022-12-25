import React from 'react'
import DropdownPDF from '../../../Shared/UI/DropdownPdf/DropdownPDF';
import { lectionsHTML } from '../../../store';
import './lections.css'

const Lections = () => {
  return (
	<div className='lection'>
		<DropdownPDF title="Выберите урок" items={lectionsHTML}/>
	</div>
  )
}

export default Lections