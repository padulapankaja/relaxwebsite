import React, { Component } from 'react';



// import images 

//import axios
import axios from "axios";

//import moment
import moment from "moment";

import Apicall from '../../ApiCalls'


import t1 from '../../Images/tech-news/t1.jpg'
import t2 from '../../Images/tech-news/t2.jpg'
import t3 from '../../Images/tech-news/t3.jpg'
import t4 from '../../Images/tech-news/t4.jpg'

let Articles = props => (

// 	<div class="col-lg-6 col-md-6 col-sm-6">
//         <div className="single-post single-int mb-40">
//             <div className="thumb">
//                 <div className="relative">
//                     <img style={{ float: 'left !important' }} className="f-img img-fluid mx-auto" src={`${props.lates.image === undefined ? "" : props.lates.image.thumbnail.contentUrl}`} style={{ display: props.lates.image != undefined ? 'block, floa' : 'none' }} alt="ayurveda massage" />
//                 </div>
//             </div>
//             <div className="">
//                 <div className="bottom mt-10">
//                     <div>
//                         <a href={`${props.lates.url}`} target="_blank" className="primary-btn">View</a>
//                         <a ><span>{moment(props.lates.datePublished).format("MMM Do YYYY")}</span></a>
//                     </div>
//                 </div>
//                 <a href={`${props.lates.url}`} target="_blank">
//                     <a href={`${props.lates.url}`} target="_blank" >
//                         <h4 style={{ fontSize: '13px', lineHeight: '18px' }}>{props.lates.name}</h4>
//                     </a>
//                     <p>Description: {props.lates.description}</p>
//                 </a>
//             </div>
//         </div>
//    </div>

	<div class="col-lg-3 col-md-5 col-sm-6">
	<div class="single-post single-int mb-40">
		<div class="thumb">
			<div class="relative">
				<img class="f-img img-fluid mx-auto" src={t4} alt="how to relax"/>
				<a class="play-btn"  href={`${props.lates.web_url}`}>
					<img src="{{asset('img/play-icon.png')}}" class="vdo-btn" alt="how to relax"/>
				</a>
			</div>
		</div>
		<div class="">
			<div class="bottom mt-10">
				<div>
				
					<a ><span>{moment(props.lates.pub_date).format("MMM Do YYYY")}</span></a>
				</div>
			</div>
			<a >
			<h4>{props.lates.abstract}</h4>
			</a>
			<p>Source : {props.lates.source}</p>
			<p>Headline : {props.lates.headline.main}</p>
		</div>
	</div>
</div>

)


class Technologynews extends Component {
    constructor() {
		super();
		this.LatesPopularlNews = this.LatesPopularlNews.bind(this)
        this.state = {
			topartcle:[],
        };

        

    }

    async UNSAFE_componentWillMount() {
     
        await axios.get(`${Apicall.ayurveda}`,  { 
		}).then(res => {
			this.setState({
				topartcle: res.data.response.docs
            })
			console.log("-----------------------------------------------------------------------------");
			
            console.log(this.state.topartcle);

        }).catch(function (error) {
            console.log(error);
        })
      
	}

	LatesPopularlNews() {
        return this.state.topartcle.map(function (data, i) {
            return <Articles lates={data} key={i} />;
        });
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
	
				{this.LatesPopularlNews()}
				{/* <div class="col-lg-3 col-md-5 col-sm-6">
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
									<a  class="primary-btn">gadgets</a>
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
		</div>
	</section>
	{/* <!-- End Technology News Area --> */}
    </div>
           
        );
    }
}


export default Technologynews;