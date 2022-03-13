import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "../contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Projects from "sections/projects";

export default function ProjectsPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout page>
          <SEO />
          <Projects />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
