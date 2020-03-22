import React, { Component } from 'react';

// import news 
import p1 from '../../Images/popular-news/p1.jpg'
import p2 from '../../Images/popular-news/p2.jpg'
import p3 from '../../Images/popular-news/p3.jpg'
import p4 from '../../Images/popular-news/p4.jpg'
import pvdo from '../../Images/popular-news/p-vdo.jpg'


//api call class

import Apicall from '../../ApiCalls'

//import axios
import axios from "axios";

//import moment
import moment from "moment";


let LatesNews = props => (


	<div class="col-lg-6 col-md-6 col-sm-6">
        <div className="single-post single-int mb-40">
            <div className="thumb">
                <div className="relative">
                    <img style={{ float: 'left !important' }} className="f-img img-fluid mx-auto" src={`${props.lates.image === undefined ? "" : props.lates.image.thumbnail.contentUrl}`} style={{ display: props.lates.image != undefined ? 'block, floa' : 'none' }} alt="ayurveda massage" />
                </div>
            </div>
            <div className="">
                <div className="bottom mt-10">
                    <div>
                        <a href={`${props.lates.url}`} target="_blank" className="primary-btn">View</a>
                        <a ><span>{moment(props.lates.datePublished).format("MMM Do YYYY")}</span></a>
                    </div>
                </div>
                <a href={`${props.lates.url}`} target="_blank">
                    <a href={`${props.lates.url}`} target="_blank" >
                        <h4 style={{ fontSize: '13px', lineHeight: '18px' }}>{props.lates.name}</h4>
                    </a>
                    <p>Description: {props.lates.description}</p>
                </a>
            </div>
        </div>
   </div>

)
let LatesNewsMain = props => (


    
        <div className="single-post single-int mb-40">
            <div className="thumb">
                <div className="relative">
                {/* <img style={{ float: 'left !important' }} className="f-img img-fluid mx-auto" src={`${props.lates.image === undefined ? "" : props.lates.image.thumbnail.contentUrl}`} style={{ display: props.lates.image != undefined ? 'block, floa' : 'none' }} alt="relax" /> */}
                <img  className="f-img img-fluid mx-auto" src={p1} alt="ayurveda massage" />
                </div>
            </div>
            <div className="">
                <div className="bottom pt-30 d-flex justify-content-between align-items-center flex-wrap">
                    <div>
                    <a href={`${props.lates.url}`} target="_blank" className="primary-btn">View</a>
                    <a ><span>{moment(props.lates.datePublished).format("MMM Do YYYY")}</span></a>
                    </div>
                    <div className="meta">
                        <span className="lnr lnr-bubble"></span> 04
    </div>
                </div>
                <a href={`${props.lates.url}`} target="_blank" >
                        <h4 style={{ fontSize: '13px', lineHeight: '18px' }}>{props.lates.name}</h4>
                    </a>
                <p>
                {props.lates.description}
</p>
            </div>
        </div>
  

)
class Popularnews extends Component {
    constructor() {
        super();
        this.state = {
			popularnews:[],
			popularnewsTemp:[],
			popularnewsMain:[],
        };

        

    }

    
	async UNSAFE_componentWillMount() {
        const Keywordserach = {
            key: 'ayurveda relax',
            mkt: 'en'
        };
        await axios.post(`${Apicall.server}${Apicall.port}${Apicall.api.news}`, Keywordserach).then(res => {
            this.setState({
                popularnews: res.data.value
            })
            console.log(this.state.popularnews);

        }).catch(function (error) {
            console.log(error);
        })
        await this.onlygetfirstnews()
        await this.onlygetfirstnewsFormain()

    }

    onlygetfirstnews() {

        this.setState({
            popularnewsTemp: this.state.popularnews.slice(1, 5)
        })
    }
    onlygetfirstnewsFormain() {

        this.setState({
            popularnewsMain: this.state.popularnews.slice(0, 1)
        })
    }

    LatesPopularlNews() {
        return this.state.popularnewsTemp.map(function (data, i) {
            return <LatesNews lates={data} key={i} />;
        });
    }
    LatesPopularNewsMain() {
        return this.state.popularnewsMain.map(function (data, i) {
            return <LatesNewsMain lates={data} key={i} />;
        });
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
						<h2 class="heading">Ayurveda News Feed</h2>
					</div>
				</div>
			</div>

			<div class="row">
			<div class="col-lg-6 col-md-6 col-sm-12">
			<div className="row">
				{this.LatesPopularlNews()}
				
				</div>
			</div>

				<div class="col-lg-6 col-md-6 col-sm-12">
					<div class="single-post single-int mb-40">
						<div class="thumb">
							<div class="relative">
								<img class="f-img img-fluid mx-auto" src={pvdo} alt="ayurveda massage"/>
								<a class="play-btn" href="https://www.youtube.com/watch?v=ARA0AxrnHdM">
									<img src="{{asset('img/play-icon.png')}}" class="vdo-btn" alt="ayurveda massage"/>
								</a>
							</div>
						</div>
						<div class="">
							<div class="bottom mt-10 d-flex justify-content-between align-items-center flex-wrap">
								<div>
									<a  class="primary-btn">gadgets</a>
									<a ><span>September 14, 2018</span></a>
								</div>
								<div class="meta">
									<span class="lnr lnr-bubble"></span> 04
								</div>
							</div>
							<a >
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