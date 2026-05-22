import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { locationsList } from "@/data/locations";
import { notFound } from "next/navigation";

const QuickQuoteForm = dynamic(() => import("@/components/QuickQuoteForm"), { ssr: true });
const FAQAccordion = dynamic(() => import("@/components/FAQAccordion"), { ssr: true });

export async function generateStaticParams() {
  return locationsList.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const location = locationsList.find((loc) => loc.slug === slug);

  if (!location) {
    return {
      title: "Page Not Found",
    };
  }

  const isVehicle = location.type === "vehicle";
  const title = isVehicle
    ? `${location.name} | Safe Vehicle Shifting Services`
    : `Packers and Movers in ${location.name} | Best Charges`;
  const description = isVehicle
    ? `Hire professional vehicle shifting carriers for ${location.name}. Safe loading, reliable transport trailers, and on-time car or bike shipping.`
    : `Best Packers and Movers in ${location.name}. Highly rated household shifting, office moving, and local relocation services at affordable rates.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.indianbestpackersmovers.com/${slug}.html`,
    },
  };
}

export default async function LocationPage({ params }) {
  const { slug } = await params;
  const location = locationsList.find((loc) => loc.slug === slug);

  if (!location) {
    notFound();
  }

  const isVehicle = location.type === "vehicle";
  const displayName = location.name;

  const faqs = [
    {
      question: `What are the average packers and movers charges in ${displayName}?`,
      answer: `The shifting charges in ${displayName} depend on several factors, including the volume of goods, packing material quality, distance, and workforce needed. Standard 1 BHK shifting starts from ₹6,000 - ₹9,000, while 2 BHK relocation starts from ₹8,000 - ₹12,000.`
    },
    {
      question: `Do you provide insurance for shifting in ${displayName}?`,
      answer: `Yes, Indian Best Packers & Movers provides comprehensive transit insurance for all long-distance domestic moves to protect your household goods against any unforeseen circumstances.`
    },
    {
      question: `How many days in advance should I book my move in ${displayName}?`,
      answer: `We recommend booking your shifting at least 3 to 5 days in advance so our relocation supervisors can plan packing materials and trucks accordingly.`
    }
  ];

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Indian Best Packers & Movers - ${displayName}`,
    "image": "https://www.indianbestpackersmovers.com/assets/img/logo.png",
    "telephone": "+91 8005746241",
    "email": "info@indianbestpackersmovers.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": displayName,
      "addressRegion": location.region,
      "addressCountry": "IN"
    },
    "url": `https://www.indianbestpackersmovers.com/${slug}.html`
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />
      <Breadcrumb title={displayName} />

      <section className="space-top">
        <div className="container">
          <div className="row gy-40">
            <div className="col-lg-7">
              <div className="title-area mb-4">
                <span className="sub-title before-none">Local Shifting Experts</span>
                <h2 className="sec-title">
                  {isVehicle
                    ? `Reliable ${displayName} Shifting`
                    : `Professional Packers and Movers in ${displayName}`}
                </h2>
              </div>
              <p className="sec-text" style={{ fontSize: "16px", lineHeight: "1.8", color: "#666" }}>
                {isVehicle ? (
                  `Indian Best Packers & Movers specializes in delivering secure, scratch-free, and punctual vehicle relocation services across ${displayName}. Our hydraulic carriers and custom shipping trailers are fully equipped to load, lock, and deliver your vehicle with total care.`
                ) : (
                  `If you are looking for reliable and affordable packers and movers services in ${displayName}, Indian Best Packers & Movers is your trusted partner. With over 16 years of expertise in the moving industry, we offer comprehensive packing, loading, transportation, unloading, and unpacking solutions tailored to your shifting needs.`
                )}
              </p>
              <p className="sec-text" style={{ fontSize: "16px", lineHeight: "1.8", color: "#666" }}>
                Our team is equipped with top-tier packing materials like bubble wraps, corrugated sheets, robust cartons, and sealing tapes to guarantee the safety of your delicate furniture, electronics, and kitchen goods. With an active client helpline and verified drivers, we ensure that your transition remains completely hassle-free.
              </p>

              <h3 className="h4 mt-4 mb-3" style={{ fontWeight: "700", color: "#1f1f1f" }}>
                Why Choose Our {displayName} Shifting Team?
              </h3>
              <div className="checklist body-color mb-35">
                <ul>
                  <li>
                    <i className="fa-solid fa-badge-check"></i> 100% safe &amp; secure packing guarantee
                  </li>
                  <li>
                    <i className="fa-solid fa-badge-check"></i> On-time pickup and door-to-door delivery
                  </li>
                  <li>
                    <i className="fa-solid fa-badge-check"></i> Fully insured transit to secure your valuables
                  </li>
                  <li>
                    <i className="fa-solid fa-badge-check"></i> Experienced loaders and modern transport vehicles
                  </li>
                  <li>
                    <i className="fa-solid fa-badge-check"></i> Transparent pricing with zero hidden charges
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-5">
              <div style={{ background: "#f8f9fa", padding: "30px", borderRadius: "10px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
                <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "20px", color: "#1f1f1f", textAlign: "center" }}>
                  Get Free Quotation in {displayName}
                </h3>
                <QuickQuoteForm isContactPage={true} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section for this location */}
      <section className="space overflow-hidden">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="title-area text-center mb-4">
                <span className="sub-title justify-content-center">FAQs</span>
                <h2 className="sec-title" style={{ fontSize: "28px" }}>Shifting Questions in {displayName}</h2>
              </div>
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
