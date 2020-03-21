import React, { Component } from 'react';


// import images
import i1 from '../../Images/int-news//i1.jpg'
import i2 from '../../Images/int-news//i2.jpg'
import i3 from '../../Images/int-news//i3.jpg'
import addImage from '../../Images/ad-300-600.jpg'

class InternationalNews extends Component {
    constructor() {
        super();
        this.state = {

        };



    }



    render() {
        return (
            <div>
                {/* <!-- Start International News Area --> */}
                <section class="int-news-area section-gap-top text-left">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 col-md-12">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="section-title">
                                            <h2 class="heading">International News</h2>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-7 col-md-8">
                                        <div class="single-post single-int mb-40">
                                            <div class="thumb">
                                                <div class="relative">
                                                    <img class="f-img w-100 img-fluid mx-auto" src={i1} alt="relax message" />
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="bottom pt-30 d-flex justify-content-between align-items-center flex-wrap">
                                                    <div>
                                                        <a href="#" class="primary-btn">gadgets</a>
                                                        <a href="#"><span>September 14, 2018</span></a>
                                                    </div>
                                                    <div class="meta">
                                                        <span class="lnr lnr-bubble"></span> 04
										</div>
                                                </div>
                                                <a href="#">
                                                    <h4>Dealing With Technical Support with Printing Is Very
											Appealing Comp 10 Useful Tips</h4>
                                                </a>
                                                <p>
                                                    It won’t be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual
                                                    Game, it has beenachieving great heights so far as its popularity and technological advancement are
                                                    concerned.
                                                    The history of video game is as interesting as a fairy tale. The quality of today’s video game was not at all
                                                    there when video game first conceptualized and played ever
									</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-5 col-md-12">
                                        <div class="row">
                                            <div class="col-lg-12 col-md-6 col-sm-6">
                                                <div class="single-post single-int mb-40">
                                                    <div class="thumb">
                                                        <div class="relative">
                                                            <img class="f-img w-100 img-fluid mx-auto" src={i2} alt="relax message" />
                                                        </div>
                                                    </div>
                                                    <div class="">
                                                        <div class="bottom mt-10">
                                                            <div>
                                                                <a href="#" class="primary-btn">gadgets</a>
                                                                <a href="#"><span>September 14, 2018</span></a>
                                                            </div>
                                                        </div>
                                                        <a href="#">
                                                            <h4 class="mt-15">Facts Why Inkjet Printing Is Very
													Appealing Compared</h4>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-md-6 col-sm-6">
                                                <div class="single-post single-int mb-40">
                                                    <div class="thumb">
                                                        <div class="relative">
                                                            <img class="f-img w-100 img-fluid mx-auto" src={i3} alt="relax message" />
                                                        </div>
                                                    </div>
                                                    <div class="">
                                                        <div class="bottom mt-10">
                                                            <div>
                                                                <a href="#" class="primary-btn">gadgets</a>
                                                                <a href="#"><span>September 14, 2018</span></a>
                                                            </div>
                                                        </div>
                                                        <a href="#">
                                                            <h4>Facts Why Inkjet Printing Is Very
													Appealing Compared</h4>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4">
                                <div class="ad-widget-wrap">
                                    <img src={addImage} alt="relax message" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End International News Area --> */}
            </div>
        );
    }
}


export default InternationalNews;