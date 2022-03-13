/** @jsx jsx */
import { jsx, Text } from "theme-ui";

export default function Divider() {
  return <Text sx={styles.divider} />;
}

const styles = {
  divider: {
    width: "50px",
    mr: "10px",
    height: "3px",
    backgroundColor: "primary",
    borderRadius: "20px",
  },
};
