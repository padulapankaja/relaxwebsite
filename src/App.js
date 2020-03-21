import './App.css';



//import router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import React, { Component } from 'react';
// import Header from './Components/Header/header'
// import Footer from './Components/Footer/footer'
// import Banner from './Components/Banner/banner'
// import InternationalNews from './Components/News/internationalnews'
// import Popularnews from './Components/News/popularnewsfeeds'
// import Technologynews from './Components/News/technologynews'
// import Exvideo from './Components/Video/exvideo'
// import Editorpick from './Components/News/editorpick'
import Homepage from './Components/homepage'


// import inner pages
import Allvideos from './Components/InnerPages/allvideos'

//import fooyter
import Footer from './Components/Footer/footer'

class App extends Component {
  constructor() {
    super();
    this.state = {

    };



  }



  render() {
    return (
      <div className="App">

        <Router>
          <Route path="/" exact strict component={Homepage}></Route>
          <Route path="/videos" exact strict component={Allvideos}></Route>
        </Router>
        <Footer/>
      </div>
    );
  }
}



export default App;
