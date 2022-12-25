import React from 'react'
import DocIframe from '../../../Shared/PptxDoc'
import './presentation.css'

const PresentationHTML = () => {
  return (
    <div className='presentation'>
      <DocIframe source={'https://ppt-online.org/embed/95038'} />
    </div>
  )
}

export default PresentationHTML