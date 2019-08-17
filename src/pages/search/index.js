import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'
import 'moment/locale/pt-br'

import Header from '../../components/Header'
import Content from '../../components/Content'

const today = new Date()
const daysOfWeek = [
    moment(today).add(1, 'days').format('YYYY-MM-DD 00:00:00'),
    moment(today).add(2, 'days').format('YYYY-MM-DD 00:00:00'),
    moment(today).add(3, 'days').format('YYYY-MM-DD 00:00:00'),
    moment(today).add(4, 'days').format('YYYY-MM-DD 00:00:00'),
    moment(today).add(5, 'days').format('YYYY-MM-DD 00:00:00')
]

export default class Search extends Component {
    state = {
        data: null, 
        daysOfWeek: [],
        cardInfo: null,
        todayInfo: null,
        activatedInfoBy: 'today'
    }
    getWeather = async (city = "São Paulo") => {
        let { data } = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
            params: {
                q: city,
                appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
                lang: 'pt',
                units: 'metric'
            }
        });

        this.setState({ todayInfo: data, cardInfo: data })
    }
    getWeatherForWeek = async (city = "São Paulo") => {
        let { data } = await axios.get("http://api.openweathermap.org/data/2.5/forecast", {
            params: {
                q: city,
                appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
                lang: 'pt',
                units: 'metric'
            }
        });

        this.setState({ data })
        this.getDaysOfWeekInfo(data.list)
    }
    getDaysOfWeekInfo(list) {
        let daysOfWeekInfo = []

        list.map((date) => {
            if(daysOfWeek.indexOf(date.dt_txt) > -1) {
                let newDate = new Date(date.dt_txt)
                date['day_name'] = moment(newDate).lang("pt").format('dddd')
                daysOfWeekInfo.push(date)
            }
        })

        this.setState({ daysOfWeek: daysOfWeekInfo })
    }
    getDayInfo(type = 'today') {
        return (e) => {
            if(type === 'today') {
                this.setState({ cardInfo: this.state.todayInfo, activatedInfoBy: 'today' })
            } else {
                this.setState({ cardInfo: this.state.daysOfWeek[0], activatedInfoBy: 'tomorrow' })
            }
        }
    }
    render() {
        return (
            <div className="p-seach">
                <Header city={this.state.data && this.state.data.city}/>
                <Content todayInfo={this.state.cardInfo}
                    nextDaysInfo={this.state.daysOfWeek} 
                    todayInfos={this.getDayInfo()}
                    tomorrowInfos={this.getDayInfo('tomorrow')}
                    activatedInfoBy={this.state.activatedInfoBy} />
            </div>        
        )
    }
    componentWillMount() {
        this.getWeather()
        this.getWeatherForWeek()
    }
}