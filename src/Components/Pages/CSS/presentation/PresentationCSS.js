import React from 'react'
import DocIframe from '../../../Shared/PptxDoc'
import './presentation.css'

const PresentationCSS = () => {
  return (
    <div className='presentation'>
      <DocIframe source={'https://pptcloud.ru/system/html5ppt/195335/index.html'} />
    </div>
  )
}

export default PresentationCSS