import React from 'react'
import moment from 'moment'

import IconCard from '../IconCard'
import CloudIcon from '../../assets/images/card-cloud.svg'

import './styles.scss'

const colorsClass = ['-green', '-pink', '-lightBlue', '-orange', '-blue']

const DaysCard = ({ nextDaysInfo }) => (
    <div className="c-days-card">
        {nextDaysInfo.map((day, index) => (
            <div className="c-days-card__box" key={index}>
                <div className={'c-days-card__item ' + colorsClass[index]}>
                    <span className="c-days-card__item__day">
                        {day.day_name}
                    </span>
                    
                    <IconCard type={day.weather[0].main} />

                    <span className="c-days-card__item__description">
                        {day.weather[0].description}
                    </span>

                    <span className="c-days-card__item__temp">
                        {parseInt(day.main.temp)}°
                    </span>
                    <div> 
                        <span className="c-days-card__item__humidity">
                            {parseInt(day.main.humidity)}° - 
                        </span>
                        <span className="c-days-card__item__max-temp">
                            {parseInt(day.main.temp_max)}°
                        </span>
                    </div>
                </div>
                <img className="c-days-card__item__img" src={CloudIcon} />
            </div>
        ))}
    </div>
)

export default DaysCard