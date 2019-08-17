import React from 'react'

import searchIcon from '../../assets/images/search-icon.svg'
import './styles.scss'

const Header = ({ city }) => (
    city ? (
        <header className="c-header">
            <div>//KL</div>
            <div className="c-header__searched-for">
                {city.name}, {city.country}
            </div>
            <div className="c-header__search">
                <img src={searchIcon} />
            </div>
        </header>
    ) : ''
)

export default Header