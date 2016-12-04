import React, { Component } from 'react'
import '../../public/logo.jpg'

class Header extends Component {
    render() {
        return (
            <div className="App-header">
                <img src='logo.jpg' className="App-logo" alt="logo" />
                <h2>Welcome to Comfort Zone Apps</h2>
            </div>
        );
    }
}

export default Header