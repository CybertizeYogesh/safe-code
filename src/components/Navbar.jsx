"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const toggleServices = (e) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about.html" },
    {
      name: "Our Service",
      path: "#",
      subItems: [
        { name: "House Shifting", path: "/house.html" },
        { name: "Land Transport", path: "/transport.html" },
        { name: "Packing Services", path: "/packing.html" },
        { name: "Domestic Relocation", path: "/domestic.html" },
        { name: "Car Transportation", path: "/car.html" },
        { name: "Warehousing Services", path: "/warehousing.html" },
        { name: "Office Moving Services", path: "/office.html" },
        { name: "Air Cargo", path: "/air.html" },
        { name: "Sea Freight Cargo", path: "/sea.html" },
      ],
    },
    { name: "Branches", path: "/branches.html" },
    { name: "Gallery", path: "/gallery.html" },
    { name: "Faq's", path: "/faq.html" },
    { name: "Contact", path: "/contact.html" },
    { name: "Payment", path: "/payment.html" },
  ];

  return (
    <>
      {/* Mobile Menu Wrapper */}
      <div className={`th-menu-wrapper ${isMobileMenuOpen ? "th-body-visible" : ""}`} onClick={closeMobileMenu}>
        <div className="th-menu-area text-center" onClick={(e) => e.stopPropagation()}>
          <button className="th-menu-toggle" onClick={closeMobileMenu} aria-label="Close Mobile Menu">
            <i className="fal fa-times"></i>
          </button>
          <div className="mobile-logo">
            <Link href="/" onClick={closeMobileMenu}>
              <img
                src="/assets/img/logo.png"
                alt="Indian Best Packers and Movers Logo"
                width="160"
                height="52"
                loading="lazy"
              />
            </Link>
          </div>
          <div className="th-mobile-menu">
            <ul>
              {navLinks.map((link, idx) => {
                if (link.subItems) {
                  return (
                    <li key={idx} className={`menu-item-has-children ${isServicesOpen ? "th-active" : ""}`}>
                      <a href="#" onClick={toggleServices}>
                        {link.name}
                      </a>
                      <ul className="sub-menu" style={{ display: isServicesOpen ? "block" : "none" }}>
                        {link.subItems.map((sub, subIdx) => (
                          <li key={subIdx}>
                            <Link href={sub.path} onClick={closeMobileMenu}>
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }
                return (
                  <li key={idx}>
                    <Link href={link.path} onClick={closeMobileMenu}>
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="th-header header-default">
        {/* Top Header Contact Bar */}
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
              <div className="col-auto mainheader d-lg-block">
                <div className="header-links">
                  <ul>
                    <li className="hphone">
                      <i className="fa-regular fa-phone"></i>{" "}
                      <a href="tel:8005746241">+91 8005746241</a> / <a href="tel:8094273586">8094273586</a>
                    </li>
                    <li className="hmail">
                      <i className="fa-sharp fa-regular fa-envelope"></i>{" "}
                      <a href="mailto:info@indianbestpackersmovers.com">info@indianbestpackersmovers.com</a>
                    </li>
                    <li className="gstno">
                      <b>GSTIN : </b>08BXTPS9821C1ZV
                    </li>
                    <li className="panno">
                      <b>PAN NO : </b>BXTPS9821C
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto socialheader">
                <div className="header-links">
                  <ul>
                    <li>
                      <div className="social-links">
                        <a href="https://www.facebook.com/indianbestpackers" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                          <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/indianbestpackersinjaipur/?igsh=cm81OThqZmZqanY5" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/authwall?trk=bf&amp;trkInfo=AQHv0yheWL0pVgAAAY2NtlfQIxAvMxotlDAJWRG8K9LjLDWfzi_8uYx_pIbn7L2upstBJvnGE780XlOfXXcHLBpADEDKVHI-qg6K_5nRnKcSoiuQVYaqFSMFuXEVG2cC61N4E34=&amp;original_referer=&amp;sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Findian-best-packers-and-movers-jaipur-4b002b219%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                          <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://youtube.com/@packersandmoversinjaipur9686?si=yUEdf5y6mY6eWQv7" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                          <i className="fab fa-youtube"></i>
                        </a>
                        <a href="https://x.com/Pramod67075947?t=vztkl5zRL_5T9rd6a3XPlQ&s=09" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Wrapper */}
        <div className={`sticky-wrapper ${isSticky ? "sticky" : ""}`}>
          <div className="menu-area">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <Link href="/">
                      <img
                        src="/assets/img/logo.png"
                        alt="Indian Best Packers and Movers Logo"
                        width="160"
                        height="52"
                        loading="lazy"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      {navLinks.map((link, idx) => {
                        if (link.subItems) {
                          return (
                            <li key={idx} className="menu-item-has-children">
                              <a href="#">{link.name}</a>
                              <ul className="sub-menu">
                                {link.subItems.map((sub, subIdx) => (
                                  <li key={subIdx}>
                                    <Link href={sub.path}>{sub.name}</Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          );
                        }
                        const isActive = pathname === link.path || pathname === link.path.replace(".html", "");
                        return (
                          <li key={idx} className={isActive ? "active" : ""}>
                            <Link href={link.path}>
                              {link.name === "Home" ? (
                                <>
                                  <i className="fa fa-home"></i> Home
                                </>
                              ) : link.name === "Payment" ? (
                                <b>{link.name}</b>
                              ) : (
                                link.name
                              )}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                  <button type="button" className="th-menu-toggle d-block d-lg-none" onClick={toggleMobileMenu} aria-label="Open Mobile Menu">
                    <i className="far fa-bars"></i>
                  </button>
                </div>
                <div className="col-auto d-none d-xl-block">
                  <div className="header-button">
                    <Link href="/contact.html" className="th-btn star-btn bg-theme2 text-title shadow-none">
                      Get A Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
