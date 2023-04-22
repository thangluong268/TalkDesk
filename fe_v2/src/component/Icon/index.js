import React from 'react'
import './index.css'

const Icon = (props) => {
    const { iconClass, marginLeftValue } = props
  return (
    <div className='icon'>
        <i class={`${iconClass}`} style={{marginLeft: `${marginLeftValue}`}} ></i>
    </div>
  )
}

export default Icon