'use client'; // Add this at the top

import React, { Component } from 'react'

export default class Portfolio extends Component {
    render() {
        return (
            <div>
                                 <main id="main">
                <section id="portfolio" class="section-bg">
      <div class="container">

        <header class="section-header">
          <h3 class="section-title">Our Portfolio</h3>
        </header>

        <div class="row">
          <div class="col-lg-12">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">Web</li>
              <li data-filter=".filter-card">Graphic</li>
              <li data-filter=".filter-web">Video edited</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container">

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="/app1.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4><a href="#">App 1</a></h4>
                <p>App</p>
                <div>
                  <a href="/app1.jpg" data-lightbox="portfolio" data-title="App 1" class="link-preview" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.1s">
            <div class="portfolio-wrap">
              <img src="/web3.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4><a href="#">Web 3</a></h4>
                <p>Web</p>
                <div>
                  <a href="/web3.jpg" class="link-preview" data-lightbox="portfolio" data-title="Web 3" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <img src="/app2.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4><a href="#">App 2</a></h4>
                <p>App</p>
                <div>
                  <a href="/app2.jpg" class="link-preview" data-lightbox="portfolio" data-title="App 2" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="/card2.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4><a href="#">Card 2</a></h4>
                <p>Card</p>
                <div>
                  <a href="/card2.jpg" class="link-preview" data-lightbox="portfolio" data-title="Card 2" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.1s">
            <div class="portfolio-wrap">
              <img src="/web2.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4><a href="#">Web 2</a></h4>
                <p>Web</p>
                <div>
                  <a href="/web2.jpg" class="link-preview" data-lightbox="portfolio" data-title="Web 2" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <img src="/app3.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4><a href="#">App 3</a></h4>
                <p>App</p>
                <div>
                  <a href="/app3.jpg" class="link-preview" data-lightbox="portfolio" data-title="App 3" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="/card1.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4><a href="#">Card 1</a></h4>
                <p>Card</p>
                <div>
                  <a href="/card1.jpg" class="link-preview" data-lightbox="portfolio" data-title="Card 1" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card" data-wow-delay="0.1s">
            <div class="portfolio-wrap">
              <img src="/card3.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4><a href="#">Card 3</a></h4>
                <p>Card</p>
                <div>
                  <a href="/card3.jpg" class="link-preview" data-lightbox="portfolio" data-title="Card 3" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <img src="/web1.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4><a href="#">Web 1</a></h4>
                <p>Web</p>
                <div>
                  <a href="assets/img/portfolio/web1.jpg" class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    </main>



                                    {/* <div id="portfolio">

<div class="container">
    <div class="row">
        <div class="col-md-12 text-center">
            <h2 class="wow bounce">Recent Projects</h2>
            <div class="iso-section wow fadeIn" data-wow-delay="0.6s">

                <ul class="filter-wrapper clearfix">
                    <li><a href="#" data-filter="*" style={{color:"blue"}} class="selected opc-main-bg">All</a></li>
                    <li><a href="#" class="opc-main-bg" style={{color:"blue"}} data-filter=".web">Web</a></li>
                    <li><a href="#" class="opc-main-bg"style={{color:"blue"}}  data-filter=".graphic">Graphic</a></li>
                    <li><a href="#" class="opc-main-bg"style={{color:"blue"}}  data-filter=".wallpaper">Wallpaper</a></li>
                </ul>

                <div class="iso-box-section">
                    <div class="iso-box-wrapper col4-iso-box">




<div class="iso-box web col-md-4 col-sm-6 col-xs-12">
                            <div class="portfolio-thumb">
                                <img src="assets/images/yu4.png" class="fluid-img wow fadeInUp" data-wow-delay="1s" alt="portfolio img"/>
                                <div class="portfolio-overlay">
            <a href="https://uicstore.herokuapp.com" class="fa fa-search"></a>
            <a href="https://uicstore.herokuapp.com" class="fa fa-link"></a>
            <h4>E-Commerce Webapp</h4>
            <p>Online Store</p>
        </div>
                            </div>
                        </div>
                        <div class="iso-box web col-md-4 col-sm-6 col-xs-12">
                            <div class="portfolio-thumb">
                                <img src="assets/images/yu5.png" class="fluid-img wow fadeInDown" data-wow-delay="1s"alt="portfolio img"/>
                                <div class="portfolio-overlay">
            <a href="https://stark-spire-74770.herokuapp.com" class="fa fa-search"></a>
            <a href="https://stark-spire-74770.herokuapp.com" class="fa fa-link"></a>
            <h4>Bakery Website</h4>
            <p>Static and responsive Website</p>
        </div>
                            </div>
                        </div> <div class="iso-box web col-md-4 col-sm-6 col-xs-12">
                            <div class="portfolio-thumb">
                                <img src="assets/images/yu.png" class="fluid-img wow fadeIn" data-wow-delay="1s" alt="portfolio img"/>
                                <div class="portfolio-overlay">
            <a href="https://uicexamportal.herokuapp.com" class="fa fa-search"></a>
            <a href="https://uicexamportal.herokuapp.com" class="fa fa-link"></a>
            <h4>Examination Portal</h4>
            <p>Online Exam Portal</p>
        </div>
                            </div>
                        </div> <div class="iso-box graphic photoshop wallpaper col-md-4 col-sm-6 col-xs-12">
                            <div class="portfolio-thumb">
                                <img src="assets/images/portfolio-img1.jpg" class="fluid-img wow fadeInUp" data-wow-delay="1s" alt="portfolio img"/>
                                <div class="portfolio-overlay">
                                    <a href="#" class="fa fa-search"></a>
                                    <a href="#" class="fa fa-link"></a>
                                    <h4>Graphic</h4>
                                    <p>Picture with nice graphic</p>
                                </div>
                            </div>
                        </div>

                        <div class="iso-box graphic wallpaper col-md-4 col-sm-6 col-xs-12">
                            <div class="portfolio-thumb">
                                <img src="assets/images/portfolio-img2.jpg" class="fluid-img wow fadeInDown" data-wow-delay="1s" alt="portfolio img"/>
                                <div class="portfolio-overlay">
                                    <a href="#" class="fa fa-search"></a>
                                    <a href="#" class="fa fa-link"></a>
                                    <h4>Graphic</h4>
                                    <p>Picture with nice graphic</p>
                                </div>
                            </div>
                        </div>

                        <div class="iso-box wallpaper col-md-4 col-sm-6 col-xs-12">
                            <div class="portfolio-thumb">
                                <img src="assets/images/portfolio-img3.jpg" class="fluid-img wow fadeIn" data-wow-delay="1s" alt="portfolio img"/>
                                <div class="portfolio-overlay">
                                    <a href="#" class="fa fa-search"></a>
                                    <a href="#" class="fa fa-link"></a>
                                    <h4>Graphic</h4>
                                    <p>Picture with nice graphic</p>
                                </div>
                            </div>
                        </div>

                        <div class="iso-box graphic col-md-4 col-sm-6 col-xs-12">
                            <div class="portfolio-thumb">
                                <img src="assets/images/portfolio-img4.jpg" class="fluid-img wow fadeInUp" data-wow-delay="1s" alt="portfolio img"/>
                                <div class="portfolio-overlay">
                                    <a href="#" class="fa fa-search"></a>
                                    <a href="#" class="fa fa-link"></a>
                                    <h4>Graphic</h4>
                                    <p>Picture with nice graphic</p>
                                </div>
                            </div>
                        </div>

                        <div class="iso-box wallpaper col-md-4 col-sm-6 col-xs-12">
                            <div class="portfolio-thumb">
                                <img src="assets/images/portfolio-img5.jpg" class="fluid-img wow fadeInDown" data-wow-delay="1s" alt="portfolio img"/>
                                <div class="portfolio-overlay">
                                    <a href="#" class="fa fa-search"></a>
                                    <a href="#" class="fa fa-link"></a>
                                    <h4>Graphic</h4>
                                    <p>Picture with nice graphic</p>
                                </div>
                            </div>
                        </div>

                        <div class="iso-box graphic photoshop col-md-4 col-sm-6 col-xs-12">
                            <div class="portfolio-thumb">
                                <img src="assets/images/portfolio-img6.jpg" class="fluid-img wow fadeIn" data-wow-delay="1s" alt="portfolio img"/>
                                <div class="portfolio-overlay">
                                    <a href="#" class="fa fa-search"></a>
                                    <a href="#" class="fa fa-link"></a>
                                    <h4>Graphic</h4>
                                    <p>Picture with nice graphic</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
</div> */}
            </div>
        )
    }
}
