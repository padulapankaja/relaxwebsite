import React, { Component } from 'react';


// import images left side images
import lb1 from '../../Images/banner/lb1.jpg'
import lb2 from '../../Images/banner/lb2.jpg'
import lb3 from '../../Images/banner/lb3.jpg'

// import center image
import bc1 from '../../Images/banner/bc1.jpg'

//import right side images
import br1 from '../../Images/banner/br1.jpg'
import br2 from '../../Images/banner/br2.jpg'


class Banner extends Component {
    constructor() {
        super();
        this.state = {

        };



    }



    render() {
        return (
            <div>
                {/* <!-- Start Banner Area --> */}
                <section class="banner-area text-left">
                    <div class="container-fluid" >
                        <div class="row">
                            <div class="col-lg-3 col-md-12">
                                <div class="row">
                                    <div class="col-lg-12 col-md-4 col-sm-6">
                                        <div class="single-post mb-03">
                                            <div class="thumb">
                                                <div class="relative">
                                                    <img class="f-img img-fluid mx-auto" src={lb1} alt="" />
                                                    <div class="overlay overlay-bg"></div>
                                                </div>
                                            </div>
                                            <div class="details">
                                                <div class="bottom d-flex justify-content-between align-items-center flex-wrap">
                                                    <div>
                                                        <a href="{{url('/post-details')}}" class="primary-btn">View</a>
                                                        <a href="#"><span>September 14, 2018</span></a>
                                                    </div>
                                                    <div class="meta">
                                                        <span class="lnr lnr-bubble"></span> 04
										</div>
                                                </div>
                                                <a href="#">
                                                    <h4>	Declutter your outer world </h4>
                                                </a>
                                                <p>
                                                    Learning to relax can be life-changing’: how to find your comfort zone
									</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-4 col-sm-6">
                                        <div class="single-post mb-03">
                                            <div class="thumb">
                                                <div class="relative">
                                                    <img class="f-img img-fluid mx-auto" src={lb2} alt="" />
                                                    <div class="overlay overlay-bg"></div>
                                                </div>
                                            </div>
                                            <div class="details">
                                                <div class="bottom d-flex justify-content-between align-items-center flex-wrap">
                                                    <div>
                                                        <a href="{{url('/post-details')}}" class="primary-btn">View</a>
                                                        <a href="#"><span>September 14, 2018</span></a>
                                                    </div>
                                                    <div class="meta">
                                                        <span class="lnr lnr-bubble"></span> 04
										</div>
                                                </div>
                                                <a href="#">
                                                    <h4>Always arrive early </h4>
                                                </a>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
                                                    Consectetur adipisicing elit sed do eiusmod tempor.
									</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-4 col-sm-6">
                                        <div class="single-post">
                                            <div class="thumb">
                                                <div class="relative">
                                                    <img class="f-img img-fluid mx-auto" src={lb3} alt="" />
                                                    <div class="overlay overlay-bg"></div>
                                                </div>
                                            </div>
                                            <div class="details">
                                                <div class="bottom d-flex justify-content-between align-items-center flex-wrap">
                                                    <div>
                                                        <a href="{{url('/post-details')}}" class="primary-btn">View</a>
                                                        <a href="#"><span>September 14, 2018</span></a>
                                                    </div>
                                                    <div class="meta">
                                                        <span class="lnr lnr-bubble"></span> 04
										</div>
                                                </div>
                                                <a href="#">
                                                    <h4>Meditate </h4>
                                                </a>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
                                                    Consectetur adipisicing elit sed do eiusmod tempor.
									</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-8 owl-carousel active-banner">
                                <div class="single-post">
                                    <div class="thumb">
                                        <div class="relative">
                                            <img class="f-img img-fluid mx-auto" src={bc1} alt="" />
                                            <div class="overlay overlay-bg"></div>
                                        </div>
                                    </div>
                                    <div class="details">
                                        <div class="bottom d-flex justify-content-start align-items-center flex-wrap">
                                            <div>
                                                <a href="{{url('/post-details')}}" class="primary-btn">View</a>
                                                <a href="#"><span>September 14, 2018</span></a>
                                            </div>
                                            <div class="meta">
                                                <span class="lnr lnr-bubble"></span> 04
								</div>
                                        </div>
                                        <a href="#">
                                            <h4 class="lg-font">Find the opportunity hidden within the problem<br />
                                            </h4>
                                        </a>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore. Lorem
                                            ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
							</p>
                                        <a href="#" class="primary-btn fill mt-30">read more</a>
                                    </div>
                                </div>

                                <div class="single-post">
                                    <div class="thumb">
                                        <div class="relative">
                                            <img class="f-img img-fluid mx-auto" src={bc1} alt="" />
                                            <div class="overlay overlay-bg"></div>
                                        </div>
                                    </div>
                                    <div class="details">
                                        <div class="bottom d-flex justify-content-start align-items-center flex-wrap">
                                            <div>
                                                <a href="{{url('/post-details')}}" class="primary-btn">View</a>
                                                <a href="#"><span>September 14, 2018</span></a>
                                            </div>
                                            <div class="meta">
                                                <span class="lnr lnr-bubble"></span> 04
								</div>
                                        </div>
                                        <a href="#">
                                            <h4 class="lg-font">Nest Protect: 2nd Gen Smoke <br />
									+ CO Alarm</h4>
                                        </a>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore. Lorem
                                            ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
							</p>
                                        <a href="#" class="primary-btn fill mt-30">read more</a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-4">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-sm-6">
                                        <div class="single-post mb-03">
                                            <div class="thumb">
                                                <div class="relative">
                                                    <img class="f-img img-fluid mx-auto" src={br2} alt="" />
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
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-6">
                                        <div class="single-post">
                                            <div class="thumb">
                                                <div class="relative">
                                                    <img class="f-img img-fluid mx-auto" src={br1} alt="" />
                                                    <div class="overlay overlay-bg"></div>
                                                </div>
                                            </div>
                                            <div class="details">
                                                <div class="bottom d-flex justify-content-between">
                                                    <div>
                                                        <h4 class="mt-0">Recent Music Playlist</h4>
                                                        <p>Selected by techmania</p>
                                                    </div>
                                                    <div>
                                                        <span class="lnr lnr-arrow-down text-white"></span>
                                                    </div>
                                                </div>
                                                <ul class="list">
										<li>
											<a href="https://www.youtube.com/watch?v=UfcAVejslrU">
											Marconi Union, “Weightless”
											</a>
										</li>
										<li>
											<a href="https://www.youtube.com/watch?v=YbHZ8VVhb94">
											Airstream, “Electra”
											</a>
										</li>
											<li>
											<a href="https://www.youtube.com/watch?v=EcRXlM6edrM">
											DJ Shah, “Mellomaniac (Chillout Mix)”
											</a>
										</li>
											<li>
											<a href="https://www.youtube.com/watch?v=JQ4nJls4Hic">
											Enya, “Watermark”
											</a>
										</li>
											<li>
											<a href="https://www.youtube.com/watch?v=COqx-TCxrSk">
											Barcelona, “Please Don’t Go”
											</a>
										</li>
											<li>
											<a href="https://www.youtube.com/watch?v=dVNdTXEJv1A">
											All Saints, “Pure Shores”
											</a>
										</li>
											<li>
											<a href="https://www.youtube.com/watch?v=hLQl3WQQoQ0">
											Adele, “Someone Like You”
											</a>
										</li>
											<li>
											<a href="https://www.youtube.com/watch?v=Fc3fmSSUwck">
											Mozart, “Canzonetta Sull’aria”
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
                </section>
                {/* <!-- End Banner Area --> */}
            </div>

        );
    }
}


export default Banner;