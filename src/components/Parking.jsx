import { Box, Container, Typography } from '@mui/material';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import { parking } from '../config/content';
import { SectionWrapper, AnimatedBlock, SectionDivider } from './Section';

export default function Parking() {
  if (!parking?.enabled) return null;

  const { description } = parking;

  return (
    <SectionWrapper id="estacionamiento" bg="background.paper">
      <Container maxWidth="sm">
        <AnimatedBlock>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <SectionDivider />
            <LocalParkingIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1.5 }} />
            <Typography variant="h4" component="h2" sx={{ mb: 1.5 }}>
              Estacionamiento
            </Typography>
            <Typography color="text.secondary">
              {description}
            </Typography>
          </Box>
        </AnimatedBlock>
      </Container>
    </SectionWrapper>
  );
}
