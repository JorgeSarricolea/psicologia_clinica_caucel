import { Box, Container, Typography } from '@mui/material';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import { parking } from '../config/content';
import { SectionWrapper, AnimatedBlock } from './Section';

export default function Parking() {
  if (!parking?.enabled) return null;

  const { description } = parking;

  return (
    <SectionWrapper id="estacionamiento" bg="background.default">
      <Container maxWidth="sm">
        <AnimatedBlock>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 3,
              p: 3.5,
              bgcolor: 'background.paper',
              borderRadius: 3,
              boxShadow: '0 2px 16px rgba(108,92,231,0.05)',
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
              <LocalParkingIcon sx={{ fontSize: 28, color: 'primary.main' }} />
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ mb: 0.25 }}>
                Estacionamiento gratuito
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </Box>
          </Box>
        </AnimatedBlock>
      </Container>
    </SectionWrapper>
  );
}
