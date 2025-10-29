'use client'; // Add this at the top

import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-6">
                                <div className="about-img wow fadeInRight animated animated">
                                    {/* Replace with Next.js Image component if needed */}
                                    <img src="/about-img.png" alt="About AccessTech Solutions" />
                                </div>
                            </div>
                            
                            <div className="col-lg-7 col-md-6">
                                <div className="about-content wow fadeInLeft">
                                    <h2>About AccessTech Solutions</h2>
                                    <h3>Empowering Through Innovation</h3>
                                    <p>AccessTech Solutions is dedicated to transforming lives through cutting-edge assistive technology. We bridge the gap between medical need and technological innovation, creating customized prosthetic and mobility solutions that restore independence and dignity. Starting with your unique requirements, we work collaboratively to develop affordable, achievable solutions that fit your lifestyle and budget. Whether you're seeking your first prosthetic device or looking to upgrade existing technology, we're here to help you regain mobility and confidence in daily life.</p>
                                    <ul>
                                        <li><i className="ion-android-checkmark-circle"></i> Smart, Light and Adaptive prosthetic designs</li>
                                        <li><i className="ion-android-checkmark-circle"></i> Personalized – Every solution is tailored to individual needs and abilities</li>
                                        <li><i className="ion-android-checkmark-circle"></i> More efficient – Advanced technology that enhances mobility and independence</li>
                                    </ul>
                                    
                                    <span className="text-top">Prosthetic Design & Fabrication <small>100%</small></span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60"
                                            aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}></div>
                                    </div>
                                    
                                    <span>3D Scanning & Modeling <small>95%</small></span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80"
                                            aria-valuemin="0" aria-valuemax="100" style={{width: '95%'}}></div>
                                    </div>
                                    
                                    <span>Custom Device Fitting <small>90%</small></span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80"
                                            aria-valuemin="0" aria-valuemax="100" style={{width: '90%'}}></div>
                                    </div>
                                    
                                    <span>Adaptive Technology Development <small>85%</small></span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80"
                                            aria-valuemin="0" aria-valuemax="100" style={{width: '85%'}}></div>
                                    </div>
                                    
                                    <span>Patient Training & Support <small>90%</small></span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="90"
                                            aria-valuemin="0" aria-valuemax="100" style={{width: '90%'}}></div>
                                    </div>
                                    
                                    <span>Ongoing Device Maintenance <small>80%</small></span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80"
                                            aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}></div>
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