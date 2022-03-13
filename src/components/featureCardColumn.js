/** @jsx jsx */
import { jsx, Image, Box, Heading, Text } from "theme-ui";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function FeatureCardColumn({
  src,
  altText = "default alt text",
  title,
  text,
  i,
}) {
  const animation = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,

        transition: { duration: 0.5, delay: i * 0.2, ease: "easeIn" },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        y: -50,
      });
    }
  }, [inView]);
  return (
    <motion.div ref={ref} animate={animation} sx={styles.card}>
      <Box>
        <Image src={src} altText={altText} sx={styles.img} />
        <Box sx={styles.wrapper}>
          <Heading sx={styles.wrapper.title}>{title}</Heading>
          <Text sx={styles.wrapper.subTitle}>{text}</Text>
        </Box>
      </Box>
    </motion.div>
  );
}

const styles = {
  card: {
    display: "flex",
    alignItems: ["center", "flex-start"],
    flexDirection: "column",
    mb: -1,
    px: [4, null, 0],
    textAlign: "center",
  },
  img: {
    mb: -2,
    mx: "auto",

    width: ["80px", null, null, "90px", null, "auto"],
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    title: {
      fontSize: 3,
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3],
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: "1.9",
    },
  },
};
