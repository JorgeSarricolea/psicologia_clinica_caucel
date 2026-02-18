import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import TransgenderIcon from '@mui/icons-material/Transgender';
import VerifiedIcon from '@mui/icons-material/Verified';
import { features } from '../config/content';
import { SectionWrapper, SectionDivider } from './Section';

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
      bg="background.paper"
      sx={{ borderTop: '1px solid', borderBottom: '1px solid', borderColor: 'divider' }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <SectionDivider />
          <Typography variant="h4" component="h2">
            Un espacio seguro para ti
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: 4,
          }}
        >
          {features.map(({ icon, title, text }, i) => {
            const IconComponent = iconMap[icon] || VerifiedIcon;
            return (
              <MotionDiv
                key={title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      bgcolor: 'rgba(92, 107, 192, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <IconComponent sx={{ fontSize: 24, color: 'primary.main' }} />
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" gutterBottom>
                      {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {text}
                    </Typography>
                  </Box>
                </Box>
              </MotionDiv>
            );
          })}
        </Box>
      </Container>
    </SectionWrapper>
  );
}
