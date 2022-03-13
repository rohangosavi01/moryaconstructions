/** @jsx jsx */
import { jsx, Grid, Box } from "theme-ui";
import { motion } from "framer-motion";

import Project1 from "assets/projects/project1.jpg";
import Project2 from "assets/projects/project2.jpg";
import Project3 from "assets/projects/project3.jpg";
import Project4 from "assets/projects/project4.jpg";
const images = [Project1, Project2, Project3, Project4, Project1, Project2];

const ImageGrid = ({ setSelectedImg }) => {
  return (
    <Grid sx={styles.grid}>
      {images.map((img, i) => (
        <motion.Box
          sx={styles.wrap}
          key={i}
          // layout
          onClick={() => setSelectedImg(img)}
        >
          <motion.img
            src={img}
            alt="project"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2, ease: "easeIn" }}
          />
        </motion.Box>
      ))}
    </Grid>
  );
};

const styles = {
  grid: {
    m: " 20px auto",
    display: "grid",
    // gridTemplateColumns: "1fr 1fr 1fr",
    // gridGap: "40px",
    gridGap: [
      "35px 0",
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
      "repeat(3,1fr)",
      "repeat(3,1fr)",
    ],
  },
  wrap: {
    overflow: "hidden",
    height: "0",
    padding: "50% 0",
    borderRadius: "10px",
    /* padding controls height, will always be perfectly square regardless of width */
    position: "relative",
    opacity: "0.8",
    transition: "all 0.3s ease-in-out",
    "@media screen and (max-width: 640px)": {
      opacity: "1",
    },
    "&:hover": {
      opacity: "1",
      boxShadow: "0px 6px 30px rgba(38, 78, 118, 0.4)",
    },
    " & > img": {
      borderRadius: "10px",
      cursor: "pointer",
      minWidth: "100%",
      minHeight: "100%",
      maxWidth: "150%",
      objectFit: "cover",
      position: "absolute",
      top: "0",
      left: "0",
    },
  },
};

export default ImageGrid;
