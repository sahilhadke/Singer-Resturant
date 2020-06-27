// https://codepen.io/scanfcode/pen/MEZPNd
import React, { Component } from 'react'
import "./css/footer.css"

class footer extends Component {
    render() {
        return (
            <div>
                <footer className="site-footer">
                    <div className="container footer-container">
                        <div className="row">
                            
                            <div className="col-sm-12 col-md-9">
                                <h6>About</h6>
                                <p className="text-justify">StartUp is an initiative to help budding singers to get opportunities to perfrom at resturants. StartUp focuses on providing the most efficient services and to keep the process as simple as possible. We will help singers to find events newarby. And we will help the resturants to select the perfect performer for the night.</p>
                            </div>

                            
                            <div className="col-sm-12 col-md-3">
                                <h6>Quick Links</h6>
                                <ul className="footer-links">
                                <li><a href="/singers">Singers</a></li>
                                <li><a href="/events">Events</a></li>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                                <li><a href="/donate">Donate</a></li>
                                <li><a href="/privacy-policy">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <hr></hr>
                    </div>
                    
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by 
                                <a href="#">StartUp</a>.
                                </p>
                            </div>

                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <ul className="social-icons">
                                <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a className="facebook" href="#"><i className="fa fa-instagram"></i></a></li>
                                <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
                                </ul>
                            </div>
                        </div>      
                    </div>
                </footer>
            </div>
        )
    }
}

export default footer
