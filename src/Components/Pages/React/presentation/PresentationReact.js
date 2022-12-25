import React from 'react'
import DocIframe from '../../../Shared/PptxDoc'
import './presentation.css'

const PresentationReact = () => {
  return (
    <div className='presentation'>
      <DocIframe source={'https://ppt-online.org/embed/360550'} />
    </div>
  )
}

export default PresentationReact