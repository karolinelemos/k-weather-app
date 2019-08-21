import React from 'react'

import './styles.scss'

const Loader = ({ isLoadingPage }) => (
    <div className={isLoadingPage ? "c-loader -is-loading" : "c-loader"}>
        <div className="c-loader__spinner"></div>
    </div>
)

export default Loader