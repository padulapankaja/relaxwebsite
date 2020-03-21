import React, { Component } from 'react';

import headerLog from "../../Images/logo.png"



class Header extends Component {
    constructor() {
        super();
        this.state = {

        };

        

    }

    render() {
        return (
            <div className="text-left">
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
								<li><a href="/videos">Videos</a></li>
								<li><a href="category.html">Category</a></li>
								<li class="menu-has-children"><a href="/">Pages</a>
									<ul>
										<li><a href="/">Post Details</a></li>
										<li><a href="/">Elements</a></li>
									</ul>
								</li>
								<li><a href="/">Contact</a></li>
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