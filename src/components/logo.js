/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "components/link";

export default function Logo({ src, ...rest }) {
  return (
    <Link path="/" sx={styles.logo} {...rest}>
      <Image src={src} alt="morya construction logo" />
    </Link>
  );
}

const styles = {
  logo: {
    variant: "links.logo",
    display: "flex",
    cursor: "pointer",
    height: "50px",
    width: "100px",
    mr: 15,
    "@media screen and (max-width: 640px)": {
      height: "35px",
      width: "60px",
      mr: 0,
      objectFit: "contain",
    },
  },
};
