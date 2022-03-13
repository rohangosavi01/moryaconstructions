import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "../contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "../sections/banner";
import Features from "../sections/features";
import Projects from "../sections/projectsCrousel";
import Clients from "../sections/clients";
import Contact from "../sections/contact";
import Testimonial from "../sections/testimonial";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO />
          <Banner />
          <Features />
          <Projects />
          <Clients />
          <Testimonial />
          <Contact />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
