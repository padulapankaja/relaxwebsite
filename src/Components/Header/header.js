import React, { Component } from 'react';

import headerLog from "../../Images/logo.png"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


class Header extends Component {
    constructor() {
        super();
        this.state = {

        };

        

    }

    render() {
        return (
            <div className="text-left" style={{maxHeight:'300px'}}>
		<div class="main-menu" id="main-menu">
			<div class="container">
				<div class="row align-items-center justify-content-between">
					<div>
						<a class="navbar-brand" href="/">
							<img src={headerLog} alt="relax your life" />
						</a>
					</div>
					<nav id="nav-menu-container" class="ml-auto">
							<ul class="nav-menu">
								<li class="menu-active"><a href="/">Home</a></li>
								<li><Link to="/videos">Videos</Link></li>
								<li><Link to="/">Category</Link></li>
								<li><Link to="/news">News</Link></li>
								{/* <li class="menu-has-children"><Link to="/">News</Link>
									<ul>
										<li><Link to="/">Post Details</Link></li>
										<li><Link to="/">Elements</Link></li>
									</ul>
								</li> */}
								<li><Link to="/">Ayurveda</Link></li>
								<li><Link to="/">Contact</Link></li>
							</ul>
						</nav>
					<div class="navbar-right ml-auto">
						{/* <form class="Search">
							<input type="text" class="form-control Search-box" name="Search-box" id="Search-box" placeholder="Search"/>
							<label for="Search-box" class="Search-box-label">
								<span class="lnr lnr-magnifier"></span>
							</label>
							<span class="Search-close">
								<span class="lnr lnr-cross"></span>
							</span>
						</form> */}
					</div>
				</div>
			</div>
		</div>
                
            </div>
        );
    }
}


export default Header;