import React, { Component } from 'react';

// import images
import e1 from '../../Images/editors-pick/e1.jpg'
import e2 from '../../Images/editors-pick/e2.jpg'
import e3 from '../../Images/editors-pick/e3.jpg'
import e4 from '../../Images/editors-pick/e4.jpg'

class Editorpick extends Component {
    constructor() {
        super();
        this.state = {

        };

        

    }

    

    render() {
        return (
            <div>
                	{/* <!-- Start Editors Pick Area --> */}
	<section class="editors-area text-left">
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-3 col-md-3 col-sm-6">
					<div class="single-post d-flex single-post2 mb-40">
						<div class="thumb">
							<div class="relative">
								<img class="f-img img-fluid mx-auto" src={e1} alt=""/>
							</div>
						</div>
						<div class="">
							<div class="bottom">
								<div>
									<a href="#" class="primary-btn">gadgets</a>
									<a href="#"><span>September 14, 2018</span></a>
								</div>
							</div>
							<a href="#">
								<h4>2nd Gen Smoke CO Alarm time <br/>
									to get up from sleep</h4>
							</a>
						</div>
					</div>
				</div>
				<div class="col-lg-3 col-md-3 col-sm-6">
					<div class="single-post d-flex single-post2 mb-40">
						<div class="thumb">
							<div class="relative">
								<img class="f-img img-fluid mx-auto" src={e2} alt=""/>
							</div>
						</div>
						<div class="">
							<div class="bottom">
								<div>
									<a href="#" class="primary-btn">gadgets</a>
									<a href="#"><span>September 14, 2018</span></a>
								</div>
							</div>
							<a href="#">
								<h4>2nd Gen Smoke CO Alarm time <br/>
									to get up from sleep</h4>
							</a>
						</div>
					</div>
				</div>
				<div class="col-lg-3 col-md-3 col-sm-6">
					<div class="single-post d-flex single-post2">
						<div class="thumb">
							<div class="relative">
								<img class="f-img img-fluid mx-auto" src={e3} alt=""/>
							</div>
						</div>
						<div class="">
							<div class="bottom">
								<div>
									<a href="#" class="primary-btn">gadgets</a>
									<a href="#"><span>September 14, 2018</span></a>
								</div>
							</div>
							<a href="#">
								<h4>2nd Gen Smoke CO Alarm time <br/>
									to get up from sleep</h4>
							</a>
						</div>
					</div>
				</div>
				<div class="col-lg-3 col-md-3 col-sm-6">
					<div class="single-post d-flex single-post2">
						<div class="thumb">
							<div class="relative">
								<img class="f-img img-fluid mx-auto"src={e4} alt=""/>
							</div>
						</div>
						<div class="">
							<div class="bottom">
								<div>
									<a href="#" class="primary-btn">gadgets</a>
									<a href="#"><span>September 14, 2018</span></a>
								</div>
							</div>
							<a href="#">
								<h4>2nd Gen Smoke CO Alarm time <br/>
									to get up from sleep</h4>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- End Editors Pick Area --> */}
 
            </div>
        );
    }
}


export default Editorpick;