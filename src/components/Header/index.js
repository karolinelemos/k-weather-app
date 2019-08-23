import React from 'react'
import { Link } from 'react-router-dom'

import searchIcon from '../../assets/images/search-icon.svg'
import './header.scss'

const Header = ({ city, openModal }) => (
    city ? (
        <header className="c-header">
            <Link to="/">//KL</Link>
            <div className="c-header__searched-for">
                {city.name}, {city.country}
            </div>
            <div className="c-header__search" onClick={openModal}>
                <img src={searchIcon} />
            </div>
        </header>
    ) : ''
)

export default Header