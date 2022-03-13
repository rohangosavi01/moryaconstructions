/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "react-scroll";
import { Box, Heading, Text, Button, Container } from "theme-ui";
import { AnimatePresence, motion } from "framer-motion";
import BannerThree from "assets/banner3.webp";
import BannerTwo from "assets/banner2.webp";
import BannerFour from "assets/banner4.webp";
import BannerFive from "assets/banner5.webp";
import LineCircle from "assets/lineCircle.png";
import Divider from "components/divider";
import Numbers from "components/numbers";
import { useState, useEffect } from "react";

export default function Banner() {
  const slider = [BannerTwo, BannerThree, BannerFour, BannerFive];
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = slider.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 3500;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <section id="home" sx={{ variant: "section.banner" }}>
      <Container sx={styles.container}>
        <Box sx={styles.banner}>
          <motion.Box
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            exit={{ x: 100 }}
            transition={{
              duration: 0.5,
              ease: "easeIn",
            }}
            sx={styles.bannerBox}
          >
            <Box sx={styles.head}>
              <Divider />
              <Heading>Always at Your Service</Heading>
            </Box>

            <Heading sx={styles.heading} as="h1" variant="heroPrimary">
              Morya Constructions{" "}
            </Heading>

            <Text as="p">
              Since 2014, Morya Constructions has provided quality services to
              clients by providing them with the professional care they deserve.
              Get in touch today to learn more about our Construction Company.
            </Text>

            <Link to="contact">
              <Button>Contact Us</Button>
            </Link>
          </motion.Box>

          <AnimatePresence initial={false}>
            <motion.img
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{
                scale: {
                  duration: 1,
                  type: "sprint",
                  stiffness: 300,
                  damping: 300,
                },
                opacity: { duration: 1 },
              }}
              sx={styles.banner.slider}
              src={slider[currentSlide]}
            />
          </AnimatePresence>
        </Box>
        <Numbers />
      </Container>
    </section>
  );
}

const styles = {
  container: {
    pt: "20px",
  },

  banner: {
    py: ["120px", "120px", "120px", "140px", null, null, "150px", "170px"],
    position: "relative",
    width: "100%",
    mx: "auto",

    "&::before": {
      position: "absolute",
      content: '""',
      bottom: -6,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${LineCircle})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom left",
      backgroundSize: ["80%", "80%", "70%", "65%", "58%", "44%"],
    },

    slider: {
      position: "absolute",
      top: "70px",
      right: "0",
      height: "100%",
      width: "100%",
      zIndex: -1,
      borderRadius: "10px",
      objectFit: "cover",
      objectPosition: "50% 0%",
      width: ["100%", "100%", "60%", "68%", "70%", "74%"],
      height: ["100%", "100%", "60%", "58%", "60%", "78%"],
      mt: "30px",
      "@media screen and (max-width: 640px)": {
        right: "0",
        width: "80%",
        height: "40%",
        mr: "10%",
        objectFit: "contain",
        mt: "50px",
      },
    },
  },

  bannerBox: {
    height: ["100%", "100%", "450px", "450px", "500px", "500px"],
    width: ["100%", "100%", "350px", "400px", "450px", "450px"],
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "2px 2px 15px rgba(38, 78, 118, 0.25)",
    mb: [0, null, -6, null, null, "-40px", null, -3],
    px: "30px",
    py: ["20px", "35px", "45px"],
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "start",
    "&  button": {
      zIndex: "10",
    },
    "@media screen and (max-width: 640px)": {
      width: "90%",
      mx: "auto",
      mt: ["180px", "180px", "270px", "270px", "270px"],
      "& span, button": {
        width: "100%",
      },
    },
  },
  head: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  },
  heading: {
    my: "20px",
    "@media screen and (max-width: 840px)": {
      my: "10px",
    },
  },
};
