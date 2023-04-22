import React from 'react'
import './index.css'
import Button from '../Button'
import Icon from '../Icon'

const Feature = (props) => {
    const { text, icon, button } = props
    return (
        <div className='feature'>
            <div className='feature-left'>
                <div className='title'>
                    <p style={{ paddingRight: '10px' }}>{text}</p>
                    <i style={{ fontSize: '14px' }} class="fa-solid fa-chevron-down"></i>
                </div>
                <p className='label'>Timezone (GMT +00:00) UTC</p>
            </div>


            <div className='feature-right'>
                <div className='icons'>
                    {icon.map((item) => {
                        return <Icon iconClass={item.iconClass} marginLeftValue={item.marginLeftValue} />
                    })}
                </div>

                <div className='buttons'>
                    {button.map((item) => {
                        return <Button text={item.name} type={item.type} />;
                    })}
                </div>
            </div>
        </div>
    )
}

export default Feature