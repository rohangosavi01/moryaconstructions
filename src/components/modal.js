import react from "react";
import { Box } from "theme-ui";
import { motion } from "framer-motion";

const Modal = ({ setSelectedImg, selectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    <Box>
      <Box
        className="backdrop"
        sx={styles[".backdrop"]}
        onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.img
          src={selectedImg}
          alt="enlarged pic"
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
        />
      </Box>
    </Box>
  );
};

const styles = {
  ".backdrop": {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",

    "& > img": {
      display: "block",
      maxWidth: "60%",
      maxHeight: "80%",
      margin: "100px auto",
      boxShadow: " 3px 5px 7px rgba(0,0,0,0.5)",
      border: " 3px solid white",
      borderRadius: "10px",
    },
    "@media screen and (max-width: 640px)": {
      display: "none",
    },
  },
};

export default Modal;
