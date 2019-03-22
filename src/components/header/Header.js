import React, { Component } from 'react'
import './Header.css'
export default class Header extends Component {
    state = {
        items: ["Home", "about", "contact-us"]
    }
    render() {
        return (
            <div className="Header">
                <ul>
                    {this.state.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </div>
        )
    }
}
