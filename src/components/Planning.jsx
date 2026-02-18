import { Box, Container, Typography, Button } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { planning } from '../config/content';
import { SectionWrapper, AnimatedBlock, SectionDivider } from './Section';

export default function Planning() {
  if (!planning?.enabled) return null;

  const { title, description, ctaText, ctaHref } = planning;

  return (
    <SectionWrapper id="citas" bg="background.default">
      <Container maxWidth="sm">
        <AnimatedBlock>
          <Box sx={{ textAlign: 'center' }}>
            <SectionDivider />
            <EventAvailableIcon sx={{ fontSize: 44, color: 'primary.main', mb: 1.5 }} />
            <Typography variant="h4" component="h2" sx={{ mb: 1.5 }}>
              {title}
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 3, maxWidth: 440, mx: 'auto' }}>
              {description}
            </Typography>
            <Button
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              size="large"
              sx={{ px: 4 }}
            >
              {ctaText}
            </Button>
          </Box>
        </AnimatedBlock>
      </Container>
    </SectionWrapper>
  );
}
