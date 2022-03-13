/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import ImageGrid from "components/imageGrid";
import Modal from "components/modal";
import SectionHeader from "components/sectionHeader";
import { useState } from "react";

export default function projects() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section sx={{ variant: "section.projects" }}>
      <Container sx={styles.container}>
        <SectionHeader
          slogan="our projects"
          title="Passion Not Just Projects"
        />
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </Container>
    </section>
  );
}

const styles = {
  container: {
    mt: "60px",
    mb: "100px",
  },
};
