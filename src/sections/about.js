/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Text, Heading, Flex, Divider } from "theme-ui";
import Thumbnail from "assets/banner2.webp";
import Thumbnail2 from "assets/banner5.webp";
import SectionHeader from "components/sectionHeader";
import ShowMoreText from "react-show-more-text";
import LineCircle from "assets/lineCircle.png";
import Pattern from "assets/pattern.png";

import Avatar1 from "assets/testimonial/avatar1.png";
import Avatar2 from "assets/testimonial/avatar2.png";
import TeamCard from "components/teamCard";

const data = [
  {
    id: 1,
    imgSrc: Avatar1,
    altText: "Rahul Gosavi",
    title: "Rahul Gosavi",
    designation: "Founder",
  },
  {
    id: 2,
    imgSrc: Avatar2,
    altText: "Smita Gosavi",
    title: "Smita Gosavi",
    designation: "Founder",
  },
];

const About = () => (
  <section id="about" sx={{ variant: "section.about" }}>
    <Box>
      <Container sx={styles.container}>
        <SectionHeader slogan="Morya constructions" title="Founders" />
        <Flex sx={styles.flex}>
          {data.map((item) => (
            <TeamCard
              key={`team--key${item.id}`}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
            />
          ))}
        </Flex>
        <SectionHeader slogan="A Little" title="About Us" />

        <Box sx={styles.wrapper}>
          <Box sx={styles.details}>
            <Heading as="h2" variant="hero=secondary">
              In 1971, Shantinath Gosavi founded S A Gosavi & Sons to work as a
              construction company.
            </Heading>
            <ShowMoreText
              lines={8}
              className=""
              more="Show more"
              less="Show less"
              sx={styles.showMore}
              expanded={false}
              truncatedEndingComponent={"..."}
            >
              <Text as="p">
                The company quickly expanded into public and private projects,
                working with Bharat Heavy Electricals Limited and Maharashtra
                State Electricity Board. With Rahul Gosavi joining the team, the
                company grew into leaps and bounds over the next few years. HR
                Infrastructures was founded and within a decade major
                Industrial, Residential and Commercial Projects were completed
                Later, Morya Constructions was founded Morya Constructions’
                success over the years is due to its employees’ dedication to
                excellent work, customer service that exceeds expectations, and
                a safety program that has led to millions of zero-accident
                hours. Honesty and open communication have empowered our
                workforce since day one, and it shows in our work. Our ambition
                and goals have always been to deliver quality projects and value
                for money to our clients.
              </Text>
            </ShowMoreText>
          </Box>
          <Box sx={styles.thumbnail}>
            <img src={Thumbnail} alt="about us" />
          </Box>
        </Box>

        <SectionHeader
          slogan="Morya Constructions"
          title="Who are we Today ?"
        />
        <Box sx={styles.wrapperTwo}>
          <Box sx={styles.thumbnail}>
            <img src={Thumbnail2} alt="policy" />
          </Box>
          <Box sx={styles.details}>
            <Heading as="h2" variant="heading">
              We provide professional client-focused construction solutions. As
              an employee-owned company, we go above and beyond on every project
              and deliver on our promises with integrity.
            </Heading>
            <Divider />
            <Heading variant="hero=Secondary">Our Policy</Heading>
            <ShowMoreText
              lines={8}
              className=""
              more="Show more"
              less="Show less"
              sx={styles.showMore}
              expanded={false}
              truncatedEndingComponent={"..."}
            >
              <Text as="p" sx={styles.policy}>
                Maintain an effective quality management system, applying to all
                our activities at all times Achieve and maintain high standards
                of work that enhances our reputation and those of our customers
                Ensure compliance to all regulations and statutory bodies Seek
                to achieve and maintain best-practice methodologies throughout
                our activities Maintain continual improvement through
                measurement against policy and performance, evaluation, review,
                training and procedural change where required Meet our clients’
                requirements and exceed their expectations Reduce waste through
                better storage, more efficient material use, and accurate
                ordering processes Communicate this policy to our employees, and
                all interested parties to ensure continued adherence to this
                policy
              </Text>
            </ShowMoreText>
          </Box>
        </Box>
      </Container>
    </Box>
  </section>
);

export default About;

const styles = {
  container: {
    my: "70px",
  },
  flex: {
    position: "relative",
    mx: "auto",
    justifyContent: "center",
    mb: "150px",
    "& > div": {
      boxShadow: ["none", null, "0 4px 10px rgba(39, 83, 123, 0.12)"],
      mx: "30px",
    },
    "@media screen and (max-width: 640px)": {
      flexDirection: "column",
      "& > div": {
        mb: "30px",
        mx: "auto",
      },
    },

    "&::before": {
      position: "absolute",
      content: '""',
      top: 0,
      left: 0,
      mx: "auto",
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${Pattern})`,
      // backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom left",
      backgroundSize: ["80%", "80%", "70%", "75%", "100%", "100%"],
    },
  },
  wrapper: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    mb: "150px",
    "@media (max-width: 960px) ": {
      flexDirection: "column",
    },
  },
  showMore: {
    a: {
      textDecoration: "none",
      display: "block",
      color: "secondary",
    },
  },
  details: {
    flex: "1",
    "& h2": {
      mb: "20px",
    },

    " @media (max-width: 960px)": {
      pr: 0,
      width: "100%",
      order: "1",
    },
  },
  thumbnail: {
    position: "relative",
    flex: "1",
    height: "100%",
    objectFit: "cover",
    mx: "20px",
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: -10,
      left: -5,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${LineCircle})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom left",
      backgroundSize: ["80%", "80%", "70%", "65%", "58%", "74%"],
    },
    "@media (max-width: 960px) ": {
      width: "100%",
      marginBottom: "2rem",
      mx: "auto",
    },

    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "10px",
    },
  },
  wrapperTwo: {
    position: "relative",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    "@media (max-width: 960px) ": {
      flexDirection: "column",
    },
  },
};
