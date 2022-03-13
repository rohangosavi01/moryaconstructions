import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "../contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import About from "../sections/about";

export default function AboutPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout page>
          <SEO />
          <About />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
