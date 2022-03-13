/** @jsx jsx */
import { jsx, Container, Image, Grid, Text } from "theme-ui";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import SectionHeader from "components/sectionHeader";
import LineCircle from "assets/lineCircle.png";

// img
import Client1 from "assets/clients/client1.png";
import Client2 from "assets/clients/client2.png";
import Client3 from "assets/clients/client3.png";
import Client4 from "assets/clients/client4.png";
import Client5 from "assets/clients/client5.png";
import Client6 from "assets/clients/client6.png";
import Client7 from "assets/clients/client7.png";
import Client8 from "assets/clients/client8.png";
import Client9 from "assets/clients/client9.png";
import Client10 from "assets/clients/client10.png";
import Client11 from "assets/clients/client11.png";
import Client12 from "assets/clients/client12.png";
import Client13 from "assets/clients/client13.png";
import Client14 from "assets/clients/client14.png";
import Client15 from "assets/clients/client15.png";

// img array
const data = [
  Client1,
  Client2,
  Client3,
  Client14,
  Client5,
  Client6,
  Client7,
  Client8,
  Client9,
  Client10,
  Client11,
  Client12,
  Client13,
  Client4,
  Client15,
];

export default function clients() {
  const animation = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      animation.start((i) => ({
        opacity: 1,
        translateY: 0,
        filter: "brightness(1)",

        transition: {
          duration: 0.3,
          delay: i * 0.3,
          ease: "easeIn",
          filter: {
            duration: 3,
          },
        },
      }));
    }
  }, [inView]);

  return (
    <section id="clients" sx={{ variant: "section.clients" }}>
      <Container sx={styles.containerBox}>
        <SectionHeader
          sx={styles.heading}
          slogan="Our Partners"
          title="We Are Trusted By:"
          clients={true}
        />
        <Text variant="text.secondary" sx={styles.containerBox.subheader}>
          With everything we do, customer satisfaction always come first. We
          have built our reputation on our client focus and hands-on approach.
          We are proud of the fact that the majority of our workload comes from
          repeat business!
        </Text>
        <Grid ref={ref} sx={styles.grid}>
          {data.map((item, i) => (
            <motion.span
              ref={ref}
              key={i}
              custom={i}
              initial={{
                opacity: 0,
                filter: "brightness(0.1)",
                translateY: -50,
              }}
              animate={animation}
            >
              <Image
                key={i}
                sx={styles.containerBox.img}
                src={item}
                alt="morya client"
              />
            </motion.span>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    width: ["100%", "90%"],
    mx: "auto",

    pb: [0, 2, 0, null, 7],
    "&  span": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    img: {
      width: "50%",
      mx: "auto",
      cursor: "pointer",

      "@media screen and (max-width: 640px)": {
        width: "30%",
      },
    },

    subheader: {
      mx: "auto",
      mb: "80px",
      mt: "0",
      alignText: "center",
      width: "60%",
      color: "heading",
    },
  },
  heading: {
    marginBottom: ["50px", null, "60px", null, null, "65px", null, "0px"],
  },
  grid: {
    position: "relative",
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "45px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],

    "&::before": {
      position: "absolute",
      content: '""',
      bottom: -10,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${LineCircle})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom right",
      backgroundSize: ["80%", "80%", "70%", "65%", "58%", "44%"],
    },
  },
};
