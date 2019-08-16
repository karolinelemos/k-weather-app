import React from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

const Home = () => (
    <div className="p-home">
        <button className="p-home__explore-button">
            <Link to="/search" >Explorar</Link>
        </button>
    </div>
)

export default Home