import { Box, Container, Typography, Button, Rating } from '@mui/material';
import { motion } from 'framer-motion';
import { hero, site } from '../config/content';

const MotionBox = motion.create(Box);

export default function Hero() {
  const { backgroundImage, ctaPrimary, ctaSecondary } = hero;

  return (
    <Box
      component="section"
      id="inicio"
      aria-label="Inicio"
      sx={{
        minHeight: { xs: 'auto', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'background.default',
        py: { xs: 8, md: 0 },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '-30%',
          right: '-15%',
          width: '60%',
          height: '160%',
          background: 'radial-gradient(ellipse, rgba(108,92,231,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 5, md: 8 },
            alignItems: 'center',
          }}
        >
          <MotionBox
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                bgcolor: 'rgba(108, 92, 231, 0.08)',
                color: 'primary.main',
                fontWeight: 600,
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                px: 2,
                py: 0.75,
                borderRadius: 50,
                mb: 3,
              }}
            >
              Psicología Clínica
            </Box>

            <Typography
              component="h1"
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.25rem', md: '3.75rem' },
                mb: 2,
                color: 'text.primary',
              }}
            >
              Tu bienestar emocional, nuestra prioridad
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 2,
                color: 'text.secondary',
                maxWidth: 480,
                fontSize: '1.1rem',
              }}
            >
              {site.description}
            </Typography>

            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, mb: 4 }}>
              <Rating
                value={site.rating}
                precision={0.1}
                readOnly
                size="small"
                sx={{ color: '#FDCB6E' }}
              />
              <Typography variant="body2" color="text.secondary">
                {site.rating} ({site.reviewCount} opiniones)
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                href={ctaPrimary.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                size="large"
                sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
              >
                {ctaPrimary.text}
              </Button>
              <Button
                href={ctaSecondary.href}
                variant="outlined"
                size="large"
                sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
              >
                {ctaSecondary.text}
              </Button>
            </Box>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            sx={{ display: { xs: 'none', md: 'block' } }}
          >
            <Box
              sx={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 24px 64px rgba(108,92,231,0.15)',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(108,92,231,0.1) 0%, transparent 60%)',
                  pointerEvents: 'none',
                },
              }}
            >
              <Box
                component="img"
                src={backgroundImage}
                alt={site.name}
                sx={{
                  width: '100%',
                  height: 520,
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </Box>
          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
}
