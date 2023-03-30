import { Container } from '@mui/system';
import { Section } from 'components/Section/Section';
import bgImgHomePage from 'images/bg-02.webp';

export function Homepage() {
  return (
    <Section title="Home page">
      <Container
        maxWidth="xl"
        sx={{
          backgroundImage: `url(${bgImgHomePage})`,
          maxWidth: '1000px',
          maxHeight: '700px',
          borderRadius: '10px',
        }}
      ></Container>
    </Section>
  );
}
