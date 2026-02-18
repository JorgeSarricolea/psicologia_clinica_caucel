import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { galleryImages } from '../config/content';
import { SectionWrapper, SectionLabel } from './Section';

const MotionDiv = motion.create('div');

export default function Gallery() {
  if (!galleryImages?.length) return null;

  const spaces = galleryImages.filter((_, i) => i < 2);
  const promos = galleryImages.filter((_, i) => i >= 2);

  return (
    <SectionWrapper
      id="galeria"
      sx={{
        background: 'linear-gradient(180deg, #FAF9FE 0%, #F0EEFA 50%, #FAF9FE 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <SectionLabel>Nuestro espacio</SectionLabel>
          <Typography variant="h4" component="h2">
            Conoce nuestras instalaciones
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 3,
            mb: promos.length > 0 ? 3 : 0,
          }}
        >
          {spaces.map(({ src, alt }, i) => (
            <MotionDiv
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Box
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 4px 24px rgba(108,92,231,0.08)',
                  transition: 'transform 0.4s, box-shadow 0.4s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 40px rgba(108,92,231,0.14)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={src}
                  alt={alt}
                  loading="lazy"
                  sx={{
                    width: '100%',
                    height: { xs: 240, sm: 300 },
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </Box>
            </MotionDiv>
          ))}
        </Box>

        {promos.length > 0 && (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap: 3,
            }}
          >
            {promos.map(({ src, alt }, i) => (
              <MotionDiv
                key={src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Box
                  sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    bgcolor: 'background.paper',
                    boxShadow: '0 4px 24px rgba(108,92,231,0.08)',
                    transition: 'transform 0.4s, box-shadow 0.4s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 40px rgba(108,92,231,0.14)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={src}
                    alt={alt}
                    loading="lazy"
                    sx={{
                      width: '100%',
                      height: { xs: 260, sm: 320 },
                      objectFit: 'contain',
                      display: 'block',
                      p: 1,
                    }}
                  />
                </Box>
              </MotionDiv>
            ))}
          </Box>
        )}
      </Container>
    </SectionWrapper>
  );
}
