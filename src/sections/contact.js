/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box } from "theme-ui";
import ContactForm from "../components/ContactForm";
import SectionHeader from "components/sectionHeader";
import GoogleMaps from "components/maps";

const Contact = () => (
  <section id="contact" sx={{ variant: "section.contact" }}>
    <Box>
      <Container sx={styles.container}>
        <SectionHeader slogan="Contact" title="Let's Build The Future" />
        <Box sx={styles.wrapper}>
          <Box sx={styles.details}>
            <ContactForm />
          </Box>
          <Box sx={styles.thumbnail}>
            <GoogleMaps />
          </Box>
        </Box>
      </Container>
    </Box>
  </section>
);

export default Contact;

const styles = {
  wrapper: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    "@media (max-width: 960px) ": {
      flexDirection: "column",
    },
  },

  details: {
    flex: "1",
    pr: "2rem",
    " @media (max-width: 960px)": {
      pr: 0,
      width: "100%",
      order: "1",
    },
  },
  thumbnail: {
    flex: "1",
    height: "600px",
    mt: 6,
    "@media (max-width: 960px) ": {
      width: "100%",
      marginBottom: "2rem",
      display: "flex",
      height: "450px",
      mx: "auto",
      justifyContent: "center",
      "& > iframe": {
        width: "80%",
      },
    },
    "@media (max-width: 640px) ": {
      "& > iframe": {
        width: "100%",
      },
    },
  },
};
