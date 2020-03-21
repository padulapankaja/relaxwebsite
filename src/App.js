import './App.css';
import React, { Component } from 'react';
import Header from './Components/Header/header'
import Footer from './Components/Footer/footer'
import Banner from './Components/Banner/banner'
import InternationalNews from './Components/News/internationalnews'
import Popularnews from './Components/News/popularnewsfeeds'
import Technologynews from './Components/News/technologynews'
import Exvideo from './Components/Video/exvideo'
import Editorpick from './Components/News/editorpick'
class App extends Component {
  constructor() {
    super();
    this.state = {

    };



  }



  render() {
    return (
      <div className="App">
      <Banner/> 
        <Header/>
        <Editorpick/>
      <InternationalNews/> 
      <Technologynews/> 
      <Exvideo/> 
      <Popularnews/> 
        <Footer/>
      </div>
    );
  }
}



export default App;
