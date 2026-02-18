import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { hours } from '../config/content';
import { SectionWrapper, SectionDivider } from './Section';

const MotionDiv = motion.create('div');

export default function Hours() {
  if (!hours?.length) return null;

  return (
    <SectionWrapper id="horarios" bg="background.default">
      <Container maxWidth="xs">
        <Box sx={{ textAlign: 'center' }}>
          <SectionDivider />
          <ScheduleIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1.5 }} />
          <Typography variant="h4" component="h2" sx={{ mb: 3 }}>
            Horarios
          </Typography>

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
                  py: 1.25,
                  borderBottom: '1px solid',
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
