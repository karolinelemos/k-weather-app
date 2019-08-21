import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'
import 'moment/locale/pt-br'

import Header from '../../components/Header'
import Content from '../../components/Content'

import './styles.scss'
import closeIcon from '../../assets/images/close.svg'

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
        activatedInfoBy: 'today',
        modalIsOpened: false, 
        city: '',
        isLoading: false,
        errorMessage: ''
    }
    constructor() {
        super()

        this.onClickSearch = this.onClickSearch.bind(this)
        this.onChangeSearch = this.onChangeSearch.bind(this)
    }
    getWeather = async (city = "São Paulo") => {
        this.setState({ isLoading: true })
        
        try { 
            let { data, ...result } = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
                params: {
                    q: city,
                    appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
                    lang: 'pt',
                    units: 'metric'
                }
            })

            this.setState({ todayInfo: data, cardInfo: data, isLoading: false, modalIsOpened: false })
        } catch {
            this.setState({ errorMessage: "Cidade inválida. Tente novamente.", isLoading: false })
        }

    }
    getWeatherForWeek = async (city = "São Paulo") => {
        this.setState({ isLoading: true })

        try {
            let { data } = await axios.get("https://api.openweathermap.org/data/2.5/forecast", {
                params: {
                    q: city,
                    appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
                    lang: 'pt',
                    units: 'metric'
                }
            })

            this.setState({ data })
            this.getDaysOfWeekInfo(data.list)
        } catch {
            this.setState({ errorMessage: "Cidade inválida. Tente novamente.", isLoading: false })
        }
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
    onChangeSearch(event) {
        this.setState({city: event.target.value});
    }
    onClickSearch(e) {
        e.preventDefault()
        this.getWeather(this.state.city)
        this.getWeatherForWeek(this.state.city)
    }
    changeModalState(state = false) {
        return (e) => {
            this.setState({ modalIsOpened: state, city: '', isLoading: false, errorMessage: '' })
            this.seachInput.focus()
        }
    }
    render() {
        return (
            <div className="p-search">
                <Header city={this.state.data && this.state.data.city} 
                    openModal={this.changeModalState(true)}/>
                <Content todayInfo={this.state.cardInfo}
                    nextDaysInfo={this.state.daysOfWeek} 
                    todayInfos={this.getDayInfo()}
                    tomorrowInfos={this.getDayInfo('tomorrow')}
                    activatedInfoBy={this.state.activatedInfoBy} />
            
                <div className={this.state.modalIsOpened ? 'p-search__modal -is-opened' : 'p-search__modal'}>
                    <div className="p-search__modal__close" onClick={this.changeModalState()}>
                        <img src={closeIcon} />
                    </div>
                    <form onSubmit={this.onClickSearch} className="p-search__modal__form">
                        <div className="p-search__modal__form-item">
                            <input value={this.state.city}
                                onChange={this.onChangeSearch}
                                ref={(input) => { this.seachInput = input }} 
                                className="p-search__modal__input" 
                                placeholder="Digite o nome da cidade" autoFocus/>
                            <div className="p-search__modal__form-item__error-message ">{this.state.errorMessage}</div>
                        </div>
                        <button 
                            type="submit"
                            className="p-search__modal__button"
                            disabled={this.state.isLoading || !this.state.city}
                        >Buscar</button>
                    </form>
                </div>
            </div>        
        )
    }
    componentWillMount() {
        this.getWeather()
        this.getWeatherForWeek()
    }
}