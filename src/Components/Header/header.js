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
            <div className="container-fluid">
		<div class="main-menu" id="main-menu">
			<div class="container">
				<div class="row align-items-center justify-content-between">
					<div>
						<a class="navbar-brand" href="index.html">
							<img src={headerLog} alt="" />
						</a>
					</div>
					<nav id="nav-menu-container" class="ml-auto">
							<ul class="nav-menu">
								<li class="menu-active"><a href="index.html">Home</a></li>
								<li><a href="archive.html">Archive</a></li>
								<li><a href="category.html">Category</a></li>
								<li class="menu-has-children"><a href="">Pages</a>
									<ul>
										<li><a href="post-details.html">Post Details</a></li>
										<li><a href="elements.html">Elements</a></li>
									</ul>
								</li>
								<li><a href="contact.html">Contact</a></li>
							</ul>
						</nav>
					<div class="navbar-right ml-auto">
						<form class="Search">
							<input type="text" class="form-control Search-box" name="Search-box" id="Search-box" placeholder="Search"/>
							<label for="Search-box" class="Search-box-label">
								<span class="lnr lnr-magnifier"></span>
							</label>
							<span class="Search-close">
								<span class="lnr lnr-cross"></span>
							</span>
						</form>
					</div>
				</div>
			</div>
		</div>
                
            </div>
        );
    }
}


export default Header;