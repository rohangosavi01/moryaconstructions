/** @jsx jsx */
import { jsx, Box, Grid, Container, Divider, Heading, Text } from "theme-ui";
import { Link } from "react-scroll";
import data from "./footer.data";
import FooterLogo from "assets/logo.png";

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Heading sx={styles.footer.heading}>Let's Start</Heading>

        <Grid sx={styles.widgets}>
          {data.widgets.map((item) => (
            <a sx={styles.widgets.link} href={item.link}>
              <Box
                key={`footer-widget--key${item.id}`}
                sx={styles.widgets.widgetItem}
              >
                <span sx={styles.widgets.svg}>{item.iconSrc}</span>
                <Box sx={styles.widgets.infoWrapper}>
                  <Heading as="h3">{item.title}</Heading>
                  <Text as="p">{item.description}</Text>
                </Box>
              </Box>
            </a>
          ))}
        </Grid>
        {/* End of footer widgets area */}
        <Box sx={styles.footer.footerBottomArea}>
          <Link to="/">
            <b src={FooterLogo} alt="Logo" style={{ height: "60px" }} />
          </Link>
          {/* <Box sx={styles.footer.menus}>
            <nav>
              {data.menuItem.map(({ path, label }, i) => (
                <Link to={path} key={i} sx={styles.footer.link} target="_blank">
                  {label}
                </Link>
              ))}
            </nav>
          </Box> */}
          <Text sx={styles.footer.copyright}>
            Copyright by {new Date().getFullYear()}
            <a href="https://josephbayad.vercel.app/" target="_blank">
              Youssef Bayad
            </a>
          </Text>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    mt: ["80px", "150px"],
    textAlign: "center",
    footerBottomArea: {
      borderTop: "1px solid",
      borderTopColor: "border_color",
      display: "flex",
      pt: [5, null, 6],
      pb: ["40px", null, "60px"],
      textAlign: "center",
      flexDirection: "column",
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      },
    },
    heading: {
      variant: "text.lead",
      mb: "10px",
    },
    link: {
      fontSize: [1, "15px"],
      color: "text",
      fontWeight: "400",
      mb: 2,
      cursor: "pointer",
      transition: "all 0.35s",
      display: "block",
      textDecoration: "none",
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ":hover": {
        color: "secondary",
      },
    },
    copyright: {
      fontSize: [1, "15px"],
      width: "100%",
      "& a ": {
        textDecoration: "none",
        ml: 2,
        color: "secondary",
      },
    },
  },
  widgets: {
    py: [5, null, 6],
    px: [4, 0, 3, null, 7, 10],
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: ["40px 0", null, "45px 30px", null, "60px 30px", "50px 90px"],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      "repeat(3,1fr)",
    ],
    link: {
      textDecoration: "none",
      width: "200px",
      mx: "auto",
    },
    svg: {
      fill: "primary",
      width: "20%",
      height: "20%",
    },
    widgetItem: {
      textAlign: "center",
    },
    infoWrapper: {
      mt: [2, 3, null, 2, 4],
      mb: -1,
      h3: {
        fontSize: [3, null, null, 2, 3, 4],
        color: "heading_secondary",
        lineHeight: 1.4,
        fontWeight: 700,
        mb: [2, null, null, null, "15px"],
      },
      "& a": {
        textDecoration: "none",
        color: "text",
      },

      p: {
        fontSize: [1, "15px"],
        fontWeight: 500,
        lineHeight: 1.6,
        color: "heading_secondary",
      },
    },
  },
};
