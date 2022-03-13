import { Box, Heading, Text } from "theme-ui";
import { FaPlus } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
const data = [
  {
    id: 1,
    title: "Years Of Experience",
    number: 23,
    desc: "Lorem ipsum dolor sit amet, consectetur .",
  },
  {
    id: 2,
    title: "Projects Completed",
    number: 100,
    desc: "Lorem ipsum dolor sit amet, consectetur .",
  },
  {
    id: 3,
    title: "Clients",
    number: 50,
    desc: "Lorem ipsum dolor sit amet, consectetur .",
  },
];

const Counter = ({ to, inView }) => {
  const nodeRef = useRef();
  useEffect(() => {
    const node = nodeRef.current;
    if (inView) {
      const controls = animate(0, to, {
        duration: 1,
        onUpdate(value) {
          node.textContent = value.toFixed(0);
        },
      });
      return () => controls.stop();
    }
  }, [to, inView]);
  return <Heading ref={nodeRef} as="h1" variant="heroPrimary" />;
};

export default function Numbers() {
  const { ref, inView } = useInView();
  return (
    <Box sx={styles.details}>
      {data.map((i) => (
        <Box ref={ref} key={i.id}>
          <Box sx={styles.details.plus}>
            <Counter inView={inView} to={i.number} />
            <FaPlus className="plus" fill="#e33d49" />
          </Box>
          <Heading as="h2" variant="hero=Secondary">
            {i.title}
          </Heading>
        </Box>
      ))}
    </Box>
  );
}

const styles = {
  details: {
    py: ["100px", "100px", "135px", "140px", null, null, "150px", "170px"],
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: ["100%", "90%"],
    mx: "auto",
    "& > div": {
      ml: "50px",
    },
    "& > div:first-of-type": {
      ml: "0px",
    },
    "&h1": {
      m: "0",
      p: "0",
    },

    plus: {
      display: "flex",
      alignItems: "start",
      "@media screen and (max-width: 640px)": {
        justifyContent: "center",
      },
    },
    "@media screen and (max-width: 1030px)": {
      "& h2": {
        height: "80px",
      },
    },
    "@media screen and (max-width: 640px)": {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",

      "& > div": {
        mb: "50px",
        ml: "0",
      },
      "& h2": {
        height: "auto",
      },
    },
  },
};
