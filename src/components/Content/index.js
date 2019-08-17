import React from 'react'

import TodayCard from '../../components/TodayCard'
import DaysCard from '../../components/DaysCard'
import './styles.scss'

const Content = ({ todayInfo, nextDaysInfo, todayInfos, tomorrowInfos, activatedInfoBy }) => (
    <div className="c-content">
        <div className="c-content__list">
            <ul>
                <li className={activatedInfoBy === 'today' ? '-active' : ''} onClick={todayInfos}>Hoje</li>
                <li className={activatedInfoBy !== 'today' ? '-active' : ''} onClick={tomorrowInfos}>Amanhã</li>
            </ul>
        </div>

        <div className="c-content__today-card">
            <TodayCard todayInfo={todayInfo} />
        </div>
        
        <div className="c-content__days-card">
            <p className="c-content__days-card-title">Próximos Dias</p>
            <DaysCard nextDaysInfo={nextDaysInfo} />
        </div>
    </div>
)

export default Content