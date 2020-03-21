import React, { Component } from 'react';


// import images 

import t1 from '../../Images/tech-news/t1.jpg'
import t2 from '../../Images/tech-news/t2.jpg'
import t3 from '../../Images/tech-news/t3.jpg'
import t4 from '../../Images/tech-news/t4.jpg'

class Technologynews extends Component {
    constructor() {
        super();
        this.state = {

        };

        

    }

    

    render() {
        return (
            <div>
                	{/* <!-- Start Technology News Area --> */}
	<section class="tech-news-area section-gap-top-60 text-left">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="section-title">
						<h2 class="heading">Technology News</h2>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-3 col-md-5 col-sm-6">
					<div class="single-post single-int mb-40">
						<div class="thumb">
							<div class="relative">
								<img class="f-img img-fluid mx-auto" src={t1} alt="how to relax"/>
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
								<h4>Facts Why Inkjet Printing Is
									Appealing Compared</h4>
							</a>
						</div>
					</div>
				</div>

				<div class="col-lg-3 col-md-5 col-sm-6">
					<div class="single-post single-int mb-40">
						<div class="thumb">
							<div class="relative">
								<img class="f-img img-fluid mx-auto" src={t2} alt="how to relax"/>
								<a class="play-btn" href="https://www.youtube.com/watch?v=ARA0AxrnHdM">
									<img src="{{asset('img/play-icon.png')}}" class="vdo-btn" alt="how to relax"/>
								</a>
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
								<h4>Facts Why Inkjet Printing Is
									Appealing Compared</h4>
							</a>
						</div>
					</div>
				</div>

				<div class="col-lg-3 col-md-5 col-sm-6">
					<div class="single-post single-int mb-40">
						<div class="thumb">
							<div class="relative">
								<img class="f-img img-fluid mx-auto" src={t3} alt="how to relax"/>
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
								<h4>Facts Why Inkjet Printing Is
									Appealing Compared</h4>
							</a>
						</div>
					</div>
				</div>

				<div class="col-lg-3 col-md-5 col-sm-6">
					<div class="single-post single-int mb-40">
						<div class="thumb">
							<div class="relative">
								<img class="f-img img-fluid mx-auto" src={t4} alt="how to relax"/>
								<a class="play-btn" href="https://www.youtube.com/watch?v=ARA0AxrnHdM">
									<img src="{{asset('img/play-icon.png')}}" class="vdo-btn" alt="how to relax"/>
								</a>
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
								<h4>Facts Why Inkjet Printing Is
									Appealing Compared</h4>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- End Technology News Area --> */}
    </div>
           
        );
    }
}


export default Technologynews;