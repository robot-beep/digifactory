import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "About page of Pedro and Maximiliano digifactory",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Quienes Somos"
        description="Somos Pedro López y Maximiliano Espindola, y juntos formamos un equipo de trabajo que se dedica a la creación de sitios web y aplicaciones móviles.
        Nuestro compromiso es simple, la confianza es un camino de dos vías, si confías en nosotros, nosotros confiamos en ti, y respetaremos ese compromiso hasta el final."
      />
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
