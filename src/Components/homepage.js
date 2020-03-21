import React, { Component } from 'react';

import Header from './Header/header'
import Banner from './Banner/banner'
import InternationalNews from './News/internationalnews'
import Popularnews from './News/popularnewsfeeds'
import Technologynews from './News/technologynews'
import Exvideo from './Video/exvideo'
import Editorpick from './News/editorpick'



class Homepage extends Component {
    constructor() {
        super();
        this.state = {

        };



    }



    render() {
        return (
            <div>
                <Banner />
                <Header />
                <Editorpick />
                <InternationalNews />
                <Technologynews />
                <Exvideo />
                <Popularnews />
                {/* <Footer /> */}
            </div>
        );
    }
}


export default Homepage;