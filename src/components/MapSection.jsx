import { Box, Container, Typography } from '@mui/material';
import { mapEmbed, contact } from '../config/content';
import { SectionWrapper, AnimatedBlock, SectionLabel } from './Section';

export default function MapSection() {
  if (!mapEmbed?.enabled || !mapEmbed?.iframeSrc) return null;

  return (
    <SectionWrapper id="ubicacion" bg="background.paper">
      <Container maxWidth="lg">
        <AnimatedBlock>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <SectionLabel>Encuéntranos</SectionLabel>
            <Typography variant="h4" component="h2" sx={{ mb: 1 }}>
              Ubicación
            </Typography>
            {contact?.address && (
              <Typography color="text.secondary">
                {contact.address}
              </Typography>
            )}
          </Box>

          <Box
            sx={{
              position: 'relative',
              width: '100%',
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(108,92,231,0.08)',
              '& iframe': {
                display: 'block',
                width: '100%',
                height: { xs: 300, sm: 420 },
                border: 0,
              },
            }}
          >
            <iframe
              src={mapEmbed.iframeSrc}
              title={mapEmbed.title || 'Ubicación en mapa'}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </AnimatedBlock>
      </Container>
    </SectionWrapper>
  );
}
