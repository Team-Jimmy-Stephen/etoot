import React, { Component } from "react"
import Header from './landingHeader.js';
import Content from './landingContent.js'
import Footer from './landingFooter.js'

class landingpage extends Component {
    render() {
        return (
            <div class="main-container">
                <Header />
                <Content />
                <Footer />
            </div>
        )
    }
}

export default landingpage;