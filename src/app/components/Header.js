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
                            <a href="#" className="twitter" style={{ textDecoration: 'none' }}><i className="fa fa-twitter"></i></a>
                            <a href="#" className="facebook" style={{ textDecoration: 'none' }}><i className="fa fa-facebook"></i></a>
                            <a href="#" className="linkedin" style={{ textDecoration: 'none' }}><i className="fa fa-linkedin"></i></a>
                            <a href="#" className="instagram" style={{ textDecoration: 'none' }}><i className="fa fa-instagram"></i></a>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="logo float-left">
                        <h1 className="text-light">
                            <Link 
                                href="#intro" 
                                className="scrollto"
                                onClick={(e) => handleSmoothScroll(e, '#intro')}
                                style={{ textDecoration: 'none' }}
                            >
                                <span>AccessTech</span>
                            </Link>
                        </h1>
                        <Link 
                            href="#header" 
                            className="scrollto"
                            onClick={(e) => handleSmoothScroll(e, '#header')}
                            style={{ textDecoration: 'none' }}
                        >
                            <img src="/logo.png" alt="AccessTech Logo" className="img-fluid"/>
                        </Link>
                    </div>

                    <nav className="main-nav float-right d-none d-lg-block">
                        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                            <li className="active">
                                <Link 
                                    href="#intro" 
                                    onClick={(e) => handleSmoothScroll(e, '#intro')}
                                    style={{ textDecoration: 'none' }}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="#about" 
                                    onClick={(e) => handleSmoothScroll(e, '#about')}
                                    style={{ textDecoration: 'none' }}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="#services" 
                                    onClick={(e) => handleSmoothScroll(e, '#services')}
                                    style={{ textDecoration: 'none' }}
                                >
                                    Our Solutions
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="#portfolio" 
                                    onClick={(e) => handleSmoothScroll(e, '#portfolio')}
                                    style={{ textDecoration: 'none' }}
                                >
                                    Success Stories
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="#team" 
                                    onClick={(e) => handleSmoothScroll(e, '#team')}
                                    style={{ textDecoration: 'none' }}
                                >
                                    Our Team
                                </Link>
                            </li>
                            {/*<li className="drop-down" ref={dropdownRef}>
                                <button 
                                    className="dropdown-toggle"
                                    onClick={toggleDropdown}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        color: 'inherit',
                                        cursor: 'pointer',
                                        fontSize: 'inherit',
                                        fontFamily: 'inherit',
                                        textDecoration: 'none'
                                    }}
                                >
                                    More ▼
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
                                            className="dropdown-item"
                                            onClick={(e) => handleSmoothScroll(e, '#pricing')}
                                            style={{ display: 'block', padding: '8px 20px', color: '#333', textDecoration: 'none' }}
                                        >
                                            Service Packages
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            href="#testimonials" 
                                            className="dropdown-item"
                                            onClick={(e) => handleSmoothScroll(e, '#testimonials')}
                                            style={{ display: 'block', padding: '8px 20px', color: '#333', textDecoration: 'none' }}
                                        >
                                            Testimonials
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            href="#clients" 
                                            className="dropdown-item"
                                            onClick={(e) => handleSmoothScroll(e, '#clients')}
                                            style={{ display: 'block', padding: '8px 20px', color: '#333', textDecoration: 'none' }}
                                        >
                                            Partners
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            href="#faq" 
                                            className="dropdown-item"
                                            onClick={(e) => handleSmoothScroll(e, '#faq')}
                                            style={{ display: 'block', padding: '8px 20px', color: '#333', textDecoration: 'none' }}
                                        >
                                            FAQ
                                        </Link>
                                    </li>
                                </ul>
                            </li>*/}
                            <li>
                                <Link 
                                    href="#footers" 
                                    onClick={(e) => handleSmoothScroll(e, '#footers')}
                                    style={{ textDecoration: 'none' }}
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
                            <h2>Empowering Mobility<br/>Through <span>Innovative Technology</span></h2>
                            <div>
                                <Link 
                                    href="#about" 
                                    className="btn-get-started scrollto"
                                    onClick={(e) => handleSmoothScroll(e, '#about')}
                                    style={{ textDecoration: 'none' }}
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