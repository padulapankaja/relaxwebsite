import React, { Component } from 'react';


// import images
import i1 from '../../Images/int-news//i1.jpg'
import i2 from '../../Images/int-news//i2.jpg'
import i3 from '../../Images/int-news//i3.jpg'
import addImage from '../../Images/ad-300-600.jpg'

//api call class

import Apicall from '../../ApiCalls'

//import axios
import axios from "axios";

//import moment
import moment from "moment";

let LatesNews = props => (


    <div className="col-lg-12 col-md-6 col-sm-6">
        <div className="single-post single-int mb-40">
            <div className="thumb">
                <div className="relative">
                    <img style={{ float: 'left !important' }} className="f-img img-fluid mx-auto" src={`${props.lates.image === undefined ? "" : props.lates.image.thumbnail.contentUrl}`} style={{ display: props.lates.image != undefined ? 'block, floa' : 'none' }} alt="relax" />
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
                <img  className="f-img img-fluid mx-auto" src={i1} alt="relax" />
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
class InternationalNews extends Component {
    constructor() {
        super();
        this.LatesInternationalNews = this.LatesInternationalNews.bind(this)
        this.onlygetfirstnews = this.onlygetfirstnews.bind(this)
        this.onlygetfirstnewsFormain = this.onlygetfirstnewsFormain.bind(this)
        this.state = {
            Internationalnews: [],
            InternationalnewsTemp: [],
            InternationalnewsMain: [],

        };



    }
    async UNSAFE_componentWillMount() {
        const Keywordserach = {
            key: 'international',
            mkt: 'en'
        };
        await axios.post(`${Apicall.server}${Apicall.port}${Apicall.api.news}`, Keywordserach).then(res => {
            this.setState({
                Internationalnews: res.data.value
            })
            console.log(this.state.Internationalnews);

        }).catch(function (error) {
            console.log(error);
        })
        await this.onlygetfirstnews()
        await this.onlygetfirstnewsFormain()

    }

    onlygetfirstnews() {

        this.setState({
            InternationalnewsTemp: this.state.Internationalnews.slice(1, 3)
        })
    }
    onlygetfirstnewsFormain() {

        this.setState({
            InternationalnewsMain: this.state.Internationalnews.slice(0, 1)
        })
    }

    LatesInternationalNews() {
        return this.state.InternationalnewsTemp.map(function (data, i) {
            return <LatesNews lates={data} key={i} />;
        });
    }
    LatesInternationalNewsMain() {
        return this.state.InternationalnewsMain.map(function (data, i) {
            return <LatesNewsMain lates={data} key={i} />;
        });
    }


    render() {
        return (
            <div>
                {/* <!-- Start International News Area --> */}
                <section className="int-news-area section-gap-top text-left">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-title">
                                            <h2 className="heading">International News</h2>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                <div className="col-lg-7 col-md-8">
                                   {this.LatesInternationalNewsMain()}
                                    </div>
                                    <div className="col-lg-5 col-md-12">
                                        <div className="row">

                                            {this.LatesInternationalNews()}

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="ad-widget-wrap">
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