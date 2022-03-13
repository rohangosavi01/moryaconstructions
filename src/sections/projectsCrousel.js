/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image, Button } from "theme-ui";
import SectionHeader from "components/sectionHeader";
import Carousel from "react-multi-carousel";
import { GoLocation } from "react-icons/go";
import Link from "next/link";
import LineCircle from "assets/lineCircle.png";

import Project1 from "assets/projects/project1.jpg";
import Project2 from "assets/projects/project2.jpg";
import Project3 from "assets/projects/project3.jpg";
import Project4 from "assets/projects/project4.jpg";

const data = [
  {
    id: 1,
    title: "NAHAR GROUP",
    description:
      "Constructed a State-of-Art Factory spread across 1,16,000 ft2 for Luminaz Safety Glass Factory and a Press Shop for Laxmi Pressings Works Pvt Ltd. Spread across 80,000 ft2 at Waluj MIDC, Aurangabad.",
    location: "Waluj MIDC, Aurangabad.",
    img: Project1,
  },
  {
    id: 2,
    title: "STERLITE TECHNOLOGIES LIMITED",
    description:
      "From High-Volume Production Facilities to Foundation Base, From New Facilities to Working in Operating Plant, we built it all for Sterlite.",
    location: "Waluj MIDC, Aurangabad.",

    img: Project2,
  },
  {
    id: 3,
    title: "NAHAR GROUP",
    description:
      "Constructed a State-of-Art Factory spread across 1,16,000 ft2 for Luminaz Safety Glass Factory and a Press Shop for Laxmi Pressings Works Pvt Ltd. Spread across 80,000 ft2 at Waluj MIDC, Aurangabad.",
    location: "Waluj MIDC, Aurangabad.",

    img: Project3,
  },
  {
    id: 4,
    title: "NAHAR GROUP",
    description:
      "Constructed a State-of-Art Factory spread across 1,16,000 ft2 for Luminaz Safety Glass Factory and a Press Shop for Laxmi Pressings Works Pvt Ltd. Spread across 80,000 ft2 at Waluj MIDC, Aurangabad.",
    location: "Waluj MIDC, Aurangabad.",
    img: Project4,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function Projects() {
  return (
    <section id="projects" sx={{ variant: "section.projects" }}>
      <Container>
        <SectionHeader
          slogan="OUR PROJECTS"
          title="Passion Not Just Projects"
        />
      </Container>
      <Box sx={styles.carouselWrapper}>
        <Carousel
          additionalTransfrom={0}
          autoPlay={true}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          // renderButtonGroupOutside
          responsive={responsive}
          sliderClass=""
          slidesToSlide={1}
          showDots={false}
          renderDotsOutside={false}
        >
          {data.map((item) => (
            <Box sx={styles.projectCard} key={`projects--key${item.id}`}>
              <div className="image">
                <Image src={item.img} alt="project Image" />
              </div>
              <div className="card-footer">
                <Heading sx={styles.heading} as="h3">
                  {item.title}
                </Heading>
                <Text sx={styles.location} as="p">
                  {" "}
                  <GoLocation />
                  {item.location}
                </Text>
              </div>
              <div className="card-content">
                <Heading sx={styles.heading} as="h3">
                  {item.title}
                </Heading>
                <Text sx={styles.location} as="p">
                  {item.description}
                </Text>
                <Text sx={styles.location} as="p">
                  {" "}
                  <GoLocation />
                  {item.location}
                </Text>
              </div>
            </Box>
          ))}
        </Carousel>
        <Link href="projects">
          <Button sx={styles.btn} variant="primary">
            View all projects
          </Button>
        </Link>
      </Box>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    alignItems: "flex-end",
    mt: "-30px",
    px: "15px",
    position: "relative",
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: -1,
      left: 10,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${LineCircle})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom left",
      backgroundSize: ["80%", "80%", "70%", "55%", "48%", "34%"],
    },
    ".carousel-container": {
      width: "100%",
      maxWidth: [
        "100%",
        null,
        null,
        "750px",
        "1000px",
        "1180px",
        null,
        "calc(50% + 865px)",
      ],
      mr: ["auto", null, null, null, null, null, null, "-220px"],
      ml: "auto",
      ".react-multi-carousel-item": {
        transition: "all 0.25s",
      },
      ".react-multi-carousel-item--active:nth-of-type(4n)": {
        opacity: "0.5",
        "@media screen and (max-width: 1620px)": {
          opacity: 1,
        },
      },
    },
  },
  btn: {
    mx: "auto",
  },
  projectCard: {
    position: "relative",
    height: "400px",
    display: "flex",
    alignItems: "end",
    boxShadow: "0px 8px 24px 15% #000000",
    transition: "all 0.3s",
    borderRadius: "10px",
    textAlign: "left",
    backgroundColor: "transparent",
    backgroundImage: "linear-gradient(180deg, #FFFFFF00 50%, #0F2137 100%)",
    m: [
      "28px 5px 30px 5px",
      "28px 20px 30px 20px",
      "28px 15px 30px 15px",
      "28px 15px 30px 15px",
      "30px 20px 40px",
    ],
    "&:hover": {
      boxShadow: "0px 6px 30px rgba(38, 78, 118, 0.3)",

      ".card-footer": {
        display: "none",
      },
      ".card-content": {
        opacity: "1",
        transform: "translateY(0px)",
      },
    },
    ".image": {
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      borderRadius: "10px",
      zIndex: "-1",

      img: {
        objectFit: "cover",
        width: "100%",
        height: "100%",
        borderRadius: "10px",
      },
    },
    ".card-content": {
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      p: "20px",
      px: "35px",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      textAlign: "center",
      color: "white",
      background: " linear-gradient(0deg, #171d3c, rgba(0, 0, 0, 0.66))",
      opacity: "0",
      transition: "all 500ms ease-in-out 25ms",
      transform: "translateY(-70px)",

      "& > svg": {
        mr: "0px",
      },
    },
    ".card-footer": {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      px: "20px",
      py: "15px",
      color: "white",
    },
  },
  location: {
    color: "white",
    "& > svg": {
      mr: "10px",
    },
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: "normal",
    color: "text",
    lineHeight: [1.85, null, 2],
  },
  heading: {
    color: "white",
    lineHeight: 1.3,
    mb: "10px",
  },
};
