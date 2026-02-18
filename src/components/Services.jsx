import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AssessmentIcon from '@mui/icons-material/Assessment';
import GroupsIcon from '@mui/icons-material/Groups';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import TranslateIcon from '@mui/icons-material/Translate';
import { services } from '../config/content';
import { SectionWrapper, SectionLabel } from './Section';

const MotionDiv = motion.create('div');

const iconMap = {
  Psychology: PsychologyIcon,
  Favorite: FavoriteIcon,
  Assessment: AssessmentIcon,
  Groups: GroupsIcon,
  SelfImprovement: SelfImprovementIcon,
  Translate: TranslateIcon,
};

export default function Services() {
  if (!services?.length) return null;

  return (
    <SectionWrapper id="servicios" bg="background.paper">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <SectionLabel>Lo que ofrecemos</SectionLabel>
          <Typography variant="h4" component="h2">
            Servicios especializados
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {services.map(({ icon, title, text }, i) => {
            const IconComponent = iconMap[icon] || PsychologyIcon;
            return (
              <MotionDiv
                key={title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 3,
                    p: { xs: 2.5, sm: 3 },
                    bgcolor: 'background.default',
                    borderRadius: 3,
                    transition: 'box-shadow 0.3s, transform 0.3s',
                    '&:hover': {
                      boxShadow: '0 8px 30px rgba(108,92,231,0.08)',
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      bgcolor: 'rgba(108, 92, 231, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <IconComponent sx={{ fontSize: 28, color: 'primary.main' }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle1" sx={{ mb: 0.25 }}>
                      {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
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
