import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "Our Branches | Indian Best Packers & Movers",
  description: "Find our office locations and packers and movers services in Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune, Jaipur, and other major cities in India.",
  alternates: {
    canonical: "https://www.indianbestpackersmovers.com/branches.html",
  },
};

export default function Branches() {
  const branches = [
    { name: "Packers and Movers Mumbai", path: "/packers-and-movers-mumbai.html" },
    { name: "Packers and Movers Ahmedabad", path: "/packers-and-movers-ahmedabad.html" },
    { name: "Packers and Movers Pune", path: "/packers-and-movers-pune.html" },
    { name: "Packers and Movers Nagpur", path: "/packers-and-movers-nagpur.html" },
    { name: "Packers and Movers Visakhapatnam", path: "/packers-and-movers-visakhapatnam.html" },
    { name: "Packers and Movers Nashik", path: "/packers-and-movers-nashik.html" },
    { name: "Packers and Movers Varanasi", path: "/packers-and-movers-varanasi.html" },
    { name: "Packers and Movers Amritsar", path: "/packers-and-movers-amritsar.html" },
    { name: "Packers and Movers Vijayawada", path: "/packers-and-movers-vijayawada.html" },
    { name: "Packers and Movers Chandigarh", path: "/packers-and-movers-chandigarh.html" },
    { name: "Packers and Movers Delhi", path: "/packers-and-movers-delhi.html" },
    { name: "Packers and Movers Chennai", path: "/packers-and-movers-chennai.html" },
    { name: "Packers and Movers Jaipur", path: "/packers-and-movers-jaipur.html" },
    { name: "Packers and Movers Indore", path: "/packers-and-movers-indore.html" },
    { name: "Packers and Movers Patna", path: "/packers-and-movers-patna.html" },
    { name: "Packers and Movers Ranchi", path: "/packers-and-movers-ranchi.html" },
    { name: "Packers and Movers Srinagar", path: "/packers-and-movers-srinagar.html" },
    { name: "Packers and Movers Allahabad", path: "/packers-and-movers-allahabad.html" },
    { name: "Packers and Movers Jodhpur", path: "/packers-and-movers-jodhpur.html" },
    { name: "Packers and Movers Mysore", path: "/packers-and-movers-mysore.html" },
    { name: "Packers and Movers Bangalore", path: "/packers-and-movers-bangalore.html" },
    { name: "Packers and Movers Kolkata", path: "/packers-and-movers-kolkata.html" },
    { name: "Packers and Movers Lucknow", path: "/packers-and-movers-lucknow.html" },
    { name: "Packers and Movers Ghaziabad", path: "/packers-and-movers-ghaziabad.html" },
    { name: "Packers and Movers Hyderabad", path: "/packers-and-movers-hyderabad.html" },
    { name: "Packers and Movers Surat", path: "/packers-and-movers-surat.html" },
    { name: "Packers and Movers Bhopal", path: "/packers-and-movers-bhopal.html" },
    { name: "Packers and Movers Agra", path: "/packers-and-movers-agra.html" },
    { name: "Packers and Movers Coimbatore", path: "/packers-and-movers-coimbatore.html" },
    { name: "Packers and Movers Kota", path: "/packers-and-movers-kota.html" },
    { name: "Packers and Movers Rajkot", path: "/packers-and-movers-rajkot.html" },
    { name: "Packers and Movers Navi Mumbai", path: "/packers-and-movers-navi-mumbai.html" },
    { name: "Packers and Movers Gwalior", path: "/packers-and-movers-gwalior.html" },
  ];

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Indian Best Packers & Movers Branches",
    "description": "Directory of our packers and movers branches in all major cities in India.",
    "itemListElement": branches.map((branch, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "url": `https://www.indianbestpackersmovers.com${branch.path}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />
      <Navbar />
      <Breadcrumb title="Our Branches" />

      <section className="space">
        <div className="container">
          <div className="title-area text-center mb-5">
            <span className="sub-title justify-content-center">Network</span>
            <h2 className="sec-title">Packers and Movers in All India</h2>
            <p className="sec-text" style={{ maxWidth: "800px", margin: "0 auto" }}>
              Indian Best Packers & Movers operates in all major metro cities and towns across India. Choose your city below to get local contact details, charges, and services.
            </p>
          </div>

          <div className="row gy-3">
            {branches.map((branch, idx) => (
              <div key={idx} className="col-sm-6 col-md-4 col-lg-3">
                <div style={{ background: "#f8f9fa", padding: "18px 22px", borderRadius: "8px", borderLeft: "4px solid #c4170d", transition: "all 0.3s ease", boxShadow: "0 2px 10px rgba(0,0,0,0.03)" }} className="branch-card-hover">
                  <Link href={branch.path} style={{ color: "#1f1f1f", fontWeight: "600", fontSize: "15px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <i className="fas fa-location-dot" style={{ color: "#c4170d" }}></i>
                    {branch.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
