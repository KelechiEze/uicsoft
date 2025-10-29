import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer id="footer" class="section-bg">
                <div class="footer-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="footer-info">
                                            <h3>UICSOFT</h3>
                                            <p>We're dedicated to transforming lives through innovative prosthetic and assistive technology solutions. Our mission is to empower individuals with disabilities by providing custom, affordable, and technologically advanced mobility devices that restore independence and confidence.</p>
                                        </div>

                                        <div class="footer-newsletter">
                                            <h4>Stay Updated</h4>
                                            <p>Subscribe to our newsletter for updates on new technologies, success stories, and community events in assistive technology.</p>
                                            <form action="" method="post">
                                                <input type="email" name="email" placeholder="Enter your email"/>
                                                <input type="submit" value="Subscribe"/>
                                            </form>
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <div class="footer-links">
                                            <h4>Quick Links</h4>
                                            <ul>
                                                <li><a href="#">Home</a></li>
                                                <li><a href="#about">About Us</a></li>
                                                <li><a href="#services">Our Solutions</a></li>
                                                <li><a href="#pricing">Service Packages</a></li>
                                                <li><a href="#team">Our Team</a></li>
                                                <li><a href="#testimonials">Success Stories</a></li>
                                                <li><a href="#faq">FAQ</a></li>
                                            </ul>
                                        </div>

                                        <div class="footer-links">
                                            <h4>Contact Information</h4>
                                            <p>
                                                <strong>Address:</strong><br/>
                                                No 18 Channels TV Avenue<br/>
                                                Opic Estate<br/>
                                                Isheri, Lagos<br/>
                                                Nigeria
                                            </p>
                                            <p>
                                                <strong>Phone:</strong> +234 816 088 0412<br/>
                                                <strong>Email:</strong> ugwuisaaciu@gmail.com
                                            </p>
                                        </div>

                                        <div class="social-links">
                                            <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                                            <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                                            <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                                            <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div id="footers" class="form">
                                    <h4>Get In Touch</h4>
                                    <p>Have questions about our prosthetic solutions? Interested in a consultation? Send us a message and our team will get back to you within 24 hours.</p>
                                    <form action="" method="post" role="form" class="contactForm">
                                        <div class="form-group">
                                            <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 characters" />
                                            <div class="validation"></div>
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                            <div class="validation"></div>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 characters for subject" />
                                            <div class="validation"></div>
                                        </div>
                                        <div class="form-group">
                                            <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write your message" placeholder="How can we help you?"></textarea>
                                            <div class="validation"></div>
                                        </div>

                                        <div id="sendmessage">Your message has been sent. Thank you!</div>
                                        <div id="errormessage"></div>

                                        <div class="text-center">
                                            <button type="submit" title="Send Message">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="copyright">
                        &copy; Copyright 2024 AccessTech Solutions. All Rights Reserved
                    </div>
                    <div class="credits">
                        Designed by <a href="">Ugwu Isaac Chinenye</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}