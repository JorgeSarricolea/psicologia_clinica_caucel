import { Box, Container, Typography, Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { promoBanner } from '../config/content';
import { SectionWrapper, AnimatedBlock } from './Section';

export default function PromoBanner() {
  if (!promoBanner?.enabled) return null;

  const { image, alt, title, description, ctaText, ctaHref } = promoBanner;

  return (
    <SectionWrapper id="nuevo-servicio" bg="background.paper" py={{ xs: 6, md: 10 }}>
      <Container maxWidth="lg">
        <AnimatedBlock>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              alignItems: 'center',
              gap: { xs: 4, md: 6 },
              bgcolor: 'rgba(108, 92, 231, 0.04)',
              borderRadius: 4,
              overflow: 'hidden',
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Box
              sx={{
                p: { xs: 4, sm: 5 },
                order: { xs: 2, md: 1 },
              }}
            >
              <Box
                component="span"
                sx={{
                  display: 'inline-block',
                  bgcolor: 'primary.main',
                  color: 'primary.contrastText',
                  fontWeight: 700,
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 50,
                  mb: 2.5,
                }}
              >
                Nuevo servicio
              </Box>
              <Typography
                variant="h4"
                component="h2"
                sx={{ mb: 1.5, fontSize: { xs: '1.6rem', sm: '1.85rem' } }}
              >
                {title}
              </Typography>
              <Typography
                color="text.secondary"
                sx={{ mb: 3, lineHeight: 1.7 }}
              >
                {description}
              </Typography>
              <Button
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                size="large"
                startIcon={<WhatsAppIcon />}
                sx={{ px: 4 }}
              >
                {ctaText}
              </Button>
            </Box>

            <Box
              sx={{
                order: { xs: 1, md: 2 },
                display: 'flex',
                justifyContent: 'center',
                p: { xs: 2, md: 0 },
              }}
            >
              <Box
                component="img"
                src={image}
                alt={alt}
                sx={{
                  width: '100%',
                  maxWidth: 420,
                  height: 'auto',
                  display: 'block',
                  borderRadius: { xs: 3, md: 0 },
                }}
              />
            </Box>
          </Box>
        </AnimatedBlock>
      </Container>
    </SectionWrapper>
  );
}
