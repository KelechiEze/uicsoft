import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer id="footer" className="section-bg">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="footer-info">
                                            <h3>UICSOFT</h3>
                                            <p>We're dedicated to transforming lives through innovative prosthetic and assistive technology solutions. Our mission is to empower individuals with disabilities by providing custom, affordable, and technologically advanced mobility devices that restore independence and confidence.</p>
                                        </div>

                                        {/* Newsletter removed */}

                                        <div className="footer-links">
                                            <h4>Contact Information</h4>
                                            <p>
                                                <strong>Address:</strong><br/>
                                                No 18 Channels TV Avenue<br/>
                                                Opic Estate<br/>
                                                Isheri, Lagos<br/>
                                                Nigeria
                                            </p>
                                            {/* Phone and Email removed */}
                                        </div>

                                        {/* Social media links removed */}
                                    </div>

                                    <div className="col-sm-6">
                                        {/* Quick Links removed */}

                                       {/* <div className="footer-contact-info">
                                            <h4>Get In Touch</h4>
                                            <p>
                                                For inquiries, please send us an email at:<br/>
                                                <strong>uicsoft1@gmail.com</strong>
                                            </p>
                                            <p>We'll get back to you as soon as possible!</p>
                                        </div>*/}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div id="footers" className="form">
                                    <h4>Get In Touch</h4>
                                    <p>Have questions about our prosthetic solutions? Interested in a consultation? Send us a message and our team will get back to you within 24 hours.</p>
                                    {/* Form commented out */}
                                    {/*
                                    <form action="" method="post" role="form" className="contactForm">
                                        <div className="form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 characters" />
                                            <div className="validation"></div>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                            <div className="validation"></div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 characters for subject" />
                                            <div className="validation"></div>
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write your message" placeholder="How can we help you?"></textarea>
                                            <div className="validation"></div>
                                        </div>

                                        <div id="sendmessage">Your message has been sent. Thank you!</div>
                                        <div id="errormessage"></div>

                                        <div className="text-center">
                                            <button type="submit" title="Send Message">Send Message</button>
                                        </div>
                                    </form>
                                    */}
                                    
                                    <div className="email-contact">
                                        <p><strong>Alternatively, send us an email directly:</strong></p>
                                        <p className="email-address">
                                            <a href="mailto:uicsoft1@gmail.com">uicsoft1@gmail.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="copyright">
                        &copy; Copyright 2024 AccessTech Solutions. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="">Ugwu Isaac Chinenye</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}