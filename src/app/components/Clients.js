'use client'; // Add this at the top

import React, { Component } from 'react'

export default class Clients extends Component {
    render() {
        return (
            <div>
                 <section id="clients" class="wow fadeInUp">
      <div class="container">

        <header class="section-header">
          <h3>Our Clients</h3>
        </header>

        <div class="owl-carousel clients-carousel" style={{ 
            padding: '20px 0',
            margin: '0 -15px'
        }}>
          <img src="/client-1.png" alt="" style={{ 
              margin: '0 25px',
              padding: '15px',
              maxHeight: '80px',
              width: 'auto'
          }}/>
          <img src="/client-2.png" alt="" style={{ 
              margin: '0 25px',
              padding: '15px',
              maxHeight: '80px',
              width: 'auto'
          }}/>
          <img src="/client-3.png" alt="" style={{ 
              margin: '0 25px',
              padding: '15px',
              maxHeight: '80px',
              width: 'auto'
          }}/>
          <img src="/client-4.png" alt="" style={{ 
              margin: '0 25px',
              padding: '15px',
              maxHeight: '80px',
              width: 'auto'
          }}/>
          <img src="/client-5.png" alt="" style={{ 
              margin: '0 25px',
              padding: '15px',
              maxHeight: '80px',
              width: 'auto'
          }}/>
          <img src="/client-6.png" alt="" style={{ 
              margin: '0 25px',
              padding: '15px',
              maxHeight: '80px',
              width: 'auto'
          }}/>
          <img src="/client-7.png" alt="" style={{ 
              margin: '0 25px',
              padding: '15px',
              maxHeight: '80px',
              width: 'auto'
          }}/>
          <img src="/client-8.png" alt="" style={{ 
              margin: '0 25px',
              padding: '15px',
              maxHeight: '80px',
              width: 'auto'
          }}/>
        </div>

      </div>
    </section>
            </div>
        )
    }
}