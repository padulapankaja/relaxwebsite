import React, { Component } from 'react';



// images import 
import logo from '../../Images/logo.png'
import n1 from '../../Images/n1.jpg'
import n2 from '../../Images/n2.jpg'
class Footer extends Component {
    constructor() {
        super();
        this.state = {

        };



    }



    render() {
        return (
            <div className="text-left">
                <footer class="footer-area section-gap-top">
                    <div class="container">
                        <div class="row pb-10">
                            <div class="col-lg-4 col-md-6">
                                <div class="single-footer-widget">
                                    <div class="mb-40">
                                        <img src={logo} alt="relax hotel" />
                                    </div>
                                    <p>
                                    Has someone ever told you to “just relax” when you’re in the middle of a stressful situation, and you thought to yourself, “Well, that’s easy for you to say!”
						</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="single-footer-widget">
                                    <h6 class="heading">Quick Links</h6>
                                    <div class="row">
                                        <ul class="col footer-nav">
                                            <li><a href="#">Sitemaps</a></li>
                                            <li><a href="#">Videos</a></li>
                                            <li><a href="#">News</a></li>
                                            <li><a href="#">Ayurveda</a></li>
                                            <li><a href="#">Contact</a></li>
                                        </ul>
                                        <ul class="col footer-nav">
                                            {/* <li><a href="#">Privacy Policy</a></li>
                                            <li><a href="#">Terms of Use</a></li> */}
                                            <li><a href="#">Help Center</a></li>
                                            <li><a href="#">Newsletters</a></li>
                                            <li><a href="#">Feedback</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-12">
                                <div class="single-footer-widget mail-chimp">
                                    <h6 class="heading">Most Viewed News</h6>
                                    <div class="footer-news">
                                        <div class="single-news d-flex">
                                            <div class="image">
                                                <img class="" src={n1} alt="relax hotel" />
                                            </div>
                                            <div class="details">
                                                <a href="#">
                                                    <h4>Converter Ipod Video Taking Portable
											Video Viewing To A Whole Level</h4>
                                                </a>
                                                <div class="d-flex justify-content-between">
                                                    <p>March 14, 2018</p>
                                                    <p class="meta">
                                                        <span class="lnr lnr-bubble"></span>
                                                        <span class="likes">04</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="single-news d-flex">
                                            <div class="image">
                                                <img class="" src={n2} alt="relax hotel" />
                                            </div>
                                            <div class="details">
                                                <a href="#">
                                                    <h4>Converter Ipod Video Taking Portable
											Video Viewing To A Whole Level</h4>
                                                </a>
                                                <div class="d-flex justify-content-between">
                                                    <p>March 14, 2018</p>
                                                    <p class="meta">
                                                        <span class="lnr lnr-bubble"></span>
                                                        <span class="likes">04</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="copyright-text">
                        <div class="container">
                            <div class="row footer-bottom d-flex justify-content-between">
                                <p class="col-lg-8 col-sm-6 footer-text m-0 text-white">
                                    Copyright &copy; All rights reserved |  <a style={{color:'white', fontWeight:'900'}} href="http://lucidex.lk" target="_blank">Lucidex</a>
                                </p>
                                <div class="col-lg-4 col-sm-6 footer-social">
                                    <a href="https://www.facebook.com/lucidexsolutions/" target="_blank"><i class="fa fa-facebook"></i></a>
                                    <a href="https://twitter.com/lucidex_" target="_blank"><i class="fa fa-twitter"></i></a>
                                    <a href="https://www.linkedin.com/company/31043839/" target="_blank"><i class="fa fa-linkedin"></i></a>
                                    <a href="https://www.instagram.com/lucidex_solutions/" target="_blank"><i class="fa fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}


export default Footer;