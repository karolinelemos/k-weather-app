import React from 'react'
import sunIcon from '../../assets/images/sun.svg'
import cloudIcon from '../../assets/images/cloud-icon.svg'
import rainIcon from '../../assets/images/rain.svg'
import stormIcon from '../../assets/images/storm.svg'

import './icon-card.scss'

const iconList = {
    'Clear': sunIcon,
    'Rain': rainIcon,
    'Clouds': cloudIcon,
    'Thunderstorm': stormIcon 
}

const IconCard = ({ type = 'Clouds' }) => (
    <div className="c-icon-card">
        <img src={iconList[type]} />
    </div>
)

export default IconCard