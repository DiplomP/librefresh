import React from 'react'
import DocIframe from '../../../Shared/PptxDoc'
import './presentation.css'

const PresentationJS = () => {
  return (
    <div className='presentation'>
      <DocIframe source={'http://player.myshared.ru/4/193471/'} />
    </div>
  )
}

export default PresentationJS