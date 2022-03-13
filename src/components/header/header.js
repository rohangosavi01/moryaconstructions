/** @jsx jsx */
import { jsx, Container, Flex, Button } from "theme-ui";
import { keyframes } from "@emotion/core";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

import Logo from "components/logo";
import LogoDark from "assets/logo.png";
import MobileDrawer from "./mobile-drawer";
import { menuItems, pagesItems } from "./header.data";

export default function Header({ className, page }) {
  return (
    <header sx={styles.header} className={className} id="headers">
      <Container sx={styles.container}>
        <Logo src={LogoDark} />
        <Flex as="nav" sx={styles.nav}>
          {!page &&
            menuItems.map((menuItem, i) => (
              <ScrollLink
                className="hover-underline-animation"
                activeClass="active"
                to={menuItem.path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
              >
                {menuItem.label}
              </ScrollLink>
            ))}
          {!page && (
            <>
              <Link activeClass="active" href={`/projects`}>
                <a className="hover-underline-animation">Projects</a>
              </Link>
              <Link activeClass="active" href={`/about`}>
                <a className="hover-underline-animation">About Us</a>
              </Link>
            </>
          )}
          {!page && (
            <ScrollLink
              className="hover-underline-animation"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </ScrollLink>
          )}
          {page &&
            pagesItems.map((menuItem, i) => (
              <Link key={i} activeClass="active" href={`/${menuItem.path}`}>
                <a className="hover-underline-animation">{menuItem.label}</a>
              </Link>
            ))}
        </Flex>

        <Link href="#">
          <Button className="contact__btn" variant="secondary">
            Download Profile
          </Button>
        </Link>

        <MobileDrawer page={page} />
      </Container>
    </header>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: "text",
    fontWeight: "body",
    py: 4,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",

    transition: "all 0.4s ease",
    animation: `${positionAnim} 0.4s ease`,
    "@media screen and (max-width: 640px)": {
      backgroundColor: "background",
      color: "#000000",
    },
    ".contact__btn": {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0],
      "@media screen and (max-width: 1030px)": {
        mx: "auto",
      },
    },

    "&.sticky": {
      position: "fixed",
      backgroundColor: "background",
      color: "#000000",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      py: 3,
      "nev > a": {
        color: "text",
      },
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: {
    mx: "auto",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block",
    },
    "& a": {
      fontSize: 2,
      textDecoration: "none",
      color: "text",
      fontWeight: "body",
      px: 5,
      cursor: "pointer",
      lineHeight: "1.2",
      transition: "all 0.15s",

      "&.active": {
        color: "primary",
        "&.hover-underline-animation:after": {
          transform: "scaleX(1)",
          transformOrigin: "bottom right",
        },
      },
    },
    ".hover-underline-animation": {
      display: "inline-block",
      position: "relative",
    },

    ".hover-underline-animation:after": {
      content: '""',
      position: "absolute",
      width: "70%",
      margin: "auto",
      transform: "scaleX(0)",
      height: "2px",
      bottom: "-10px",
      left: "0",
      right: "0",
      backgroundColor: "primary",
      transformOrigin: "bottom right",
      transition: "transform 0.25s ease-out",
    },

    ".hover-underline-animation:hover:after": {
      transform: "scaleX(1)",
      transformOrigin: "bottom right",
    },
  },
};
