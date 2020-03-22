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




class Allvideos extends Component {
    constructor() {
        super();
        this.state = {

        };



    }



    render() {
        return (
            <div className="text-left">
                <Header/>

                {/* <!-- Start top-post Area --> */}
                <section class="top-post-area">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12 p-0">
                                <div class="hero-nav-area">
                                    <h1 class="text-white">News Archive</h1>
                                    <p class="text-white link-nav">
                                        <a href="index.html">Home </a>
                                        <span class="lnr lnr-arrow-right"></span>
                                        <a href="archive.html">archive</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End top-post Area --> */}
                {/* <!-- Start Main Area --> */}
                <div class="category-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-9 col-md-12">
                                {/* <!-- Start Technology News Area --> */}
                                <section class="">
                                    <div class="row">
                                        <div class="col-lg-4 col-md-5 col-sm-6">
                                            <div class="single-post single-int mb-40">
                                                <div class="thumb">
                                                    <div class="relative">
                                                        <img class="f-img img-fluid mx-auto" src={t1} alt="relax" />
                                                    </div>
                                                </div>
                                                <div class="">
                                                    <div class="bottom mt-10">
                                                        <div>
                                                            <a class="primary-btn">gadgets</a>
                                                            <a><span>September 14, 2018</span></a>
                                                        </div>
                                                    </div>
                                                    <a>
                                                        <h4>Facts Why Inkjet Printing Is
												Appealing Compared</h4>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-5 col-sm-6">
                                            <div class="single-post single-int mb-40">
                                                <div class="thumb">
                                                    <div class="relative">
                                                        <img class="f-img img-fluid mx-auto" src={t2} alt="relax" />
                                                        <a class="play-btn" href="https://www.youtube.com/watch?v=ARA0AxrnHdM">
                                                            <img src="img/play-icon.png" class="vdo-btn" alt="relax" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="">
                                                    <div class="bottom mt-10">
                                                        <div>
                                                            <a class="primary-btn">gadgets</a>
                                                            <a><span>September 14, 2018</span></a>
                                                        </div>
                                                    </div>
                                                    <a>
                                                        <h4>Facts Why Inkjet Printing Is
												Appealing Compared</h4>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-5 col-sm-6">
                                            <div class="single-post single-int mb-40">
                                                <div class="thumb">
                                                    <div class="relative">
                                                        <img class="f-img img-fluid mx-auto" src={t3} alt="relax" />
                                                    </div>
                                                </div>
                                                <div class="">
                                                    <div class="bottom mt-10">
                                                        <div>
                                                            <a class="primary-btn">gadgets</a>
                                                            <a><span>September 14, 2018</span></a>
                                                        </div>
                                                    </div>
                                                    <a>
                                                        <h4>Facts Why Inkjet Printing Is
												Appealing Compared</h4>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-5 col-sm-6">
                                            <div class="single-post single-int mb-40">
                                                <div class="thumb">
                                                    <div class="relative">
                                                        <img class="f-img img-fluid mx-auto" src={t4} alt="relax" />
                                                        <a class="play-btn" href="https://www.youtube.com/watch?v=ARA0AxrnHdM">
                                                            <img src={play} class="vdo-btn" alt="relax" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="">
                                                    <div class="bottom mt-10">
                                                        <div>
                                                            <a class="primary-btn">gadgets</a>
                                                            <a><span>September 14, 2018</span></a>
                                                        </div>
                                                    </div>
                                                    <a>
                                                        <h4>Facts Why Inkjet Printing Is
												Appealing Compared</h4>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-5 col-sm-6">
                                            <div class="single-post single-int mb-40">
                                                <div class="thumb">
                                                    <div class="relative">
                                                        <img class="f-img img-fluid mx-auto" src={p1} alt="relax" />
                                                    </div>
                                                </div>
                                                <div class="">
                                                    <div class="bottom mt-10">
                                                        <div>
                                                            <a class="primary-btn">gadgets</a>
                                                            <a><span>September 14, 2018</span></a>
                                                        </div>
                                                    </div>
                                                    <a>
                                                        <h4>Facts Why Inkjet Printing Is
												Appealing Compared</h4>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-5 col-sm-6">
                                            <div class="single-post single-int mb-40">
                                                <div class="thumb">
                                                    <div class="relative">
                                                        <img class="f-img img-fluid mx-auto" src={p3} alt="relax" />
                                                    </div>
                                                </div>
                                                <div class="">
                                                    <div class="bottom mt-10">
                                                        <div>
                                                            <a class="primary-btn">gadgets</a>
                                                            <a><span>September 14, 2018</span></a>
                                                        </div>
                                                    </div>
                                                    <a>
                                                        <h4>Facts Why Inkjet Printing Is
												Appealing Compared</h4>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-5 col-sm-6">
                                            <div class="single-post single-int mb-40">
                                                <div class="thumb">
                                                    <div class="relative">
                                                        <img class="f-img img-fluid mx-auto" src={p2} alt="relax" />
                                                    </div>
                                                </div>
                                                <div class="">
                                                    <div class="bottom mt-10">
                                                        <div>
                                                            <a class="primary-btn">gadgets</a>
                                                            <a><span>September 14, 2018</span></a>
                                                        </div>
                                                    </div>
                                                    <a>
                                                        <h4>Facts Why Inkjet Printing Is
												Appealing Compared</h4>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-5 col-sm-6">
                                            <div class="single-post single-int mb-40">
                                                <div class="thumb">
                                                    <div class="relative">
                                                        <img class="f-img img-fluid mx-auto" src={p4} alt="relax" />
                                                    </div>
                                                </div>
                                                <div class="">
                                                    <div class="bottom mt-10">
                                                        <div>
                                                            <a class="primary-btn">gadgets</a>
                                                            <a><span>September 14, 2018</span></a>
                                                        </div>
                                                    </div>
                                                    <a>
                                                        <h4>Facts Why Inkjet Printing Is
												Appealing Compared</h4>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-5 col-sm-6">
                                            <div class="single-post single-int mb-40">
                                                <div class="thumb">
                                                    <div class="relative">
                                                        <img class="f-img img-fluid mx-auto" src={i3} alt="relax" />
                                                    </div>
                                                </div>
                                                <div class="">
                                                    <div class="bottom mt-10">
                                                        <div>
                                                            <a class="primary-btn">gadgets</a>
                                                            <a><span>September 14, 2018</span></a>
                                                        </div>
                                                    </div>
                                                    <a>
                                                        <h4>Facts Why Inkjet Printing Is
												Appealing Compared</h4>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* <!-- End Technology News Area --> */}
                            </div>

                            <div class="col-lg-3 col-md-12 col-sm-12">
                                <div class="row">
                                    <div class="col-lg-12 col-md-5 col-sm-6">
                                        <div class="single-post mb-20">
                                            <div class="thumb">
                                                <div class="relative">
                                                    <img class="f-img img-fluid w-100" src={c1} alt="relax" />
                                                    <div class="overlay overlay-bg"></div>
                                                </div>
                                            </div>
                                            <div class="details">
                                                <div class="top-part d-flex justify-content-between">
                                                    <div>
                                                        <h4>United States</h4>
                                                        <p>Saturday, September 08, 2018</p>
                                                    </div>
                                                    <div>
                                                        <span class="lnr lnr-arrow-down text-white"></span>
                                                    </div>
                                                </div>
                                                <div class="middle-part">
                                                    <h1>28ºC</h1>
                                                    <p>Partly Cloudy</p>
                                                </div>

                                                <div class="bottom-part">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-5 col-sm-6">
                                        <div class="single-post">
                                            <div class="thumb">
                                                <div class="relative">
                                                    <img class="f-img img-fluid w-100" src={c2} alt="relax" />
                                                    <div class="overlay overlay-bg"></div>
                                                </div>
                                            </div>
                                            <div class="details">
                                                <div class="bottom d-flex justify-content-between">
                                                    <div>
                                                        <h4 class="mt-0">Recent Playlist</h4>
                                                        <p>Selected by techmania</p>
                                                    </div>
                                                    <div>
                                                        <span class="lnr lnr-arrow-down text-white"></span>
                                                    </div>
                                                </div>
                                                <ul class="list">
                                                    <li>
                                                        <a>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
											</a>
                                                    </li>
                                                    <li>
                                                        <a>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
											</a>
                                                    </li>
                                                    <li>
                                                        <a>
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
            </div>
        );
    }
}


export default Allvideos;