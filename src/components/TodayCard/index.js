import React from 'react'

import './today-card.scss'
import cloudImg from '../../assets/images/cloud.svg'

const TodayCard = ({ todayInfo }) => (
    todayInfo ? (
        <div className="c-today-card">
            <div className="c-today-card__content">
                <span className="c-today-card__content__temp">
                    {parseInt(todayInfo.main.temp)}°
                </span>
                <span className="c-today-card__content__description">
                    {todayInfo.weather[0].description}
                </span>
                <span className="c-today-card__content__humidity-text">
                    Umidade
                </span>
                <span className="c-today-card__content__humidity-value">
                    {parseInt(todayInfo.main.humidity)}°
                </span>
            </div>
            <img className="c-today-card__cloud" 
                src={cloudImg} />
        </div>
    ) : ''
)

export default TodayCard