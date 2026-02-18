import { Box, Container, Typography } from '@mui/material';
import { mapEmbed, contact } from '../config/content';
import { SectionWrapper, AnimatedBlock, SectionDivider } from './Section';

export default function MapSection() {
  if (!mapEmbed?.enabled || !mapEmbed?.iframeSrc) return null;

  return (
    <SectionWrapper id="ubicacion" bg="background.paper">
      <Container maxWidth="lg">
        <AnimatedBlock>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <SectionDivider />
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
              borderRadius: 2,
              overflow: 'hidden',
              border: '1px solid',
              borderColor: 'divider',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              '& iframe': {
                display: 'block',
                width: '100%',
                height: { xs: 300, sm: 400 },
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
