"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Precios simples y transparentes"
          paragraph="Prototipamos tu idea gratis, y si te gusta el resultado, trabajamos juntos para llevarlo a producción con un precio fijo por resultados."
          center
          width="665px"
        />

        <div className=" flex grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          <PricingBox
            packageName="Prototipado"
            price={isMonthly ? "0" : "120"}
            duration={isMonthly ? "" : "yr"}
            subtitle="Hacemos un prototipo de solución, veamos si soluciona tu problema. Ofrecemos varias soluciones"
          >
            <OfferList text="Páginas web" status="active" />
            <OfferList text="Agentes de IA" status="active" />
            <OfferList text="Aplicaciones mobiles" status="active" />
            <OfferList text="Sistemas IOT" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Landing Page"
            price={isMonthly ? "150.000" : ""}
            duration={isMonthly ? "" : "yr"}
            subtitle="Landing Page, Blog, E-commerce, Portfolio, etc."
          >
            <OfferList text="Páginas personalizadas" status="active" />
            <OfferList text="Diseños únicos" status="active" />
            <OfferList text="Optimización SEO" status="active" />
            <OfferList text="Soporte 24/7" status="active" />
          </PricingBox>
            
          
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
