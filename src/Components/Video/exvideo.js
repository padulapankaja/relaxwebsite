import React, { Component } from 'react';


// import image

import e1 from '../../Images/exclusive-videos/e1.jpg'
import vicon from '../../Images/video-icon.jpg'


class Exvideo extends Component {
    constructor() {
        super();
        this.state = {

        };

        

    }

    

    render() {
        return (
            <div>
                

	{/* <!-- Start Exclusive Videos Area --> */}
	<section class="excl-vdo-area section-gap-top-60 text-left">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="section-title">
						<h2 class="heading">Exclusive Videos</h2>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-12 owl-carousel active-banner">
					<div class="single-post">
						<div class="thumb">
							<div class="relative">
								<img class="f-img img-fluid mx-auto" src={e1} alt="relax"/>
								<div class="overlay overlay-bg"></div>
							</div>
						</div>
						<div class="details">
							<div class="bottom d-flex justify-content-start align-items-center flex-wrap">
								<div>
									<a  class="primary-btn">gadgets</a>
									<a ><span>September 14, 2018</span></a>
								</div>
								<div class="meta">
									<span class="lnr lnr-bubble"></span> 04
								</div>
							</div>
							<a >
								<h4 class="lg-font">Nest Protect: 2nd Gen Smoke
									+ CO Alarm</h4>
							</a>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore. Lorem
								ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
							</p>
							<a class="play-btn" href="https://www.youtube.com/watch?v=ARA0AxrnHdM">
								<img src={vicon} class="mt-30" alt="relax"/>
							</a>
						</div>
					</div>

					<div class="single-post">
						<div class="thumb">
							<div class="relative">
								<img class="f-img img-fluid mx-auto" src={e1} alt="relax"/>
								<div class="overlay overlay-bg"></div>
							</div>
						</div>
						<div class="details">
							<div class="bottom d-flex justify-content-start align-items-center flex-wrap">
								<div>
									<a  class="primary-btn">gadgets</a>
									<a ><span>September 14, 2018</span></a>
								</div>
								<div class="meta">
									<span class="lnr lnr-bubble"></span> 04
								</div>
							</div>
							<a >
								<h4 class="lg-font">Nest Protect: 2nd Gen Smoke
									+ CO Alarm</h4>
							</a>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore. Lorem
								ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
							</p>
							<a class="play-btn" href="https://www.youtube.com/watch?v=ARA0AxrnHdM">
								<img src={vicon}class="mt-30" alt="relax"/>
							</a>
						</div>
					</div>

					<div class="single-post">
						<div class="thumb">
							<div class="relative">
								<img class="f-img img-fluid mx-auto" src={e1} alt="relax"/>
								<div class="overlay overlay-bg"></div>
							</div>
						</div>
						<div class="details">
							<div class="bottom d-flex justify-content-start align-items-center flex-wrap">
								<div>
									<a  class="primary-btn">gadgets</a>
									<a ><span>September 14, 2018</span></a>
								</div>
								<div class="meta">
									<span class="lnr lnr-bubble"></span> 04
								</div>
							</div>
							<a >
								<h4 class="lg-font">Nest Protect: 2nd Gen Smoke
									+ CO Alarm</h4>
							</a>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore. Lorem
								ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
							</p>
							<a class="play-btn" href="https://www.youtube.com/watch?v=ARA0AxrnHdM">
								<img src={vicon} class="mt-30" alt="relax"/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- End Exclusive Videos Area --> */}
            </div>
        );
    }
}


export default Exvideo;