import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { hours } from '../config/content';
import { SectionWrapper, SectionLabel } from './Section';

const MotionDiv = motion.create('div');

export default function Hours() {
  if (!hours?.length) return null;

  return (
    <SectionWrapper id="horarios" bg="background.paper">
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <SectionLabel>Disponibilidad</SectionLabel>
          <Typography variant="h4" component="h2">
            Horarios de atención
          </Typography>
        </Box>

        <Box
          sx={{
            bgcolor: 'background.default',
            borderRadius: 3,
            p: { xs: 3, sm: 4 },
          }}
        >
          <ScheduleIcon sx={{ fontSize: 36, color: 'primary.main', mb: 2, display: 'block', mx: 'auto' }} />
          {hours.map((row, i) => (
            <MotionDiv
              key={row.days}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  py: 1.5,
                  borderBottom: i < hours.length - 1 ? '1px solid' : 'none',
                  borderColor: 'divider',
                }}
              >
                <Typography variant="body1" fontWeight={600}>
                  {row.days}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {row.hours}
                </Typography>
              </Box>
            </MotionDiv>
          ))}
        </Box>
      </Container>
    </SectionWrapper>
  );
}
