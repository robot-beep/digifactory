import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contáctanos",
  description: "contáctanos",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contáctanos"
        description="¿Tienes alguna pregunta o comentario? ¡Contáctanos!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
