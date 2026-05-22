import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import QuickQuoteForm from "@/components/QuickQuoteForm";

export const metadata = {
  title: "Contact Us | Indian Best Packers & Movers",
  description: "Get a free quotation for house shifting, car transport, or warehousing. Visit our Jaipur office, Jhunjhunu office, or Nawalgarh branch.",
  alternates: {
    canonical: "https://www.indianbestpackersmovers.com/contact.html",
  },
};

export default function Contact() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Indian Best Packers & Movers",
    "image": "https://www.indianbestpackersmovers.com/assets/img/logo.png",
    "@id": "https://www.indianbestpackersmovers.com/#localbusiness",
    "url": "https://www.indianbestpackersmovers.com",
    "telephone": "+91 8005746241",
    "email": "info@indianbestpackersmovers.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 31,32, Shri Jagdishpuri, Heerapura, Ajmer Road",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "302021",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.8876,
      "longitude": 75.7618
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us | Indian Best Packers & Movers",
    "description": "Get in touch with Indian Best Packers & Movers for reliable moving and packing services in Jaipur and across India.",
    "url": "https://www.indianbestpackersmovers.com/contact.html"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <Navbar />
      <Breadcrumb title="Contact Us" />

      {/* Contact Cards Section */}
      <section className="space-top">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            {/* Address */}
            <div className="col-md-6 col-lg-4">
              <div className="th-widget-contact info-box" style={{ background: "#f8f9fa", padding: "30px", borderRadius: "10px", height: "100%", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
                <div style={{ display: "flex", gap: "15px" }}>
                  <div className="info-box_icon" style={{ fontSize: "24px", color: "#c4170d" }}>
                    <i className="fas fa-location-dot"></i>
                  </div>
                  <div className="info-contnt">
                    <h4 className="footer-info-title" style={{ fontSize: "20px", fontWeight: "700", marginBottom: "10px" }}>Jaipur Head Office</h4>
                    <p className="info-box_text" style={{ margin: "0", color: "#666" }}>
                      Plot No. 31,32, Shri Jagdishpuri, Heerapura, Ajmer Road, Jaipur - 302021
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Jhunjhunu Branch */}
            <div className="col-md-6 col-lg-4">
              <div className="th-widget-contact info-box" style={{ background: "#f8f9fa", padding: "30px", borderRadius: "10px", height: "100%", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
                <div style={{ display: "flex", gap: "15px" }}>
                  <div className="info-box_icon" style={{ fontSize: "24px", color: "#c4170d" }}>
                    <i className="fas fa-location-dot"></i>
                  </div>
                  <div className="info-contnt">
                    <h4 className="footer-info-title" style={{ fontSize: "20px", fontWeight: "700", marginBottom: "10px" }}>Jhunjhunu Branch</h4>
                    <p className="info-box_text" style={{ margin: "0", color: "#666", marginBottom: "10px" }}>
                      Shop No 12/13, Inderpuri Colony , Loharu Bypass Road Near Tilak School, Pilani District Jhunjhunu Rajasthan 333031
                    </p>
                    <a href="tel:8094243586" className="info-box_link" style={{ color: "#c4170d", fontWeight: "600" }}>
                      <i className="fas fa-phone"></i> +91 8094243586
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Nawalgarh Branch */}
            <div className="col-md-6 col-lg-4">
              <div className="th-widget-contact info-box" style={{ background: "#f8f9fa", padding: "30px", borderRadius: "10px", height: "100%", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
                <div style={{ display: "flex", gap: "15px" }}>
                  <div className="info-box_icon" style={{ fontSize: "24px", color: "#c4170d" }}>
                    <i className="fas fa-location-dot"></i>
                  </div>
                  <div className="info-contnt">
                    <h4 className="footer-info-title" style={{ fontSize: "20px", fontWeight: "700", marginBottom: "10px" }}>Nawalgarh Branch</h4>
                    <p className="info-box_text" style={{ margin: "0", color: "#666", marginBottom: "10px" }}>
                      Shop No 10, Aniket Plaza, Near Canara Bank, Poddar College Rd, Nawalgarh, Rajasthan - 333042
                    </p>
                    <a href="tel:09352637176" className="info-box_link" style={{ color: "#c4170d", fontWeight: "600" }}>
                      <i className="fas fa-phone"></i> +91 9352637176
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row gy-4 justify-content-center mt-30">
            {/* Phones */}
            <div className="col-md-6">
              <div className="th-widget-contact info-box" style={{ background: "#f8f9fa", padding: "30px", borderRadius: "10px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
                <div style={{ display: "flex", gap: "15px" }}>
                  <div className="info-box_icon" style={{ fontSize: "24px", color: "#c4170d" }}>
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="info-contnt">
                    <h4 className="footer-info-title" style={{ fontSize: "20px", fontWeight: "700", marginBottom: "10px" }}>Call Us Anytime</h4>
                    <p className="info-box_text" style={{ margin: "0", color: "#666" }}>
                      <a href="tel:8005746241" style={{ color: "#1f1f1f", marginRight: "15px" }}>+91 8005746241</a>
                      <a href="tel:8094273586" style={{ color: "#1f1f1f" }}>+91 8094273586</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="col-md-6">
              <div className="th-widget-contact info-box" style={{ background: "#f8f9fa", padding: "30px", borderRadius: "10px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
                <div style={{ display: "flex", gap: "15px" }}>
                  <div className="info-box_icon" style={{ fontSize: "24px", color: "#c4170d" }}>
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="info-contnt">
                    <h4 className="footer-info-title" style={{ fontSize: "20px", fontWeight: "700", marginBottom: "10px" }}>Email Address</h4>
                    <p className="info-box_text" style={{ margin: "0", color: "#666" }}>
                      <a href="mailto:info@indianbestpackersmovers.com" style={{ color: "#1f1f1f" }}>info@indianbestpackersmovers.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form and Map Section */}
      <section className="space">
        <div className="container">
          <div className="row gy-40">
            <div className="col-lg-6">
              <div className="title-area mb-4">
                <span className="sub-title before-none">Get In Touch</span>
                <h2 className="sec-title">Have any questions? Write us a message!</h2>
              </div>
              <QuickQuoteForm isContactPage={true} />
            </div>
            <div className="col-lg-6">
              <div style={{ borderRadius: "10px", overflow: "hidden", height: "450px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.118933391783!2d75.72620717618258!3d26.899738076654877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db48eb3a68297%3A0xe54e6067b5e40ee8!2sIndian%20Best%20Packers%20%26%20Movers%20Jaipur!5e0!3m2!1sen!2sin!4v1716382000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
