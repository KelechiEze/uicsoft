'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            setIsDropdownOpen(false); // Close dropdown after click
        }
    };

    return (
        <div className="">
            <header id="header">
                <div id="topbar">
                    <div className="container">
                        <div className="social-links">
                            <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                            <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                            <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
                            <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="logo float-left">
                        <h1 className="text-light">
                            <Link 
                                href="#intro" 
                                className="scrollto no-underline"
                                onClick={(e) => handleSmoothScroll(e, '#intro')}
                            >
                                <span>UicSoft</span>
                            </Link>
                        </h1>
                        <Link 
                            href="#header" 
                            className="scrollto no-underline"
                            onClick={(e) => handleSmoothScroll(e, '#header')}
                        >
                            <img src="/logo.png" alt="UicSoft Logo" className="img-fluid"/>
                        </Link>
                    </div>

                    <nav className="main-nav float-right d-none d-lg-block">
                        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                            <li className="active">
                                <Link 
                                    href="#intro" 
                                    className="no-underline"
                                    onClick={(e) => handleSmoothScroll(e, '#intro')}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="#about" 
                                    className="no-underline"
                                    onClick={(e) => handleSmoothScroll(e, '#about')}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="#services" 
                                    className="no-underline"
                                    onClick={(e) => handleSmoothScroll(e, '#services')}
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="#portfolio" 
                                    className="no-underline"
                                    onClick={(e) => handleSmoothScroll(e, '#portfolio')}
                                >
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="#team" 
                                    className="no-underline"
                                    onClick={(e) => handleSmoothScroll(e, '#team')}
                                >
                                    Team
                                </Link>
                            </li>
                            <li className="drop-down" ref={dropdownRef}>
                                <button 
                                    className="dropdown-toggle no-underline"
                                    onClick={toggleDropdown}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        color: 'inherit',
                                        cursor: 'pointer',
                                        fontSize: 'inherit',
                                        fontFamily: 'inherit'
                                    }}
                                >
                                    Join ▼
                                </button>
                                <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} 
                                    style={{
                                        display: isDropdownOpen ? 'block' : 'none',
                                        position: 'absolute',
                                        backgroundColor: 'white',
                                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                        borderRadius: '4px',
                                        padding: '10px 0',
                                        minWidth: '200px',
                                        zIndex: 1000
                                    }}>
                                    <li>
                                        <Link 
                                            href="#pricing" 
                                            className="no-underline dropdown-item"
                                            onClick={(e) => handleSmoothScroll(e, '#pricing')}
                                            style={{ display: 'block', padding: '8px 20px', color: '#333', textDecoration: 'none' }}
                                        >
                                            Pricing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            href="#testimonials" 
                                            className="no-underline dropdown-item"
                                            onClick={(e) => handleSmoothScroll(e, '#testimonials')}
                                            style={{ display: 'block', padding: '8px 20px', color: '#333', textDecoration: 'none' }}
                                        >
                                            Testimonial
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            href="#clients" 
                                            className="no-underline dropdown-item"
                                            onClick={(e) => handleSmoothScroll(e, '#clients')}
                                            style={{ display: 'block', padding: '8px 20px', color: '#333', textDecoration: 'none' }}
                                        >
                                            Clients
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            href="#faq" 
                                            className="no-underline dropdown-item"
                                            onClick={(e) => handleSmoothScroll(e, '#faq')}
                                            style={{ display: 'block', padding: '8px 20px', color: '#333', textDecoration: 'none' }}
                                        >
                                            Frequently Asked Question
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link 
                                    href="#footers" 
                                    className="no-underline"
                                    onClick={(e) => handleSmoothScroll(e, '#footers')}
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            
            <section id="intro" className="clearfix">
                <div className="container d-flex h-100">
                    <div className="row justify-content-center align-self-center">
                        <div className="col-md-6 intro-info order-md-first order-last">
                            <h2>Unified Innovation<br/> and Communication <span>Software!</span></h2>
                            <div>
                                <Link 
                                    href="#about" 
                                    className="btn-get-started scrollto no-underline"
                                    onClick={(e) => handleSmoothScroll(e, '#about')}
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                        
                        <div className="col-md-6 intro-img order-md-last order-first">
                            <img src="/intro-img.svg" alt="Intro Illustration" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </section>

            <main id="main"/>

            <style jsx>{`
                .no-underline {
                    text-decoration: none !important;
                }
                
                .no-underline:hover {
                    text-decoration: none !important;
                }
                
                .main-nav ul li {
                    display: inline-block;
                    margin-left: 20px;
                    position: relative;
                }
                
                .main-nav ul li a, .main-nav ul li button {
                    text-decoration: none;
                    color: inherit;
                    transition: color 0.3s ease;
                }
                
                .main-nav ul li a:hover, .main-nav ul li button:hover {
                    color: #007bff;
                    text-decoration: none;
                }
                
                .dropdown-menu {
                    transition: all 0.3s ease;
                }
                
                .dropdown-menu.show {
                    display: block !important;
                }
                
                .dropdown-item:hover {
                    background-color: #f8f9fa;
                    text-decoration: none !important;
                }
                
                .btn-get-started {
                    text-decoration: none !important;
                }
            `}</style>
        </div>
    )
}