import React, { Component } from 'react'

import Header from '../../components/Header'
import Content from '../../components/Content'

export default class Search extends Component {
    render() {
        return (
            <div className="p-seach">
                <Header />
                <Content />
            </div>        
        )
    }
}