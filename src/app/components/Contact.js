import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <div id="contact">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-3 col-sm-4 wow fadeInLeft" data-wow-delay="0.6s">
                                    <h2><strong>Uic Soft</strong> Co.</h2>
                                    <p>We provide quality service</p>
                                    <ul class="social-icon">
                                    <li><a href="https://www.facebook.com/ugwu.isaac.5" class="wow fadeInUp fa fa-facebook" data-wow-delay="2s"></a></li>
                                        <li><a href="https://github.com/Pchib" class="wow fadeInDown fa fa-github" data-wow-delay="2s"></a></li>
                                        <li><a  href="https://www.instagram.com/ugwu.chi"class="wow fadeIn fa fa-instagram" data-wow-delay="2s"></a></li>
                                        <li><a href="https://www.linkedin.com/in/isaac-ugwu-2b6355193" class="wow fadeInUp fa fa-linkedin" data-wow-delay="2s"></a></li>
                                  
                                    </ul>
                                </div>
                                <div class="col-md-3 col-sm-4 wow fadeIn" data-wow-delay="0.9s">
                                    <address>
                                        <h3>Visit Office</h3>
                                        <p><i class="fa fa-map-marker too-icon wow fadeInUp" data-wow-delay="1s"></i> Freedom Court , Apapa Lagos</p>
                                        <p><i class="fa fa-phone too-icon wow fadeInDown" data-wow-delay="1s"></i> 2348160880412</p>
                                        <p><i class="fa fa-envelope-o too-icon wow fadeInUp" data-wow-delay="1s"></i>uicsoft1@gmail.com</p>
                                    </address>
                                </div>
                                <form action="#" method="post" class="col-md-6 col-sm-4" id="contact-form" role="form">
                                    <div class="col-md-6 col-sm-12 wow fadeIn" data-wow-delay="0.3s">
                                        <input name="name" type="text" class="form-control" id="name" placeholder="Name"/>
                                    </div>
                                    <div class="col-md-6 col-sm-12 wow fadeIn" data-wow-delay="0.3s">
                                        <input name="email" type="email" class="form-control" id="email" placeholder="Email"/>
                                    </div>
                                    <div class="col-md-12 col-sm-12 wow fadeIn" data-wow-delay="0.9s">
                                        <textarea name="message" rows="5" class="form-control" id="message"
                                            placeholder="Message"></textarea>
                                    </div>
                                    <div class="col-md-offset-9 col-md-3 col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                                        <input name="submit" type="submit" class="form-control" id="submit" value="Send"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
