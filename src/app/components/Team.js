'use client';

import React, { Component } from 'react';
import Image from 'next/image';

export default class Team extends Component {
    render() {
        return (
            <div>
                <section id="team" className="section-bg">
                    <div className="container">
                        <div className="section-header">
                            <h3>Our Team</h3>
                            <p>Meet the dedicated professionals using technology to create life-changing assistive devices and prosthetic solutions</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-6 wow fadeInUp">
                                <div className="member">
                                    <Image 
                                        src="/ugwuw.webp" 
                                        alt="Isaac Ugwu Chinenye"
                                        width={300}
                                        height={300}
                                        className="img-fluid"
                                        priority
                                    />
                                    <div className="member-info">
                                        <div className="member-info-content">
                                            <h4>Isaac Ugwu Chinenye</h4>
                                            <span>Lead Developer & Technical Architect</span>
                                            <div className="social">
                                                <a href=""><i className="fa fa-twitter"></i></a>
                                                <a href=""><i className="fa fa-facebook"></i></a>
                                                <a href=""><i className="fa fa-google-plus"></i></a>
                                                <a href=""><i className="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="member">
                                    <Image 
                                        src="/lechi.jpg" 
                                        alt="Eze Kelechi Joseph"
                                        width={300}
                                        height={300}
                                        className="img-fluid"
                                    />
                                    <div className="member-info">
                                        <div className="member-info-content">
                                            <h4>Eze Kelechi Joseph</h4>
                                            <span>FrontEnd Developer & Systems Engineer</span>
                                            <div className="social">
                                                <a href=""><i className="fa fa-twitter"></i></a>
                                                <a href=""><i className="fa fa-facebook"></i></a>
                                                <a href=""><i className="fa fa-google-plus"></i></a>
                                                <a href=""><i className="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="member">
                                    <Image 
                                        src="/anyanwu.webp" 
                                        alt="Gift Anyanwu"
                                        width={300}
                                        height={300}
                                        className="img-fluid"
                                    />
                                    <div className="member-info">
                                        <div className="member-info-content">
                                            <h4>Gift Anyanwu</h4>
                                            <span>Patient Relations & Community Coordinator</span>
                                            <div className="social">
                                                <a href=""><i className="fa fa-twitter"></i></a>
                                                <a href=""><i className="fa fa-facebook"></i></a>
                                                <a href=""><i className="fa fa-google-plus"></i></a>
                                                <a href=""><i className="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="member">
                                    <Image 
                                        src="/lamide.webp" 
                                        alt="Gbolamide"
                                        width={300}
                                        height={300}
                                        className="img-fluid"
                                    />
                                    <div className="member-info">
                                        <div className="member-info-content">
                                            <h4>Christian Ikechukwu</h4>
                                            <span>UI/UX Designer & Digital Artist</span>
                                            <div className="social">
                                                <a href=""><i className="fa fa-twitter"></i></a>
                                                <a href=""><i className="fa fa-facebook"></i></a>
                                                <a href=""><i className="fa fa-google-plus"></i></a>
                                                <a href=""><i className="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}