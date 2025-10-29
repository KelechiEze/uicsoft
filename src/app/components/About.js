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
                                    <img src="/about-img.png" alt="About UicSoft" />
                                </div>
                            </div>
                            
                            <div className="col-lg-7 col-md-6">
                                <div className="about-content wow fadeInLeft">
                                    <h2>About UicSoft</h2>
                                    <h3></h3>
                                    <p>UicSoft offers a professional tech Service to businesses. We will listen and talk through all of your ideas, starting with the 'dream idea' and working out what is affordable and achievable to suit your budget. If you are a new business just starting out, then we can help you achieve your new identity, whatever your budget. Let us help you SHINE in the busy marketplace. </p>
                                    <ul>
                                        <li><i className="ion-android-checkmark-circle"></i> Smart, Light and Adaptive.</li>
                                        <li><i className="ion-android-checkmark-circle"></i> Stand out –We have unique Design.</li>
                                        <li><i className="ion-android-checkmark-circle"></i> More efficient – Outstanding webapp and android apps that makes your business standout.</li>
                                    </ul>
                                    
                                    <span className="text-top">Web Development <small>100%</small></span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60"
                                            aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}></div>
                                    </div>
                                    
                                    <span>Graphic Design <small>95%</small></span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80"
                                            aria-valuemin="0" aria-valuemax="100" style={{width: '95%'}}></div>
                                    </div>
                                    
                                    <span>Video Editing <small>90%</small></span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80"
                                            aria-valuemin="0" aria-valuemax="100" style={{width: '90%'}}></div>
                                    </div>
                                    
                                    <span>WordPress/Woo-commerce and Joomla <small>80%</small></span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80"
                                            aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}></div>
                                    </div>
                                    
                                    <span>Search Engine Marketing <small>90%</small></span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="90"
                                            aria-valuemin="0" aria-valuemax="100" style={{width: '90%'}}></div>
                                    </div>
                                    
                                    <span>Custom Branding <small>80%</small></span>
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