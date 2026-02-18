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
        minHeight: { xs: '100svh', sm: '100vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        color: '#fff',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.3) saturate(0.6)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(45,38,64,0.3) 0%, rgba(45,38,64,0.7) 60%, rgba(45,38,64,0.95) 100%)',
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, py: 4, textAlign: 'center' }}>
        <MotionBox
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Typography
            component="p"
            variant="overline"
            sx={{ color: 'primary.light', letterSpacing: 4, mb: 2, fontSize: '0.85rem' }}
          >
            Psicología Clínica
          </Typography>

          <Typography
            component="h1"
            variant="h1"
            sx={{
              fontSize: { xs: '2.25rem', sm: '3.25rem', md: '4rem' },
              lineHeight: 1.1,
              mb: 2.5,
              color: '#fff',
            }}
          >
            {site.name}
          </Typography>

          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
            <Rating
              value={site.rating}
              precision={0.1}
              readOnly
              size="small"
              sx={{ color: '#FFB74D', '& .MuiRating-iconEmpty': { color: 'rgba(255,183,77,0.3)' } }}
            />
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
              {site.rating} ({site.reviewCount} opiniones)
            </Typography>
          </Box>

          <Typography
            variant="h6"
            sx={{
              mb: 4,
              opacity: 0.85,
              fontWeight: 400,
              maxWidth: 560,
              mx: 'auto',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.9)',
            }}
          >
            {site.description}
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
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
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                borderColor: 'rgba(255,255,255,0.5)',
                color: '#fff',
                '&:hover': {
                  borderColor: 'primary.light',
                  bgcolor: 'rgba(92,107,192,0.15)',
                },
              }}
            >
              {ctaSecondary.text}
            </Button>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}
