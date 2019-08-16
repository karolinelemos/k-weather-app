import React from 'react'
import IconCard from '../IconCard'
import CloudIcon from '../../assets/images/card-cloud.svg'

import './styles.scss'

const DaysCard = () => (
    <div className="c-days-card">
        <div className="c-days-card__box">
            <div className="c-days-card__item -green">
                <span className="c-days-card__item__day">Segunda</span>
                
                <IconCard type="rainny-day" />

                <span className="c-days-card__item__temp">40°</span>
                <div> 
                    <span className="c-days-card__item__humidity">36° - </span>
                    <span className="c-days-card__item__max-temp">60°</span>
                </div>
            </div>
            <img className="c-days-card__item__img" src={CloudIcon} />
        </div>

        <div className="c-days-card__box">
            <div className="c-days-card__item -pink">
                <span className="c-days-card__item__day">Terça</span>
                
                <IconCard type="sunny-day" />

                <span className="c-days-card__item__temp">40°</span>
                <div> 
                    <span className="c-days-card__item__humidity">36° - </span>
                    <span className="c-days-card__item__max-temp">60°</span>
                </div>
            </div>
            <img className="c-days-card__item__img" src={CloudIcon} />
        </div>
        
        <div className="c-days-card__box">
            <div className="c-days-card__item -orange">
                <span className="c-days-card__item__day">Quarta</span>
                
                <IconCard type="windy-day" />

                <span className="c-days-card__item__temp">40°</span>
                <div> 
                    <span className="c-days-card__item__humidity">36° - </span>
                    <span className="c-days-card__item__max-temp">60°</span>
                </div>
            </div>
            <img className="c-days-card__item__img" src={CloudIcon} />
        </div>

        <div className="c-days-card__box">
            <div className="c-days-card__item -lightBlue">
                <span className="c-days-card__item__day">Quinta</span>
                
                <IconCard type="stormy-day" />

                <span className="c-days-card__item__temp">40°</span>
                <div> 
                    <span className="c-days-card__item__humidity">36° - </span>
                    <span className="c-days-card__item__max-temp">60°</span>
                </div>
            </div> 
            <img className="c-days-card__item__img" src={CloudIcon} />
        </div>

        <div className="c-days-card__box">
            <div className="c-days-card__item -red">
                <span className="c-days-card__item__day">Sexta</span>
                
                <IconCard type="sunny-day" />

                <span className="c-days-card__item__temp">40°</span>
                <div> 
                    <span className="c-days-card__item__humidity">36° - </span>
                    <span className="c-days-card__item__max-temp">60°</span>
                </div>
            </div>
            <img className="c-days-card__item__img" src={CloudIcon} />
        </div>

        <div className="c-days-card__box">
            <div className="c-days-card__item -blue">
                <span className="c-days-card__item__day">Sábado</span>
                
                <IconCard type="stormy-day" />

                <span className="c-days-card__item__temp">40°</span>
                <div> 
                    <span className="c-days-card__item__humidity">36° - </span>
                    <span className="c-days-card__item__max-temp">60°</span>
                </div>
            </div>
            <img className="c-days-card__item__img" src={CloudIcon} />
        </div>
    </div>
)

export default DaysCard