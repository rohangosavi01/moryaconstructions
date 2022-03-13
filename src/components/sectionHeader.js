import React from "react";
import { Box, Text, Heading } from "theme-ui";
import Divider from "./divider";

export default function SectionHeader({ title, slogan, isWhite, clients }) {
  return (
    <Box
      sx={{
        variant: "sectionHeader",
        marginBottom: clients
          ? ["10px", null, "10px", null, null, "15px", null, "20px"]
          : ["50px", null, "60px", null, null, "65px", null, "80px"],
      }}
    >
      <Box sx={styles.flex}>
        <Divider />
        <Text
          as="p"
          sx={{
            variant: "sectionHeader.subTitle",
            opacity: isWhite ? 0.7 : 1,
          }}
        >
          {slogan}
        </Text>
      </Box>
      <Heading
        as="h2"
        sx={{
          variant: "sectionHeader.title",
          color: isWhite ? "white" : "heading",
        }}
      >
        {title}
      </Heading>
    </Box>
  );
}

const styles = {
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
