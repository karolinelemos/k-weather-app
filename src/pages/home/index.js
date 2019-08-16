import React from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

const Home = () => (
    <div className="c-home">
        <button className="c-home__explore-button">
            <Link to="/search" >Explorar</Link>
        </button>
    </div>
)

export default Home