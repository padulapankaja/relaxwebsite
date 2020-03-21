import React, { Component } from 'react';


// images import 
import logo from '../../Images/logo.png'

class Footer extends Component {
    constructor() {
        super();
        this.state = {

        };



    }



    render() {
        return (
            <div className="container-fluid text-left">
                <footer class="footer-area section-gap-top">
                    <div class="container">
                        <div class="row pb-10">
                            <div class="col-lg-4 col-md-6">
                                <div class="single-footer-widget">
                                    <div class="mb-40">
                                        <img src={logo} alt="" />
                                    </div>
                                    <p>
                                        Technology and gadgets Adapter (MPA) is our favorite iPhone solution, since it lets you use the headphones
                                        you’re most comfortable with. It has an iPhone-compatible jack at one end and a microphone module with an
                                        Answer/End/Pause button and a female 3.5mm audio jack for connectingheadphones
						</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="single-footer-widget">
                                    <h6 class="heading">Quick Links</h6>
                                    <div class="row">
                                        <ul class="col footer-nav">
                                            <li><a href="#">Sitemaps</a></li>
                                            <li><a href="#">Categories</a></li>
                                            <li><a href="#">Archives</a></li>
                                            <li><a href="#">Advertise</a></li>
                                            <li><a href="#">Ad Choice</a></li>
                                        </ul>
                                        <ul class="col footer-nav">
                                            <li><a href="#">Privacy Policy</a></li>
                                            <li><a href="#">Terms of Use</a></li>
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
                                                <img class="" src="img/n1.jpg" alt="" />
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
                                                <img class="" src="img/n2.jpg" alt="" />
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
                                    Copyright &copy; All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="http://lucidex.lk" target="_blank">Lucidex</a>
                                </p>
                                <div class="col-lg-4 col-sm-6 footer-social">
                                    <a href="#"><i class="fa fa-facebook"></i></a>
                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                    <a href="#"><i class="fa fa-youtube-play"></i></a>
                                    <a href="#"><i class="fa fa-pinterest"></i></a>
                                    <a href="#"><i class="fa fa-rss"></i></a>
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