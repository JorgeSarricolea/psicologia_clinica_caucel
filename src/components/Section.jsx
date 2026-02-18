import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

export function SectionWrapper({ id, children, sx = {}, bg = 'background.default', py = { xs: 8, md: 12 } }) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        py,
        bgcolor: bg,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

export function AnimatedBlock({ children, delay = 0, ...motionProps }) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...motionProps}
    >
      {children}
    </MotionBox>
  );
}

export function SectionLabel({ children }) {
  return (
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
        mb: 2,
      }}
    >
      {children}
    </Box>
  );
}
