'use client'; // Add this at the top

import React, { Component } from 'react'

export default class Pricing extends Component {
    render() {
        return (
            <div>

<section id="pricing" class="wow fadeInUp section-bg">
<div class="container">

  <header class="section-header">
    <h3>Service Packages</h3>
    <p>Transparent, affordable pricing for life-changing prosthetic and assistive technology solutions</p>
  </header>

  <div class="row flex-items-xs-middle flex-items-xs-center">

  
    <div class="col-xs-12 col-lg-4">
      <div class="card">
        <div class="card-header">
          <h3><span class="currency">$</span>500<span class="period">/device</span></h3>
        </div>
        <div class="card-block">
          <h4 class="card-title"> 
            Essential Mobility
          </h4>
          <ul class="list-group">
            <li class="list-group-item">Basic custom prosthetic device</li>
            <li class="list-group-item">3D scanning & digital fitting</li>
            <li class="list-group-item">Durable standard materials</li>
            <li class="list-group-item">2 fitting sessions</li>
            <li class="list-group-item">6-month warranty</li>
          </ul>
          <a href="#" class="btn">Get Started</a>
        </div>
      </div>
    </div>

  
    <div class="col-xs-12 col-lg-4">
      <div class="card">
        <div class="card-header">
          <h3><span class="currency">$</span>800<span class="period">/device</span></h3>
        </div>
        <div class="card-block">
          <h4 class="card-title"> 
            Advanced Performance
          </h4>
          <ul class="list-group">
            <li class="list-group-item">Enhanced mobility prosthetic</li>
            <li class="list-group-item">Lightweight composite materials</li>
            <li class="list-group-item">4 fitting & adjustment sessions</li>
            <li class="list-group-item">Basic activity customization</li>
            <li class="list-group-item">1-year comprehensive warranty</li>
          </ul>
          <a href="#" class="btn">Choose Plan</a>
        </div>
      </div>
    </div>


    <div class="col-xs-12 col-lg-4">
      <div class="card">
        <div class="card-header">
          <h3><span class="currency">$</span>1,500<span class="period">/device</span></h3>
        </div>
        <div class="card-block">
          <h4 class="card-title"> 
            Premium Custom
          </h4>
          <ul class="list-group">
            <li class="list-group-item">High-performance prosthetic system</li>
            <li class="list-group-item">Advanced sensor technology</li>
            <li class="list-group-item">Unlimited fittings for 3 months</li>
            <li class="list-group-item">Sports & specialized activity setup</li>
            <li class="list-group-item">2-year warranty + priority support</li>
          </ul>
          <a href="#" class="btn">Choose Plan</a>
        </div>
      </div>
    </div>

  </div>

  <div class="text-center mt-5">
    <p class="text-muted">* Insurance coordination available • Payment plans offered • Pediatric and specialized solutions priced individually</p>
    <p class="text-muted">All packages include initial consultation and basic training</p>
  </div>
</div>

</section>
            </div>
        )
    }
}