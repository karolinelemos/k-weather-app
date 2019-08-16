import React from 'react'
import sunIcon from '../../assets/images/sun.svg'
import windIcon from '../../assets/images/wind.svg'
import rainIcon from '../../assets/images/rain.svg'
import stormIcon from '../../assets/images/storm.svg'

import './styles.scss'

const iconList = {
    'sunny-day': sunIcon,
    'rainny-day': rainIcon,
    'windy-day': windIcon,
    'stormy-day': stormIcon 
}

const IconCard = ({ type }) => (
    <div className="c-icon-card">
        <img src={iconList[type]} />
    </div>
)

export default IconCard