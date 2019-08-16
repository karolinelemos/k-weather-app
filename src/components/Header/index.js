import React from 'react'

import searchIcon from '../../assets/images/search-icon.svg'
import './styles.scss'

const Header = () => (
    <header className="c-header">
        <div className="c-header__searched-for">
            São Paulo, SP
        </div>
        <div className="c-header__search">
            <img src={searchIcon} />
        </div>
    </header>
)

export default Header