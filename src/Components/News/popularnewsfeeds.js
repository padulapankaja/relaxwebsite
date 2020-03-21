import React, { Component } from 'react';

// import news 
import p1 from '../../Images/popular-news/p1.jpg'
import p2 from '../../Images/popular-news/p2.jpg'
import p3 from '../../Images/popular-news/p3.jpg'
import p4 from '../../Images/popular-news/p4.jpg'
import pvdo from '../../Images/popular-news/p-vdo.jpg'

class Popularnews extends Component {
    constructor() {
        super();
        this.state = {

        };

        

    }

    

    render() {
        return (
            <div>
                	{/* <!-- Start Popular News feed Area --> */}
	<section class="popular-news-area text-left" >
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="section-title">
						<h2 class="heading">Popular News Feed</h2>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-3 col-md-6 col-sm-6">
					<div class="single-post single-int mb-40">
						<div class="thumb">
							<div class="relative">
								<img class="f-img img-fluid mx-auto" src={p1} alt=""/>
							</div>
						</div>
						<div class="">
							<div class="bottom mt-10 d-flex justify-content-between align-items-center flex-wrap">
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
					<div class="single-post single-int mb-40">
						<div class="thumb">
							<div class="relative">
								<img class="f-img img-fluid mx-auto" src={p2} alt=""/>
							</div>
						</div>
						<div class="">
							<div class="bottom mt-10 d-flex justify-content-between align-items-center flex-wrap">
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

				<div class="col-lg-3 col-md-6 col-sm-6">
					<div class="single-post single-int mb-40">
						<div class="thumb">
							<div class="relative">
								<img class="f-img img-fluid mx-auto" src={p3} alt=""/>
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
					<div class="single-post single-int mb-40">
						<div class="thumb">
							<div class="relative">
								<img class="f-img img-fluid mx-auto" src={p4} alt=""/>
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

				<div class="col-lg-6 col-md-6 col-sm-12">
					<div class="single-post single-int mb-40">
						<div class="thumb">
							<div class="relative">
								<img class="f-img img-fluid mx-auto" src={pvdo} alt=""/>
								<a class="play-btn" href="https://www.youtube.com/watch?v=ARA0AxrnHdM">
									<img src="{{asset('img/play-icon.png')}}" class="vdo-btn" alt=""/>
								</a>
							</div>
						</div>
						<div class="">
							<div class="bottom mt-10 d-flex justify-content-between align-items-center flex-wrap">
								<div>
									<a href="#" class="primary-btn">gadgets</a>
									<a href="#"><span>September 14, 2018</span></a>
								</div>
								<div class="meta">
									<span class="lnr lnr-bubble"></span> 04
								</div>
							</div>
							<a href="#">
								<h4 class="mt-15">Dealing With Technical Support with Printing Is Very
									Appealing Comp 10 Useful Tips</h4>
							</a>
							<p>
								It won’t be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual
								Game, it has beenachieving great heights so far as its popularity and technological advancement are
								concerned.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- End Popular News feed Area --> */}
            </div>
        );
    }
}


export default Popularnews;