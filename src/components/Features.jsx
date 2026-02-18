import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import TransgenderIcon from '@mui/icons-material/Transgender';
import VerifiedIcon from '@mui/icons-material/Verified';
import { features } from '../config/content';
import { SectionWrapper, SectionLabel } from './Section';

const MotionDiv = motion.create('div');

const iconMap = {
  AccessibleForward: AccessibleForwardIcon,
  Diversity3: Diversity3Icon,
  Transgender: TransgenderIcon,
  Verified: VerifiedIcon,
};

export default function Features() {
  if (!features?.length) return null;

  return (
    <SectionWrapper
      id="caracteristicas"
      sx={{
        background: 'linear-gradient(180deg, #FAF9FE 0%, #F0EEFA 50%, #FAF9FE 100%)',
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <SectionLabel>Nuestro compromiso</SectionLabel>
          <Typography variant="h4" component="h2">
            Un espacio seguro para ti
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: 3,
          }}
        >
          {features.map(({ icon, title, text }, i) => {
            const IconComponent = iconMap[icon] || VerifiedIcon;
            return (
              <MotionDiv
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Box
                  sx={{
                    p: 3.5,
                    bgcolor: 'background.paper',
                    borderRadius: 3,
                    boxShadow: '0 2px 16px rgba(108,92,231,0.05)',
                    height: '100%',
                    textAlign: 'center',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 32px rgba(108,92,231,0.1)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      bgcolor: 'rgba(108, 92, 231, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    <IconComponent sx={{ fontSize: 28, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="subtitle1" gutterBottom>
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {text}
                  </Typography>
                </Box>
              </MotionDiv>
            );
          })}
        </Box>
      </Container>
    </SectionWrapper>
  );
}
