import { Box, Container, Typography, Button } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { planning } from '../config/content';
import { SectionWrapper, AnimatedBlock } from './Section';

export default function Planning() {
  if (!planning?.enabled) return null;

  const { title, description, ctaText, ctaHref } = planning;

  return (
    <SectionWrapper id="citas" bg="background.paper">
      <Container maxWidth="sm">
        <AnimatedBlock>
          <Box
            sx={{
              textAlign: 'center',
              p: { xs: 4, sm: 6 },
              bgcolor: 'rgba(108, 92, 231, 0.04)',
              borderRadius: 4,
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            <EventAvailableIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
            <Typography variant="h4" component="h2" sx={{ mb: 1.5 }}>
              {title}
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 3, maxWidth: 400, mx: 'auto' }}>
              {description}
            </Typography>
            <Button
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              size="large"
              sx={{ px: 5 }}
            >
              {ctaText}
            </Button>
          </Box>
        </AnimatedBlock>
      </Container>
    </SectionWrapper>
  );
}
