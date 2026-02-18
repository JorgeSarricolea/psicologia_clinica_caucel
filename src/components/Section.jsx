import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

export function SectionWrapper({ id, children, sx = {}, bg = 'background.default', py = { xs: 8, md: 10 } }) {
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      {...motionProps}
    >
      {children}
    </MotionBox>
  );
}

export function SectionDivider({ sx = {} }) {
  return (
    <Box
      sx={{
        width: 48,
        height: 3,
        bgcolor: 'primary.main',
        mx: 'auto',
        mb: 2,
        borderRadius: 2,
        ...sx,
      }}
    />
  );
}
