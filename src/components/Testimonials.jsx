import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { testimonials, site } from '../config/content';
import { SectionWrapper, SectionLabel } from './Section';

const MotionDiv = motion.create('div');

export default function Testimonials() {
  if (!testimonials?.length) return null;

  const featured = testimonials.slice(0, 1);
  const rest = testimonials.slice(1);

  return (
    <SectionWrapper
      id="opiniones"
      sx={{
        background: 'linear-gradient(180deg, #FAF9FE 0%, #F0EEFA 50%, #FAF9FE 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <SectionLabel>Testimonios</SectionLabel>
          <Typography variant="h4" component="h2" sx={{ mb: 1 }}>
            Historias de transformación
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {site.rating} estrellas en {site.reviewCount} opiniones de Google
          </Typography>
        </Box>

        {featured.map(({ quote, author }, i) => (
          <MotionDiv
            key={i}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box
              sx={{
                maxWidth: 720,
                mx: 'auto',
                mb: 5,
                p: { xs: 4, sm: 5 },
                bgcolor: 'background.paper',
                borderRadius: 4,
                boxShadow: '0 8px 40px rgba(108,92,231,0.08)',
                textAlign: 'center',
                position: 'relative',
              }}
            >
              <FormatQuoteIcon
                sx={{
                  fontSize: 48,
                  color: 'primary.light',
                  opacity: 0.5,
                  transform: 'scaleX(-1)',
                  mb: 2,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  lineHeight: 1.8,
                  mb: 2,
                  color: 'text.primary',
                }}
              >
                &ldquo;{quote}&rdquo;
              </Typography>
              {author && (
                <Typography variant="body2" color="text.secondary" fontWeight={600}>
                  — {author}
                </Typography>
              )}
            </Box>
          </MotionDiv>
        ))}

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: `repeat(${Math.min(rest.length, 3)}, 1fr)` },
            gap: 2.5,
            maxWidth: 900,
            mx: 'auto',
          }}
        >
          {rest.map(({ quote, author }, i) => (
            <MotionDiv
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Box
                sx={{
                  p: 3,
                  bgcolor: 'background.paper',
                  borderRadius: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 2px 12px rgba(108,92,231,0.04)',
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontStyle: 'italic', flex: 1, lineHeight: 1.7, mb: 1.5 }}
                >
                  &ldquo;{quote}&rdquo;
                </Typography>
                {author && (
                  <Typography variant="caption" color="text.secondary" fontWeight={600}>
                    — {author}
                  </Typography>
                )}
              </Box>
            </MotionDiv>
          ))}
        </Box>
      </Container>
    </SectionWrapper>
  );
}
