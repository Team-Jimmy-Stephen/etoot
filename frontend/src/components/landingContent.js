import React from "react";
import {ComputerOutlined, CheckCircleOutline, AllInclusiveOutlined} from '@material-ui/icons';

function Content() {
    return (
        <div>
            <div className="container content">
                <br />
                <br />
                <div className="row">
                    <div className="col-sm-3 talk">
                        <br />
                        <br />
                        <h1>Etoot</h1>
                        <h1>Tutoring</h1>
                        <br />
                        <h6 className="bold-four">
                           Find your next tutor. 
                        </h6>
                        <br />
                        <h6><a className="btn btn-dark start start-two" href="Home">Get Started</a></h6>
                        
                    </div>
                    <div className="col-sm-9">
                        <img src = "https://engineering.nyu.edu/sites/default/files/styles/content_header_default_1x/public/2018-10/online_tutoring.jpg?h=c97ef576&itok=G3_ALQm8">
                        </img>
                    </div>
                    
                </div>
                <br />
                <br />
            </div>

            <section class="features-icons bg-light text-center det-ails">
                <div class="container">
                    <br />
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <ComputerOutlined style={{ fontSize: 100 }}/>
                                <br />
                                <h5>ONLINE TUTORING</h5>
                                <p class="lead mb-0">Communicate directly with your tutor and schedule your first session.</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <AllInclusiveOutlined style={{ fontSize: 100 }}/>
                                <h5>DYNAMIC SUBJECTS</h5>
                                <p class="lead mb-0">Get help on a variety of different subjects.</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                                <CheckCircleOutline style={{ fontSize: 100 }}/>
                                <br />
                                <h5>ACHIEVE ACADEMIC RESULTS</h5>
                                <p class="lead mb-0">Make progress toward your academic goals.</p>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Content;