import React from 'react'

import TodayCard from '../../components/TodayCard'
import DaysCard from '../../components/DaysCard'
import './styles.scss'

const Content = () => (
    <div className="c-content">
        <div className="c-content__list">
            <ul>
                <li className="-active">Hoje</li>
                <li>Amanhã</li>
            </ul>
        </div>

        <div className="c-content__today-card">
            <TodayCard />
        </div>
        
        <div className="c-content__days-card">
            <p className="c-content__days-card-title">Próximos Dias</p>
            <DaysCard />
        </div>
    </div>
)

export default Content