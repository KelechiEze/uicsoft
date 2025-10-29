'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
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

    // Add scroll event listener to change header background
    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
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
            <header id="header" className={isScrolled ? 'scrolled' : ''}>
                <div className="container">
                    <div className="header-content">
                       <div className="logo-section">
                            <Link 
                                href="#header" 
                                className="scrollto"
                                onClick={(e) => handleSmoothScroll(e, '#header')}
                                style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
                            >
                                <h1 className="logo-text">
                                    <span style={{ color: '#413e66' }}>UICSOFT</span>
                                </h1>
                                <img src="/newlogo.png" alt="AccessTech Logo" className="img-fluid logo-img"/>
                            </Link>
                        </div>

                        <nav className="main-nav">
                            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center' }}>
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
                </div>
            </header>
            
            <section id="intro" className="clearfix">
                <div className="container d-flex h-100">
                    <div className="row justify-content-center align-self-center">
                        <div className="col-md-6 intro-info order-md-first order-last">
                            <h2>Unified Innovation<br/>&<span> Communication Software</span></h2>
                            <p>Empowering Mobility
Through Innovative Technology</p>
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
                #header {
                    transition: all 0.3s ease;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    background: transparent;
                    padding: 15px 0;
                }

                #header.scrolled {
                    background: white;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    padding: 10px 0;
                }

                .header-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .logo-section {
                    display: flex;
                    align-items: center;
                }

                .logo-img {
                    height: 50px;
                    margin-right: 15px;
                }

                .logo-text {
                    margin: 0;
                    font-size: 2.27rem;
                    font-weight: thin;
                    color: #413e66 !important;
                }

                /* UICSOFT text styles - visible in both states */
                .logo-text span {
                    color: white;
                    transition: color 0.3s ease;
                }

                #header.scrolled .logo-text span {
                    color: #333 !important;
                }

                .main-nav ul {
                    display: flex;
                    align-items: center;
                    gap: 25px;
                }

                .main-nav ul li {
                    margin: 0;
                }

                /* Navigation link styles */
                .main-nav ul li a {
                    text-decoration: none;
                    color: white;
                    font-weight: 500;
                    transition: color 0.3s ease;
                    padding: 8px 0;
                    position: relative;
                }

                .main-nav ul li a:hover {
                    color: #007bff;
                }

                /* When scrolled - change nav link colors */
                #header.scrolled .main-nav ul li a {
                    color: #333;
                }

                #header.scrolled .main-nav ul li a:hover {
                    color: #007bff;
                }

                .main-nav ul li a::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: #007bff;
                    transition: width 0.3s ease;
                }

                .main-nav ul li a:hover::after {
                    width: 100%;
                }

                @media (max-width: 991px) {
                    .main-nav {
                        display: none;
                    }

                    .header-content {
                        justify-content: center;
                    }
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

                /* Remove the topbar completely */
                #topbar {
                    display: none;
                }
            `}</style>
        </div>
    )
}