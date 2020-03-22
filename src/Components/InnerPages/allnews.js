import React, { Component } from 'react';
//import header
import Header from '../Header/header'




// import images 
import t1 from '../../Images/tech-news/t1.jpg'
import t2 from '../../Images/tech-news/t2.jpg'
import t3 from '../../Images/tech-news/t3.jpg'
import t4 from '../../Images/tech-news/t4.jpg'



import p1 from '../../Images/popular-news/p1.jpg'
import p2 from '../../Images/popular-news/p2.jpg'
import p3 from '../../Images/popular-news/p3.jpg'
import p4 from '../../Images/popular-news/p4.jpg'

import i3 from '../../Images/int-news/i3.jpg'

import c1 from '../../Images/c1.jpg'
import c2 from '../../Images/c2.jpg'


import play from '../../Images/play-icon.png'

//api call class

import Apicall from '../../ApiCalls'


//import axios
import axios from "axios";

//import moment
import moment from "moment";

//import location data
import { geolocated } from "react-geolocated";



//news type object

let LatesNews = props => (

    <div className="col-lg-4 col-md-5 col-sm-6">
        <div className="single-post single-int mb-40">
            <div className="thumb">
                <div className="relative">
                    <img style={{ float: 'left !important' }} className="f-img img-fluid mx-auto" src={`${props.lates.image === undefined ? "" : props.lates.image.thumbnail.contentUrl}`} style={{ display: props.lates.image != undefined ? 'block, floa' : 'none' }} alt="relax" />
                </div>
            </div>
            <div className="">
                <div className="bottom mt-10">
                    <div>
                        <a href={`${props.lates.url}`} target="_blank" className="primary-btn">View</a>
                        <a ><span>{moment(props.lates.datePublished).format("MMM Do YYYY")}</span></a>
                    </div>
                </div>
                <a href={`${props.lates.url}`} target="_blank" >
                    <h4 style={{ fontSize: '13px', lineHeight: '18px' }}>{props.lates.name}</h4>
                </a>
                <p>Description: {props.lates.description}</p>
                <br />
                <p style={{ fontSize: '10px !important', color:'white !important', display: 'inline-block' }}>Provider :  </p>
                {props.lates.provider.map((data, i) => { return (<p className="ml-1" key={i} style={{ fontWeight: '400 !important', display: 'inline-block', fontSize: '10px !important' }}>{data.name} </p>) })}
            </div>
        </div>
    </div>
)



class Allnews extends Component {
    constructor(props) {

        super(props);
        this.Relaxnewsset = this.Relaxnewsset.bind(this)
        this.onlygetfirstnews = this.onlygetfirstnews.bind(this)

        this.state = {
            Relaxnews: [],
            longitude:'',
            latitude:''
            

        };



    }
    async UNSAFE_componentWillMount() {

        const Keywordserach = {
            key: 'relax',
            mkt: 'en'
        };
        await axios.post(`${Apicall.server}${Apicall.port}${Apicall.api.news}`, Keywordserach).then(res => {
            this.setState({
                Relaxnews: res.data.value
            })
            console.log(this.state.Relaxnews);

        }).catch(function (error) {
            console.log(error);
        })
        await this.onlygetfirstnews()
       
       
        
    }

    onlygetfirstnews() {

        this.setState({
            Relaxnews: this.state.Relaxnews.slice(0, 30)
        })
    }

    Relaxnewsset() {
        return this.state.Relaxnews.map(function (data, i) {
            return <LatesNews lates={data} key={i} />;
        });
    }


    render() {
        return (
            <div className="text-left">
                <Header />
               
                {/* <!-- Start top-post Area --> */}
                <section className="top-post-area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 p-0">
                                <div className="hero-nav-area">
                                    <h1 className="text-white">News Archive</h1>
                                    <p className="text-white link-nav">
                                        <a href="index.html">Home </a>
                                        <span className="lnr lnr-arrow-right"></span>
                                        <a href="archive.html">archive</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End top-post Area --> */}
                {/* <!-- Start Main Area --> */}
                <div className="category-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 col-md-12">
                                {/* <!-- Start Technology News Area --> */}
                                <section className="">
                                    <div className="row">
                                        {this.Relaxnewsset()}
                                        {/*  <div className="col-lg-4 col-md-5 col-sm-6">
                                            <div className="single-post single-int mb-40">
                                                <div className="thumb">
                                                    <div className="relative">
                                                        <img className="f-img img-fluid mx-auto" src={i3} alt="relax" />
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <div className="bottom mt-10">
                                                        <div>
                                                            <a  className="primary-btn">gadgets</a>
                                                            <a ><span>September 14, 2018</span></a>
                                                        </div>
                                                    </div>
                                                    <a >
                                                        <h4>Facts Why Inkjet Printing Is
												Appealing Compared</h4>
                                                    </a>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </section>
                                {/* <!-- End Technology News Area --> */}
                            </div>

                            <div className="col-lg-3 col-md-12 col-sm-12">
                                <div className="row">
                                    <div className="col-lg-12 col-md-5 col-sm-6">
                                        <div className="single-post mb-20">
                                            <div className="thumb">
                                                <div className="relative">
                                                    <img className="f-img img-fluid w-100" src={c1} alt="relax" />
                                                    <div className="overlay overlay-bg"></div>
                                                </div>
                                            </div>
                                            <div className="details">
                                                <div className="top-part d-flex justify-content-between">
                                                    <div>
                                                        <h4>United States</h4>
                                                        <p>Saturday, September 08, 2018</p>
                                                    </div>
                                                    <div>
                                                        <span className="lnr lnr-arrow-down text-white"></span>
                                                    </div>
                                                </div>
                                                <div className="middle-part">
                                                    <h1>28ºC</h1>
                                                    <p>Partly Cloudy</p>
                                                </div>

                                                <div className="bottom-part">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-5 col-sm-6">
                                        <div className="single-post">
                                            <div className="thumb">
                                                <div className="relative">
                                                    <img className="f-img img-fluid w-100" src={c2} alt="relax" />
                                                    <div className="overlay overlay-bg"></div>
                                                </div>
                                            </div>
                                            <div className="details">
                                                <div className="bottom d-flex justify-content-between">
                                                    <div>
                                                        <h4 className="mt-0">Recent Playlist</h4>
                                                        <p>Selected by techmania</p>
                                                    </div>
                                                    <div>
                                                        <span className="lnr lnr-arrow-down text-white"></span>
                                                    </div>
                                                </div>
                                                <ul className="list">
                                                    <li>
                                                        <a >
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
											</a>
                                                    </li>
                                                    <li>
                                                        <a >
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
											</a>
                                                    </li>
                                                    <li>
                                                        <a >
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
											</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Main Area --> */}
                <div className="row">

                </div>
            </div>
        );
    }
}


export default Allnews;