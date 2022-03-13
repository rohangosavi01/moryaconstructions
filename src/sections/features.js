/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/sectionHeader";
import FeatureCardColumn from "components/featureCardColumn.js";
import Safe from "assets/features/safe.svg";
import Smart from "assets/features/smart.svg";
import Sustainable from "assets/features/sustainable.svg";
import LineCircle from "assets/lineCircle.png";

const data = [
  {
    id: 1,
    imgSrc: Safe,
    altText: "Safe",
    title: "Safe",
    text:
      "We do not compromise on safety — it always comes first in everything we do. Using the latest safety systems, leadership techniques, training and support helps all of our people and subcontractors go home safe every night to their families.",
  },
  {
    id: 2,
    imgSrc: Smart,
    altText: "Smart ",
    title: "Smart ",
    text:
      "Our research and development keeps us at the forefront of construction excellence.Creating Bar Charts and Line graphs for Every project to ensure work completes in the given time.",
  },
  {
    id: 3,
    imgSrc: Sustainable,
    altText: "Sustainable",
    title: "Sustainable",
    text:
      "On the ground and out in the field we manage all projects sustainably, with regular independent audits confirming the quality of our approach. Our staff are fully trained in environmental management, compliance, spill control and the relevant environmental legislation for each jurisdiction.",
  },
];

export default function KeyFeature() {
  return (
    <section id="features" sx={{ variant: "section.features" }}>
      <Container>
        <SectionHeader slogan="Key Features" title="How We Do It?" />
        <Grid sx={styles.grid}>
          {data.map((item, i) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
              i={i}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    position: "relative",
    width: ["100%", "80%", "100%"],
    mx: "auto",
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
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: -10,
      right: -10,
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
