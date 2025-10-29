'use client'; // Add this at the top

import React, { Component } from 'react'

export default class testimonials extends Component {
    render() {
        return (
            <div>
        <section id="testimonials">
      <div class="container">

        <header class="section-header">
          <h3>Testimonials</h3>
        </header>

        <div class="row justify-content-center">
          <div class="col-lg-8">

            <div class="owl-carousel testimonials-carousel wow fadeInUp">
    
              <div class="testimonial-item">
                <img src="/testimonial-1.jpg" class="testimonial-img" alt=""/>
                <h3>Sarah Johnson</h3>
                <h4>Prosthetic Recipient</h4>
                <p>
                  "After waiting two years for a traditional prosthetic, AccessTech created my custom limb in just three weeks. The 3D scanning made the fitting perfect, and I'm finally able to play with my kids again. This technology gave me my life back."
                </p>
              </div>
    
              <div class="testimonial-item">
                <img src="/testimonial-2.jpg" class="testimonial-img" alt=""/>
                <h3>Michael Chen</h3>
                <h4>Physical Therapist</h4>
                <p>
                  "I've worked with many prosthetic companies, but AccessTech's approach is revolutionary. Their rapid fabrication process and personalized designs have dramatically improved my patients' recovery times and overall quality of life."
                </p>
              </div>
    
              <div class="testimonial-item">
                <img src="/testimonial-3.jpg" class="testimonial-img" alt=""/>
                <h3>David Rodriguez</h3>
                <h4>Accessibility Advocate</h4>
                <p>
                  "As someone who's used prosthetic devices for 15 years, I've never experienced this level of customization and support. The ongoing maintenance and upgrade options ensure my device grows with my changing needs and activity levels."
                </p>
              </div>
    
              <div class="testimonial-item">
                <img src="/testimonial-4.jpg" class="testimonial-img" alt=""/>
                <h3>Dr. Emily Watkins</h3>
                <h4>Rehabilitation Specialist</h4>
                <p>
                  "The adaptive technology solutions from AccessTech have transformed our pediatric clinic. Children who faced years of waiting now receive devices in weeks, allowing them to keep up with developmental milestones and peer activities."
                </p>
              </div>

              <div class="testimonial-item">
                <img src="/testimonial-5.jpg" class="testimonial-img" alt=""/>
                <h3>James Wilson</h3>
                <h4>Prosthetic User & Athlete</h4>
                <p>
                  "From daily activities to competitive sports, my AccessTech prosthetic adapts to everything I do. The lightweight design and personalized fit have eliminated the discomfort I experienced with previous devices. Truly life-changing technology."
                </p>
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