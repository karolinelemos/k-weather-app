import React from 'react'

import './styles.scss'
import cloudImg from '../../assets/images/cloud.svg'

const TodayCard = () => (
    <div className="c-today-card">
        <div className="c-today-card__content">
            <span className="c-today-card__content__temp">
                25°
            </span>
            <span className="c-today-card__content__description">
                Núvens & Sol
            </span>
            <span className="c-today-card__content__humidity-text">
                Umidade
            </span>
            <span className="c-today-card__content__humidity-value">
                35°
            </span>
        </div>
        <img className="c-today-card__cloud" 
            src={cloudImg} />
    </div>
)

export default TodayCard